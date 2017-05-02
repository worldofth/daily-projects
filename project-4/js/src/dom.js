import bacon from 'baconjs';
import {task} from 'folktale/data/task';
import {map, nonEmpty} from './util';
import curry from 'ramda/src/curry';

// getDom: String -> Task(error, DOM)
var getDom = function(selector){
	return new task(resolver => {
		var dom = document.querySelector(selector);
		if(dom){
			resolver.resolve(dom);
		}else{
			resolver.reject('No Dom Node found');
		}
	});
};

// asEventStream:: String -> DomElement -> EventStream
var asEventStream = function (eventName, dom) {
	return new bacon.Desc(
		dom,
		'asEventStream',
		[eventName]),
		bacon.fromBinder(function (handler) {
			dom.addEventListener(eventName, handler);
			return () => dom.removeEventListener(eventName, handler);
		}
	);
};

// domEvent:: DomElement -> EventStream
var domEvent = curry(function(eventName, field){
	var getValue = () => field.value;
	return asEventStream(eventName, field).map(getValue).filter(nonEmpty).skipDuplicates().debounce(100);
});

// fieldEventTrigger:: String -> f(n) -> Task(error, EventStream)
var fieldEventTrigger = curry((selector, cb) => getDom(selector).map(domEvent('keyup')).map(map(cb)));

export {getDom, asEventStream, domEvent, fieldEventTrigger};
