import { CompatibleDatafeedBase } from './trading.base.service';
import { Requester } from './requester';

export class CompatibleDatafeed extends CompatibleDatafeedBase {
	constructor(datafeedURL, updateFrequency = 10 * 1000) {
		const requester = new Requester();
		super(datafeedURL, requester, updateFrequency);
	}
}
