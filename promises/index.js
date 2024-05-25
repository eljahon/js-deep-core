class myPromise{
    constructor (cb) {
        try{
            cb(this.#onSuccess, this.#onField) {

            }
        } catch (err) {
                 this.#onField(err)
        }
    }
     #onField  () {

    }
     #onSuccess () {

    }

    all(promises) {
        return new Promise((resovle, reject) => {
            
            if(!promises.length) return resovle([]);

            let results = [];
            let completed = 0;
             promises.forEach((promise, index) => {
               promise.then(res => {
                resovle[index] = res;
                completed++
                if(completed === promises.length) resovle(results)
               })
            .catch(err=> {
                reject(err)
            })
            })
        })
    }
}