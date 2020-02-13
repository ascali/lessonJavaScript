function birthdayCakeCandles(ar) {
	ar.sort((a, b) => a - b);
	const max = ar[ar.length - 1];
	return ar.filter(candleHeight => candleHeight === max).length;
}
birthdayCakeCandles([3,2,1,3])