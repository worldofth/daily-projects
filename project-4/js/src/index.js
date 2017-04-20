//import {seachAndGetVideoItems} from './videoSearch';
import {log} from './util';
import {task} from 'folktale/data/task';
import flip from 'ramda/src/flip';
import bacon from 'bacon';

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

var listen = flip(bacon.fromEvent);

// keypressStream: DOM -> EventStream DomEvent
//var keypressStream = listen('keyup');

function main(){
	getDom('body').map(log).map(listen('click')).run();

	//getDom('body').apply().map(log).run().promise().catch(log);
	//seachAndGetVideoItems('extra credits').map(log).run().promise().catch(log);
}

document.addEventListener('DOMContentLoaded', main);
