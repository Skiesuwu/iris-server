const { WebSocketServer } = require("ws");
const Logger = require("../logging/Logger");

const wss = new WebSocketServer({
    port: 443,
}, () => Logger.INFO("WebSocket is Listening on port 443"));

wss.on("connection", () => {
    Logger.INFO("Client Connected.");
});