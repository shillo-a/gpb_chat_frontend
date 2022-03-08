export class Message {

    constructor(message){
        this.id = message.id;
        this.body = message.body;
        this.authorKey = message.author_key;
        this.createdAt = message.created_at;
        
        //дополнительные поля
        this.createdAtTime = (() => {
            let date = new Date(this.createdAt);
            return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        })()
    }

}