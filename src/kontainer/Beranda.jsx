// Libraries
import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// Halaman
import Produk from './halaman/produk/Produk';
import LifeCycleKomponen from './halaman/LifeCycleKomponen';
import BlogPost from './halaman/BlogPost';
import Yutup from './halaman/Yutup';
// Style
import './Beranda.css';
import Post_Detail from './halaman/Post_Detail';

class Beranda extends Component {
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">BlogPost</Link> {/*sama dengan <a href="/">BlogPost</a> */}
                        <Link to="/produk">Produk</Link>
                        <Link to="/laifsaikel">Lifecycle</Link>
                        <Link to="/youtube">Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost}/>
                    {/* tanpa props 'exact' disini, setiap penggunaan '/' akan memanggil halaman Blogpost */}
                    <Route path="/detailpost/:idPost" component={Post_Detail}/>
                    <Route path="/produk" component={Produk}/>
                    <Route path="/laifsaikel" component={LifeCycleKomponen}/>
                    <Route path="/youtube" component={Yutup}/>
                </Fragment>
            </BrowserRouter>
        ) 
    }
}
export default Beranda;