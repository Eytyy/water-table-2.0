import io from "socket.io-client";

const port = "8080";

export const socket = io.connect(`localhost:${port}`);
socket.on("connect", () => {
  socket.emit("join", "Resource Connected");
});

export const broadcastEvent = ({ source, event, payload }) => {
  socket.emit(source, {
    event,
    payload
  });
};
