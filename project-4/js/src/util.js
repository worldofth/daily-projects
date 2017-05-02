import values from 'ramda/src/values';
import mergeAll from 'ramda/src/mergeAll';
import compose from 'ramda/src/compose';
import curry from 'ramda/src/curry';

var log = x => (console.log(x), x);
var map = curry((f, func) => func.map(f));
var spreadObj = compose(mergeAll, values);
var nonEmpty = (x) => x && x.length > 0;

export {log, map, spreadObj, nonEmpty};
