import React, {Component, Fragment} from 'react';
import YutupKomponen from '../../komponen/YutupKomponen';

class Yutup extends Component{
    render(){
        return(
            <Fragment>
                <p>Yutup Komponen</p>
                <hr/>
                <YutupKomponen waktu="8.02" judul="Judul ke-1" deskripsi="Deskripsi judul ke-1"/>
                <YutupKomponen waktu="7.12" judul="Judul ke-2" deskripsi="Deskripsi judul ke-2"/>
                <YutupKomponen waktu="4.42" judul="Judul ke-3" deskripsi="Deskripsi judul ke-3"/>
                <YutupKomponen waktu="2.12" judul="Judul ke-4" deskripsi="Deskripsi judul ke-4"/>
                <YutupKomponen/>
            </Fragment>
        )
    }
}

export default Yutup;