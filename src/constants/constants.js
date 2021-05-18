let baseUrl = "https://papero.me";
const urls = {
    baseUrl: "https://papero.me",
    socketPath: "/dubblock/socket.io",
    getLoginInfoUrl: baseUrl + "/user/get_info",
    createLocalAccountUrl: baseUrl + "/auth/local",
    logoutUrl: baseUrl + "/auth/logout",
    newId: baseUrl + "/server/dubblock/games/getNewId"
}

const game = {
    localId: 1,
    settings: {
        difficulty: 2,
        rows: 10,
        columns: 5
    },
    players: [
        {
            localId: 2,
            username: "chicco",
            shape: 1,
            color: 0,
            admin: false,
            online: true,
            playing: false,
            row: -1,
            column: 2
        },
        {
            localId: 3,
            username: "lalla",
            shape: 0,
            color: 2,
            admin: true,
            online: false,
            playing: false,
            row: 0,
            column: 2
        },
        {
            localId: 1,
            username: "matteoilmigliore",
            shape: 3,
            color: 3,
            admin: false,
            online: false,
            playing: true,
            row: 9,
            column: 2
        },

        {
            localId: 18,
            shape: 1,
            color: 1,
            admin: false,
            online: false,
            playing: false,
            row: 0,
            column: 2
        },
        {
            localId: 7,
            username: "mamma",
            shape: 2,
            color: 1,
            admin: false,
            online: true,
            playing: false,
            row: 0,
            column: 3
        }
    ],
    obstacles: [
        {
            row: 0,
            column: 2
        },
        {
            row: 2,
            column: 1
        },
        {
            row: 3,
            column: 3
        },
        {
            row: 0,
            column: 3
        },
        {
            row: 9,
            column: 1
        },
    ]

}

module.exports = {
    urls,
    game,
}