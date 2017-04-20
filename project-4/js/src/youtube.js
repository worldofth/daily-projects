import {task as Task} from 'folktale/data/task';
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
	return Task((resolver) => {
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

var baseSearchURL = searchURL(youtubeAPIKey);
var searchForVideos = compose(search, queryPerPage(10), baseSearchURL('video'));
var searchForChannel = compose(search, queryPerPage(10), baseSearchURL('channel'));

export {searchForVideos, searchForChannel};
