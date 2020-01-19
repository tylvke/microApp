class Emitter{
    constructor(){
        this.listeners = {}
    }
    on(event, cb){
        const listeners = this.listeners;
        listeners[event] = listeners[event] || [];
        listeners[event].push(cb);
    }
    emit(event){
        const args = Array.from(arguments).slice(1);
        (this.listeners[event] || []).forEach(cb=>{
            cb.apply(null,args);
        })
    }
    remove(event, listener){
        var listeners = this.listeners;
        var arr = listeners[event] || [];
        var i = arr.indexOf(listener);
        if (i >= 0) {
            listeners[event].splice(i, 1);
        }
    }
}

export default Emitter;