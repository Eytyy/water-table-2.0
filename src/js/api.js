import io from 'socket.io-client';

// const ip = '192.168.1.130' // strada 
// const ip = '192.168.1.146' // strada 
// const ip = '192.168.14.40' // syntax
// const ip = '192.168.86.140';
// const ip = '192.168.86.50';
// const ip = '172.20.10.2';


const port = '8080';
export const socket = io.connect(`water-table--v2-dev.us-west-2.elasticbeanstalk.com:8080`);

socket.on('connect', () => {
	socket.emit('join', 'Water Table Controller: connected');
});

export const broadcastEvent = ({ source, event, payload }) => {
	socket.emit(source, {
		event,
		payload,
	});
};