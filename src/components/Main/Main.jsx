import React from 'react';
import { SpotifyApi } from '../../SpotifyApi';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            access: {
                token: '',
                refreshToken: '',
                tokenType: ''
            },
            user: {
                name: '',
                id: ''
            }
        };

        this.api = new SpotifyApi();
    }

    componentDidMount() {
        const search = window.location.search;

        if (search && search.includes('code') && !this.state.accessToken) {
            const code = search.split('=')[1]
            this.api.getAccessToken(code)
                .then(credentials => {
                    if (!this.state.access.token) {
                        const { access_token, refresh_token, token_type } = credentials;
                        this.setState({
                            access: {
                                token: access_token,
                                refreshToken: refresh_token,
                                tokenType: token_type
                            }
                        });
                    }
                })
                .then(() => {
                    if (this.state.access.token) {
                        this.api.getUserInformation(this.state.access.token)
                            .then(userInformation => {
                                const { display_name, id } = userInformation;
                                this.setState({
                                    user: {
                                        id: id,
                                        name: display_name
                                    }
                                });
                            })
                    }

                })
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
                {this.state.user.name
                    ? <p>Hi {this.state.user.name}</p>
                    : <p><a href={this.api.authLink}>login via spotify</a></p>
                }
            </>
        )
    }
}
