/**
 * Created by korman on 06.09.18.
 */


export default class Config
{
    constructor() {
        this._backendUrl = 'http://weather.ceant.net/';
    }

    get backendUrl() {
        return this._backendUrl;
    }
}