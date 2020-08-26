import { config } from './config';

export class SpotifyApi {
    constructor() {
        this.uri = 'https://accounts.spotify.com/';
        this.apiUri = 'https://api.spotify.com/';
        this.authLink = `${this.uri}ru/authorize?client_id=${config.appId}&response_type=code&redirect_uri=${config.redirectLink}`;
        this.getTokenLink = `${this.uri}api/token`;
        this.getUserLink = `${this.apiUri}v1/me`
    }
    getAccessToken(code) {
        const body = `grant_type=authorization_code&code=${code}&redirect_uri=${config.redirectLink}`;
        return fetch(this.getTokenLink, {
            method: 'POST',
            headers: {
                "Authorization": 'Basic ' + btoa(config.appId + ':' + config.appKey),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        }).then(response => response.json());
    }

    getUserInformation(token) {
        return fetch(this.getUserLink, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => response.json())
    }
}