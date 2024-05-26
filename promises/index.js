const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
  }
  
  class MyPromise {
    #then = []
    #catch = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)
  
    constructor(cb) {
      try {
        cb(this.#onSuccessBind, this.#onFailBind)
      } catch (e) {
        this.#onFail(e)
      }
    }
  
    #runCallbacks() {
      if (this.#state === STATE.FULFILLED) {
        this.#then.forEach(callback => {
          callback(this.#value)
        })
  
        this.#then = []
      }
  
      if (this.#state === STATE.REJECTED) {
        this.#catch.forEach(callback => {
          callback(this.#value)
        })
  
        this.#catch = []
      }
    }
  
    #onSuccess(value) {
      queueMicrotask(() => {
        if (this.#state !== STATE.PENDING) return
  
        if (value instanceof MyPromise) {
          value.then(this.#onSuccessBind, this.#onFailBind)
          return
        }
  
        this.#value = value
        this.#state = STATE.FULFILLED
        this.#runCallbacks()
      })
    }
  
    #onFail(value) {
      queueMicrotask(() => {
        if (this.#state !== STATE.PENDING) return
  
        if (value instanceof MyPromise) {
          value.then(this.#onSuccessBind, this.#onFailBind)
          return
        }
  
        if (this.#catch.length === 0) {
          throw new UncaughtPromiseError(value)
        }
  
        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallbacks()
      })
    }
  
    then(thenCb, catchCb) {
      return new MyPromise((resolve, reject) => {
        this.#then.push(result => {
          if (thenCb == null) {
            resolve(result)
            return
          }
  
          try {
            resolve(thenCb(result))
          } catch (error) {
            reject(error)
          }
        })
  
        this.#catch.push(result => {
          if (catchCb == null) {
            reject(result)
            return
          }
  
          try {
            resolve(catchCb(result))
          } catch (error) {
            reject(error)
          }
        })
  
        this.#runCallbacks()
      })
    }
  
    catch(cb) {
      return this.then(undefined, cb)
    }
  
    finally(cb) {
      return this.then(
        result => {
          cb()
          return result
        },
        result => {
          cb()
          throw result
        }
      )
    }
  
    static resolve(value) {
      return new Promise(resolve => {
        resolve(value)
      })
    }
  
    static reject(value) {
      return new Promise((resolve, reject) => {
        reject(value)
      })
    }
  
    static all(promises) {
      const results = []
      let completed = 0

      return new MyPromise((results, reject) => {

        promises.forEach((promise, index) => {

            promise.then(res => {

                completed++;

                results[index] =res;

                if(completed === promises.length) results(results)
            })
                .catch(err=> {

                    reject(err)
                })
        })
      })
   
    }
  
    static allSettled(promises) {
      const results = []
      let completedPromises = 0
      return new MyPromise(resolve => {
        for (let i = 0; i < promises.length; i++) {
          const promise = promises[i]
          promise
            .then(value => {
              results[i] = { status: STATE.FULFILLED, value }
            })
            .catch(reason => {
              results[i] = { status: STATE.REJECTED, reason }
            })
            .finally(() => {
              completedPromises++
              if (completedPromises === promises.length) {
                resolve(results)
              }
            })
        }
      })
    }
  
    static race(promises) {
      return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
          promise.then(resolve).catch(reject)
        })
      })
    }
  
    static any(promises) {

      const errors = []
      let rejectedPromises = 0

      return new MyPromise((resolve, reject) => {

        for (let i = 0; i < promises.length; i++) {

          const promise = promises[i]

          promise.then(resolve).catch(value => {

            rejectedPromises++
            errors[i] = value

            if (rejectedPromises === promises.length) {
                
              reject(new AggregateError(errors, "All promises were rejected"))
            }
          })
        }
      })
    }
  }
  
  class UncaughtPromiseError extends Error {
    constructor(error) {
      super(error)
  
      this.stack = `(in promise) ${error.stack}`
    }
  }
  
  module.exports = MyPromise