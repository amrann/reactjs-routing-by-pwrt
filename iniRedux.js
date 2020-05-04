// Cara running file ini => node iniRedux.js

const redux = require('redux');
const buatStore = redux.createStore;

const inisialState = {
    value: 0,
    age: 17
}


// Perlu membuat Reducer 
// Suatu fungsi yang bertugas untuk mengupdate value yg ada pada Store (tidk ada fungsi lain yg bisa mengupdate value selain Reducer)
const rootReducer = (state = inisialState, action) => {
    if(action.type === 'ADD_AGE'){
        return {
            ...state, // teknik mutable
            age: state.age + 1
        }
    }
    if(action.type === 'CHANGE_VALUE'){
        return {
            ...state, // teknik mutable
            value: state.value + action.angkaBaru
        }
    }
    return state;

    // atau bisa dilakukan dengan metode switch
    // switch(action.type){
    //     case 'ADD_AGE':
    //         return {
    //             ...state, // teknik mutable
    //             age: state.age + 1
    //         }
    //     case 'CHANGE_VALUE':
    //         return {
    //             ...state, // teknik mutable
    //             value: state.value + action.angkaBaru
    //         }
    //     default:
    //         return state
    // }
}


// Perlu membuat Store
const store = buatStore(rootReducer);
console.log(store.getState()); // running with 'node iniRedux.js'


// Perlu membuat Subscription
// Proses pemanggilan Store yang kita perlukan ketika terjadi perubahan
store.subscribe(() => {
    console.log('store change: ', store.getState());
})


// Perlu membuat Dispatching Action 
// Disini proses pemanggilan instruksi Reducer
// Misalkan Reducer punya fitur untuk menambah nilai value Store, maka pada Dispatching Action ini yang memberikan instruksi kepada Reducer, "Tolong tambahkan nilai pada value Store"
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', angkaBaru: 10})
console.log(store.getState());


