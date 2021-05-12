let baseUrl = "https://papero.me";
const urls = {
    baseUrl: "https://papero.me",
    socketPath: "/dubblock/socket.io",
    getLoginInfoUrl: baseUrl + "/user/get_info",
    createLocalAccountUrl: baseUrl + "/auth/local",
    logoutUrl: baseUrl + "/auth/logout",
}

const game = {
    localId: 1,
    settings: {
        difficulty: 2
    },
    players: [
        {
            localId: 2,
            username: "chicco",
            shape: 1,
            color: 0,
            admin: false
        },
        {
            localId: 3,
            username: "lalla",
            shape: 1,
            color: 2,
            admin: true
        },
        {
            localId: 1,
            username: "matteoilmigliore",
            shape: 3,
            color: 3,
            admin: false
        },
        {
            localId: 7,
            username: "mamma",
            shape: 1,
            color: 3,
            admin: false
        }
    ]
}

function makeId(length) {
    let result           = [];
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i=0; i<length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}
module.exports = {
    urls,
    game,
    makeId
}