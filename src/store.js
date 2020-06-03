import {lib} from "./lib/lib";


const store = {
    _state: {
        rates: '',
    },
    _rerender() {
        console.log('rgeg')
    },

    getState() {
        return this._state;
    },
    getListSuccess(data) {
        this._state = data;
        this._rerender(this._state);
    },
    getList() {
        let promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(lib);
            }, 100)
        });
        promise.then(response => {
            this.getListSuccess(response);
        })
    },
    subscribe(observer){
        this._rerender = observer;
    }
}

export default store;











