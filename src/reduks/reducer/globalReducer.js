import EksionType from './kumpulanActionType';

const globalState = {
    totalPesanan: 5
  }
  
// Reducer
const rootReducer = (state = globalState, action) => {
    if(action.type === EksionType.TAMBAH){
        return {
            ...state, // teknik mutable
            totalPesanan: state.totalPesanan + 1
        }
    }
    if(action.type === EksionType.KURANG){
        // kondisi ini diperuntukkan untuk menghindari terjadinya kondisi minus
        if(state.totalPesanan > 0){
            return {
            ...state, // teknik mutable
            totalPesanan: state.totalPesanan - 1
            }
        }
        
    }
    return state;
}

export default rootReducer;