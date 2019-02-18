import io from 'socket.io-client';

const ip = '192.168.1.82' // strada
// const ip = '192.168.86.214';
const port = '8080';
export const socket = io.connect(`http://${ip}:${port}`);

socket.on('connect', () => {
	socket.emit('join', 'Water Table Controller: connected');
});

export const broadcastEvent = ({ source, event, payload }) => {
	socket.emit(source, {
		event,
		payload,
	});
};