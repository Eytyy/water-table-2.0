import io from 'socket.io-client';

// const ip = '192.168.1.130' // strada
// const ip = '192.168.14.40' // syntax
const ip = '192.168.86.24';
// const ip = '192.168.86.248';
// const ip = '172.20.10.2';


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