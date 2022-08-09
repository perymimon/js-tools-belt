export function focusCurrent(callback){
    return function (event){
        if(event.currentTarget === event.target){
            callback(event)
        }
    }
}