//import {seachAndGetVideoItems} from './videoSearch';
import {log} from './util';
import {of, task} from 'folktale/data/task';
import Maybe from 'folktale/data/maybe';
import flip from 'ramda/src/flip';
import curry from 'ramda/src/curry';
import Rx from 'rx';
import compose from 'ramda/src/compose';
import chain from 'ramda/src/chain';
import map from 'ramda/src/chain';
import apply from 'ramda/src/apply';

// getDom: String -> Task(error, DOM)
var getDom = function(selector){
	return new task(resolver => {
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

var combineDom = curry((a, b) => [a, b]);
var liftA2 = curry((f, fn1, fn2) => fn1.map(f).apply(fn2));
var getInputOutput = getDom('body').chain(input => getDom('.js-input').chain(output => of({input, output})));

var test = liftA2(combineDom, getDom('body'), getDom('.js-input'));
//compose(map(log), chain(combineDom('test')), of);

function main(){
	test.map(log).run().future();
	//getInputOutput.map(log).run().future();
	//getDom('.js-input').map(keypressStream).map(subscribe(log, log)).run().future();
	//seachAndGetVideoItems('extra credits').map(log).run().promise().catch(log);
}

document.addEventListener('DOMContentLoaded', main);
