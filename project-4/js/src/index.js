//import {seachAndGetVideoItems} from './videoSearch';
import {log} from './util';
import {task} from 'folktale/data/task';
import flip from 'ramda/src/flip';
import curry from 'ramda/src/curry';
import Rx from 'rx';

// getDom: String -> Task(error, DOM)
var getDom = function(selector){
	return task(resolver => {
		var dom = document.querySelector(selector);
		if(dom){
			resolver.resolve(dom);
		}else{
			resolver.reject('Could not find dom');
		}
	});
};

var listen = flip(Rx.Observable.fromEvent);

// keypressStream: DOM -> EventStream DomEvent
var keypressStream = listen('keyup');
var subscribe = curry(function(res, rej, strm){
	strm.subscribe(res, rej);
});

function main(){
	getDom('.js-input').map(keypressStream).map(subscribe(log, log)).run().future();
	//seachAndGetVideoItems('extra credits').map(log).run().promise().catch(log);
}

document.addEventListener('DOMContentLoaded', main);
