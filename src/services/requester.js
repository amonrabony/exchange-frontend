export class Requester {
	_headers;

	constructor(headers = null) {
		if (headers) {
			this._headers = headers;
		}
	}

	sendRequest(datafeedUrl, urlPath, params = undefined) {
		if (params !== undefined) {
			const paramKeys = Object.keys(params);
			if (paramKeys.length !== 0) {
				urlPath += '?';
			}

			urlPath += paramKeys.map((key) => {
				return `${encodeURIComponent(key)}=${encodeURIComponent(params[key].toString())}`;
			}).join('&');
		}

		// Send user cookies if the URL is on the same origin as the calling script.
		const options = { credentials: 'same-origin' };

		if (this._headers !== undefined) {
			options.headers = this._headers;
		}

		return fetch(`${datafeedUrl}/${urlPath}`, options)
			.then((response) => response.text())
			.then((responseTest) => JSON.parse(responseTest));
	}
}
