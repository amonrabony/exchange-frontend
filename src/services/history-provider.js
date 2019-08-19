export class HistoryProvider {
	_datafeedUrl;
	_requester;

	constructor(datafeedUrl, requester) {
		this._datafeedUrl = datafeedUrl;
		this._requester = requester;
	}

	getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate) {
		// const requestParams = {
		// 	symbol: symbolInfo.ticker || '',
		// 	resolution: resolution,
		// 	from: rangeStartDate,
		// 	to: rangeEndDate,
		// };

    const requestParams = {
      time_from: rangeStartDate,
      time_to: rangeEndDate,
    };

    // const rangeEndTime = parseInt((Date.now() / 1000).toString());
    // const rangeStartTime = rangeEndTime - 1 * 24 * 60 * 60;

		return new Promise((resolve, reject) => {
			this._requester.sendRequest('http://www.app.local', 'api/v2/peatio/public/markets/ethusd/k-line', requestParams)
      // this._requester.sendRequest(this._datafeedUrl, 'history', requestParams)
				.then((response) => {
					// if (response.s !== 'ok' && response.s !== 'no_data') {
					// 	reject(response.errmsg);
					// 	return;
					// }

					let bars = [];
					const meta = {
						noData: false,
					};

					// if (response.s === 'no_data') {
					// 	meta.noData = true;
					// 	meta.nextTime = response.nextTime;
					// } else {
					if (!response.length) {
						meta.noData = true;
						// meta.nextTime = 1566226690;
					} else {
						const volumePresent = response.v !== undefined;
						const ohlPresent = response.o !== undefined;

						// for (let i = 0; i < response.t.length; ++i) {
						// 	const barValue = {
						// 		time: response.t[i] * 1000,
						// 		close: Number(response.c[i]),
						// 		open: Number(response.c[i]),
						// 		high: Number(response.c[i]),
						// 		low: Number(response.c[i]),
						// 	};
            //
						// 	if (ohlPresent) {
						// 		barValue.open = Number((response).o[i]);
						// 		barValue.high = Number((response).h[i]);
						// 		barValue.low = Number((response).l[i]);
						// 	}
            //
						// 	if (volumePresent) {
						// 		barValue.volume = Number((response).v[i]);
						// 	}
            //
						// 	bars.push(barValue);
						// }

            const data = response.map((item => {
            	return {
                time: item[0] * 1000,
                open: Number(item[1]),
                high: Number(item[2]),
                low: Number(item[3]),
                close: Number(item[4]),
								volume: Number(item[5]),
              };
            }));

            bars = data;
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
