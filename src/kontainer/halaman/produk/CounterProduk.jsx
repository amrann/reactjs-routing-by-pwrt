// Libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';

class CounterProduk extends Component {
    // state = {
    //     // State ini berfungsi utk merender nilai yang berubah-ubah
    //     // kata 'state' merupakan bawaan dari react, jadi jangan diubah
    //     pesan : 4      
    // }

    hendelCounterChangeChild = (nilaiBaru) => {
        this.props.onKaunterChange(nilaiBaru);
    }

    // arrow function pada ES6
    hendelPlus = () => {
        // console.log("plus: ", this)
        this.setState({
            pesan: this.state.pesan + 1   
        }, () => {
            this.hendelCounterChangeChild(this.state.pesan);
        }) 
    }

    // function pada umumnya
    // namun penggunaan function seperti ini tidak disarankan karena nntinya akan undefined
    // hendelMinus(){
    //     this.setState({
    //         pesan: this.state.pesan - 1
    //     })
    // }

    hendelMinus = () => {
        // this.setState({
        //     pesan: this.state.pesan - 1
        // })

        // perlu melakukan logic ini agar tidak terjadi minus
        if(this.state.pesan > 0){
            this.setState({
                pesan: this.state.pesan - 1
            }, () => {
                this.hendelCounterChangeChild(this.state.pesan);
            })
        }
    }
    
    render(){
        return(
            <div className="counter">
                <button className="minus" onClick={this.hendelMinus}> - </button>
                <input type="text" value={this.props.pesan}/>
                <button className="plus" onClick={this.hendelPlus}> + </button>
            </div>
        ) 
    }
}

// memanggil state global (berada pada file index.js), dan merubah menjadi props
const mapStateToProps = (state) => {
    return {
        pesan: state.totalPesanan
    }
}
// export default CounterProduk;

// param ke-1 merupakan global state sedangkan ke-2 yaitu dispatching
export default connect(mapStateToProps)(CounterProduk);