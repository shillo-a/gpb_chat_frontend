export const selectMessages= (state) => {
    return state.messages.data;
}

export const selectOnlyOwnerMessagesIndicator = (state) => {
    return state.messages.isOnlyOwnerMessages;
}