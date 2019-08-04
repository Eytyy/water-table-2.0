import io from "socket.io-client";

const port = "8080";
export const socket = io.connect(`localhost:8080`);

socket.on("connect", () => {
  socket.emit("join", "Water Table Controller: connected");
});

export const broadcastEvent = ({ source, event, payload }) => {
  socket.emit(source, {
    event,
    payload
  });
};
