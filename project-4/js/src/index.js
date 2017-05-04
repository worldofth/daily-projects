import {seachAndGetVideoItems} from './videoSearch';
import {getDom, domEvent} from './dom';
import {log, map} from './util';
import reduce from 'ramda/src/reduce';
import curry from 'ramda/src/curry';
import compose from 'ramda/src/compose';
import {task, of} from 'folktale/data/task';

// getInput:: String -> EventStream<Task(error, String)>
var getInput = compose(map(domEvent('keyup')), getDom);

// wrapDom:: String -> String -> String
var wrapDom = curry((start, end, html) => start + html + end);

// createResultItem:: String -> Obj -> String
var createResultItem = (html, item) => html + `<li><a href="https://www.youtube.com/embed/${item.videoId}" target="vidIframe">${item.title}</a></li>`;

// createResultItems:: String[] -> String
var createResultItems = compose(wrapDom('<ul>', '</ul>'), reduce(createResultItem, ''));

// innerHtml:: [String, Dom] -> Task(error, String)
var innerHtml = ([html, dom]) => task(resolver => resolver.resolve(dom.innerHTML = html));

var triggerSearchTasks = task => task.map(createResultItems).and(getDom('.js-output')).chain(innerHtml).run().future();

function main(){
	getInput('.js-input').map(map(seachAndGetVideoItems)).map(map(triggerSearchTasks)).run().future().map((evtStrm) => evtStrm.onValue());
}

document.addEventListener('DOMContentLoaded', main);
