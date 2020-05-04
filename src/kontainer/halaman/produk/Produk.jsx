// File ini sudah menggunakan Redux

import React, {Component, Fragment} from 'react';
// Video #7
import './Produk.css';
import CardProduk from './CardProduk';
import {connect} from 'react-redux';

class Produk extends Component{
    // state = {
    //     // State ini berfungsi utk merender nilai yang berubah-ubah
    //     // kata 'state' merupakan bawaan dari react, jadi jangan diubah
    //     pesan : 4      
    // }

    // hendelCounterChangeParent = (nilaiBaru) => {
    //     // function ini berfungsi untuk menghubungkan nilai dari child ke parent
    //     this.setState({
    //         pesan: nilaiBaru
    //     })
    // }

    render(){
        return(
            <Fragment>
                <p>Produk Komponen</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
                        {/* <div className="count">{this.state.pesan}</div> */}
                        <div className="count">{this.props.pesan}</div>
                    </div>
                </div>
                {/* <CardProduk onKaunterChange = {(nilai)=>this.hendelCounterChangeParent(nilai)} /> */}
                <CardProduk />
            </Fragment>
        )
    }
}

// export default Produk;

// memanggil state global (berada pada file index.js), dan merubah menjadi props
const mapStateToProps = (state) => {
    return {
        pesan: state.totalPesanan
    }
}

// param connect disni cuman satu karena kita tidak memamnggil perubahan
export default connect(mapStateToProps)(Produk);