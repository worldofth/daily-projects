import Task from 'data.task';
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
	return new Task((rej, res) => {
		fetch(url)
		.then(response => {
			if(!response.ok){
				rej('Fetch was rejected');
			}
			return response.json();
		})
		.then(data => res(data))
		.catch(() => rej('error occured during fetch'));
	});
};

var baseSearchURL = searchURL(youtubeAPIKey);
var searchForVideos = compose(search, queryPerPage(10), baseSearchURL('video'));
var searchForChannel = compose(search, queryPerPage(10), baseSearchURL('channel'));

export {searchForVideos, searchForChannel};
