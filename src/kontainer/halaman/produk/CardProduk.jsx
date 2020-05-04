import React, {Component} from 'react';

import YamBumbu from '../../../assets/ayam-bumbu-padang.jpg'
import CounterProduk from './CounterProduk';

class CardProduk extends Component{
    
    
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src={YamBumbu} alt=""/>
                </div>
                <p className="product-title">Daging Ayam Bumbu</p>
                <p className="product-price">Rp 410,000</p>
                {/* <CounterProduk onKaunterChange = {(nilai)=>this.props.onKaunterChange(nilai)}/> */}
                <CounterProduk />          
            </div>
        )
    }
}

export default CardProduk;