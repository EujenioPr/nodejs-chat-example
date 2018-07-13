module.exports = {
    dbname: "chatdb",
    uri: "mongodb://localhost/chatdb",
    opts: {
        auto_reconnect: true,
        poolSize: 40
    }
}