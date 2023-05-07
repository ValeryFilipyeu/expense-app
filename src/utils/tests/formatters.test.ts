import { priceFormatter } from '../formatters';

describe('priceFormatter tests', () => {
	test('priceFormatter should return sum with exact symbol', () => {
		const result = priceFormatter(100, { currency: 'EUR' });

		expect(result).toEqual('€100');
	});
});
