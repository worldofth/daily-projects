import {searchForVideos} from './youtube';
import prop from 'ramda/src/prop';
import pick from 'ramda/src/pick';
import compose from 'ramda/src/compose';
import map from 'ramda/src/map';
import {log, spreadObj} from './util';

// getVideoProps: {k:v} -> {k:v}
var getVideoProps = pick(['videoId', 'title', 'channelTitle', 'description']);

// getVideoItem: {k:v} -> {k:v}
var getVideoItem = compose(getVideoProps, spreadObj, pick(['snippet', 'id']));

// getVideoItems: [{k:v}] -> [{k:v}]
var getVideoItems = compose(map(getVideoItem), prop('items'));

// seachAndGetVideoItems: String -> Task(error, [{k:v}])
var seachAndGetVideoItems = compose(map(getVideoItems), searchForVideos);

function main(){
	seachAndGetVideoItems('extra credits').fork(log, log);
}

document.addEventListener('DOMContentLoaded', main);
