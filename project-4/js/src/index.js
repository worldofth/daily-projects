import {seachAndGetVideoItems} from './videoSearch';
import {getDom, domEvent} from './dom';
import {log, map} from './util';
import reduce from 'ramda/src/reduce';
import curry from 'ramda/src/curry';
import compose from 'ramda/src/compose';
import {task} from 'folktale/data/task';

var getInput = getDom('.js-input').map(domEvent('keyup'));

var createResultItem = (html, item) => html + `<li><a href="https://www.youtube.com/embed/${item.videoId}" target="#vidIframe">${item.title}</a></li>`;

var createResultItems = reduce(createResultItem, '');

var innerHtml = curry((dom, html) => dom.innerHTML = html);

var getOutput = getDom('.js-output')

function main(){
	var triggerSearch = task => task.map(createResultItems).map(log).run().promise();
	getInput.map(map(seachAndGetVideoItems)).map(map(triggerSearch)).run().future().map((evtStrm) => evtStrm.onValue());
}

document.addEventListener('DOMContentLoaded', main);
