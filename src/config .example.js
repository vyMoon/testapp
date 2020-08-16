export const config ={
    appId: 'your application id',
    appKey: 'your application secret',
    redirectLink: 'http://localhost:3000',
}

export const links = {
    authLink: `https://accounts.spotify.com/ru/authorize?client_id=${config.appId}&response_type=code&redirect_uri=${config.redirectLink}`,
    tokenLink: `https://accounts.spotify.com/api/token`,
}