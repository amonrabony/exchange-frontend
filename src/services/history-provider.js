export class HistoryProvider {
	_datafeedUrl;
	_requester;

	constructor(datafeedUrl, requester) {
		this._datafeedUrl = datafeedUrl;
		this._requester = requester;
	}

	getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate) {
		const requestParams = {
			symbol: symbolInfo.ticker || '',
			resolution: resolution,
			from: rangeStartDate,
			to: rangeEndDate,
		};

		return new Promise((resolve, reject) => {
			// this._requester.sendRequest(this._datafeedUrl, '/api/v2/peatio/public/markets/ethusd/k-line', requestParams)
      this._requester.sendRequest(this._datafeedUrl, 'history', requestParams)
				.then((response) => {
					if (response.s !== 'ok' && response.s !== 'no_data') {
						reject(response.errmsg);
						return;
					}

					const bars = [];
					const meta = {
						noData: false,
					};

					if (response.s === 'no_data') {
						meta.noData = true;
						meta.nextTime = response.nextTime;
					} else {
						const volumePresent = response.v !== undefined;
						const ohlPresent = response.o !== undefined;

						for (let i = 0; i < response.t.length; ++i) {
							const barValue = {
								time: response.t[i] * 1000,
								close: Number(response.c[i]),
								open: Number(response.c[i]),
								high: Number(response.c[i]),
								low: Number(response.c[i]),
							};

							if (ohlPresent) {
								barValue.open = Number((response).o[i]);
								barValue.high = Number((response).h[i]);
								barValue.low = Number((response).l[i]);
							}

							if (volumePresent) {
								barValue.volume = Number((response).v[i]);
							}

							bars.push(barValue);
						}
					}

					resolve({
						bars: bars,
						meta: meta,
					});
				})
				.catch((reason) => {
					const reasonString = 'HistoryProvider - ERROR';
					console.warn(`HistoryProvider: getBars() failed, error=${reasonString}`);
					reject(reasonString);
				});
		});
	}
}
