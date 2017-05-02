import {task} from 'folktale/data/task';
import curry from 'ramda/src/curry';
import compose from 'ramda/src/compose';
import {youtubeAPIKey} from './api-keys';

// searchURL: String -> String -> String -> String
var searchURL = curry(function(apiKey, type, query){
	var url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=${type}&q=${query}`;
	return url;
});

// queryChanel: String -> String -> String
// var queryChanel = curry(function(chanelID, searchURL){
// 	searchURL += '&channelId=' + chanelID;
// 	return searchURL;
// });

// queryPerPage: Number -> String -> String
var queryPerPage = curry(function(perPage, searchURL){
	searchURL += '&maxResults=' + perPage;
	return searchURL;
});

// search: String -> Task(error, Object)
var search = function(url){
	return new task(resolver => {
		fetch(url)
		.then(response => {
			if(!response.ok){
				resolver.reject('Fetch was rejected');
			}
			return response.json();
		})
		.then(data => resolver.resolve(data))
		.catch(() => resolver.reject('error occured during fetch'));
	});
};

// var debugSearch = function(url){
// 	return new task(resolver => {
// 		if(url){
// 			resolver.resolve(url);
// 		}else{
// 			resolver.reject('no url');
// 		}
// 	});
// };

var debugSearch = url => task(
	(resolver) => setTimeout(() => resolver.resolve(url), 1000),
	{
		cleanup: (timer) => clearTimeout(timer)
	}
);

var baseSearchURL = searchURL(youtubeAPIKey);
var searchForVideos = compose(debugSearch, queryPerPage(10), baseSearchURL('video'));
var searchForChannel = compose(debugSearch, queryPerPage(10), baseSearchURL('channel'));

export {searchForVideos, searchForChannel};
