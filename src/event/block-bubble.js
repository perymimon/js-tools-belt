export function blockBubble(callback){
    return function (event){
        if(event.currentTarget === event.target){
            callback(event)
        }
    }
}