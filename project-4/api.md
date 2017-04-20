search api

url: https://www.googleapis.com/youtube/v3/search
api key:
params:
{
	key: apiKey,
	part: 'snippet',
	type: 'channel|playlist|video',
	q: queryString,
	maxResults: 5 (default is 5)
}

https://www.googleapis.com/youtube/v3/search?key=&part=snippet&type=video&q=extra%20credits

https://www.youtube.com/embed/{videoID}
