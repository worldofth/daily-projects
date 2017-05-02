import {searchForVideos} from './youtube';
//import {seachAndGetVideoItems} from './videoSearch';
import {getDom, domEvent} from './dom';
import {log, map} from './util';

var getInput = getDom('.js-input').map(domEvent('keyup'))

function main(){
	//seachAndGetVideoItems('extra credits').map(log).run().future();
	var triggerSearch = task => task.map(log).run().promise();
	getInput.map(map(searchForVideos)).map(map(triggerSearch)).run().future().map((evtStrm) => evtStrm.onValue());
}

document.addEventListener('DOMContentLoaded', main);
