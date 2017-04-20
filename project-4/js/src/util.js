import Maybe from 'folktale/data/maybe';
import values from 'ramda/src/values';
import mergeAll from 'ramda/src/mergeAll';
import compose from 'ramda/src/compose';

var log = function(x){
	console.log(x);
	return x;
};

var maybe = function(val){
	return val ? Maybe.just(val) : Maybe.Nothing();
};

var spreadObj = compose(mergeAll, values);

export {log, maybe, spreadObj};
