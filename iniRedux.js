const redux = require('redux');
const buatStore = redux.createStore;

const inisialState = {
    value: 0,
    age: 17
}

// Perlu membuat Reducer 
// Suatu fungsi yang bertugas untuk mengupdate value yg ada pada Store (tidk ada fungsi lain yg bisa mengupdate value selain Reducer)
const rootReducer = (state = inisialState, action) => {
    return state
}

// Perlu membuat Store
const store = buatStore(rootReducer);
console.log(store.getState()); // running with 'node iniRedux.js'




// Perlu membuat Dispatching Action 
// Disini proses pemanggilan instruksi Reducer
// Misalkan Reducer punya fitur untuk menambah nilai value Store, maka pada Dispatching Action ini yang memberikan instruksi kepada Reducer, "Tolong tambahkan nilai pada value Store"



// Perlu membuat Subscription
// Proses pemanggilan Store yang kita perlukan