class EventEmmiter {
    constructor() {
     this.events = {}
    }

    on(event, callback) {
        if(!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    }

    emit(event, ...args) {
        if(this.events[event]) {
            this.events[event].forEach(fn => fn(...args))
        }
    }
    off(event, callback) {    
        if(this.events[event]) {
            this.events[event] = this.events[event].filter(fn => fn !== callback)
        }
    }

    once(event, callback) {
        const once = (...args) => {
            callback(...args)
            this.off(event, once)
        }
        this.on(event, once)
    }

    removeAllListeners(event) {
        if(this.events[event]) {
            delete this.events[event]
        }
    }

    removeListener(event, callback) {
        if(this.events[event]) {
            this.events[event] = this.events[event].filter(fn => fn !== callback)
        }
    }

    trigger(event, ...args) {
        if(this.events[event]) {
            this.events[event].forEach(fn => fn(...args))
        }
    }

    listen(event, callback) {
        this.on(event, callback)
    }

    unlisten(event, callback) {
        this.off(event, callback)
    }

    listnersCount(event) {
        if(this.events[event]) {
            return this.events[event].length
        }
    }
}


const emmiter = new EventEmmiter()

emmiter.on('click', (e) => {
    console.log(e)
})

emmiter.emit('click', 'hello')

emmiter.off('click', (e) => {
    console.log(e)
})

emmiter.once('click', (e) => {
    console.log(e)
})

emmiter.emit('click', 'salom')

console.log(emmiter.listnersCount('click'));
