export function noBubble(callback){
    return function (event){
        if(event.currentTarget === event.target){
            callback(event)
        }
    }
}