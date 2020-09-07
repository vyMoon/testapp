import { config } from './config';

export class SpotifyApi {
    constructor() {
        this.uri = 'https://accounts.spotify.com/';
        this.apiUri = 'https://api.spotify.com/';
        this.authLink = `${this.uri}ru/authorize?client_id=${config.appId}&response_type=code&redirect_uri=${config.redirectLink}`;
        this.getTokenLink = `${this.uri}api/token`;
        this.getUserLink = `${this.apiUri}v1/me`;
        this.searchLink = `${this.apiUri}v1/search`;

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

    getMusic(string, type, limit, token) {
        const uri = `${this.searchLink}?q=${string}&type=${type}&limit=${limit}`
        // https://api.spotify.com/v1/search?q=muse&type=artist&limit=20
        return fetch(uri, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        }).then(response => response.json())
    }
}