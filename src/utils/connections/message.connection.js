
let eventSource;

// event sourcing - keep connection
const createMessagesConnection = () => {
    eventSource = new EventSource(`http://localhost:8081/api/messages-connection`);
    return eventSource;
}

const closeMessagesConnection = () => {
    return eventSource.close();
}

export default {
    createMessagesConnection,
    closeMessagesConnection
}