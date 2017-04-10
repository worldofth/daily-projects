import {add, minus, times} from './math';

describe('Math stuffs from index', () => {
	describe('add', () => {
		 it('should add 1 + 1 and make 2', () => assert.equal(2, add(1, 1)));
	});

	describe('add 2', () => {
		 it('should add 5 + 5 and make 10', () => assert.equal(10, add(5, 5)));
	});

	describe('minus', () => {
		it('should take 1 from 3 and make 2', () => assert.equal(2, minus(3, 1)));
	});

	describe('times', () => {
		it('should times 2 by 5 and make 10', () => assert.equal(10, times(5, 2)));
	});
});
