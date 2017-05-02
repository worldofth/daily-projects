//import {seachAndGetVideoItems} from './videoSearch';
import {log} from './util';
// import {of, task} from 'folktale/data/task';
// import {future} from 'folktale/data/future';
// import Maybe from 'folktale/data/maybe';
// import flip from 'ramda/src/flip';
// import curry from 'ramda/src/curry';
// import compose from 'ramda/src/compose';
// import chain from 'ramda/src/chain';
// import apply from 'ramda/src/apply';
// import prop from 'ramda/src/prop';
import bacon from 'baconjs';

//var map = curry((f, func) => func.map(f));
//var flipMap = flip(map);

// getDom: String -> Task(error, DOM)
// var getDom = function(selector){
// 	return new task(resolver => {
// 		var dom = document.querySelector(selector);
// 		if(dom){
// 			resolver.resolve(dom);
// 		}else{
// 			resolver.reject('No Dom Node found');
// 		}
// 	});
// };


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

var nonEmpty = function(x){
	return x && x.length > 0;
};

var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

var domEvent = function(textfield) {
	var autofillPoller, getValue;

	getValue = function() {
		return textfield.value;
	};
	autofillPoller = function() {
		if (textfield.getAttribute('type') === 'password') {
			return bacon.interval(100);
		} else if (isChrome) {
			return bacon.interval(100).take(20).map(getValue).filter(nonEmpty).take(1);
		} else {
			return bacon.never();
		}
	};

	return asEventStream(textfield, 'keyup input').merge(asEventStream(textfield, 'cut paste').delay(1)).merge(autofillPoller()).map(getValue).toProperty(getValue()).skipDuplicates();
};

var smallDomEvent = function(field){
	var getValue = () => field.value;
	return asEventStream('keyup', field).map(getValue).skipDuplicates();
};

// eventStream:: Dom -> String -> eventStream
// var eventStream = curry((type, dom) => bacon.fromEvent(dom, type));

//var combineDom = curry((a, b) => [a, b]);
// var innerHtml = curry((el, html) => (el.innerHTML = html));
// var liftA2 = curry((f, fn1, fn2) => fn1.map(f).apply(fn2));

// var testhtml = of('<h1>test</h1>');
// var preLog = liftA2(innerHtml, getDom('.js-output'));
//
// var test = compose(map(eventStream('keyup')), map(log), getDom);

function main(){
	//var input = domEvent(document.querySelector('.js-input'));
	//input.changes().skipDuplicates().throttle(300).map(log);
	//bacon.fromEvent(document.querySelector('.js-input'), 'keyup').onValue(log);
	//bacon.fromEvent(, 'keyup');
	//test('.js-input').run().future();
	smallDomEvent(document.querySelector('.js-input')).map(log)
	//.onValue(() => {console.log('onValue');})
	//.onError(() => {console.log('onError');})
	//.onEnd(() => {console.log('onEnd');});
	.onValue(() => {console.log('sub');});
}

document.addEventListener('DOMContentLoaded', main);
