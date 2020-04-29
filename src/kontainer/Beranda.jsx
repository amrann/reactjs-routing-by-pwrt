import React, {Component, Fragment} from 'react';
import YutupKomponen from '../komponen/YutupKomponen';
import Produk from './Produk';
import LifeCycleKomponen from './LifeCycleKomponen';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './Beranda.css';

import BlogPost from './BlogPost';
class Beranda extends Component {
    render(){
        return(
            <BrowserRouter>
                {/* <div>
                    <p>Yutup Komponen</p>
                    <hr/>
                    <YutupKomponen waktu="8.02" judul="Judul ke-1" deskripsi="Deskripsi judul ke-1"/>
                    <YutupKomponen waktu="7.12" judul="Judul ke-2" deskripsi="Deskripsi judul ke-2"/>
                    <YutupKomponen waktu="4.42" judul="Judul ke-3" deskripsi="Deskripsi judul ke-3"/>
                    <YutupKomponen waktu="2.12" judul="Judul ke-4" deskripsi="Deskripsi judul ke-4"/>
                    <YutupKomponen/>
                    <p>Counter</p>
                    <hr/>
                    <Produk/>
                    <p>Life Cycle Komponen</p>
                    <hr/>
                    <LifeCycleKomponen/>
                    <p>Blog Post</p>
                    <hr/>
                    <BlogPost/>
                </div> */}
                <Fragment>
                    <div className="navigation">
                        <Link to="/">BlogPost</Link> {/*sama dengan <a href="/">BlogPost</a> */}
                        <Link to="/produk">Produk</Link>
                        <Link to="/laifsaikel">Lifecycle</Link>
                    </div>
                    <Route path="/" exact component={BlogPost}/>
                    {/* tanpa props 'exact' disini, setiap penggunaan '/' akan memanggil halaman Blogpost */}
                    <Route path="/produk" component={Produk}/>
                    <Route path="/laifsaikel" component={LifeCycleKomponen}/>
                </Fragment>
            </BrowserRouter>
        ) 
    }
}
export default Beranda;