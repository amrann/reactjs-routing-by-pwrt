import React, {Component, Fragment} from 'react';
import Axios from 'axios';
import './Post_Detail.css';

class Post_Detail extends Component {
    state = {
        postingan_detail: {
            title: '',
            body: ''
        }
    }

    // method lifecycle bawaan reactjs
    componentDidMount(){
        let id = this.props.match.params.idPost;
        Axios.get(`http://localhost:3004/inidataposts/${id}`)
        .then(hasil => {
            // console.log('hasil: ', hasil);
            let p = hasil.data; // menghapa hasil.data? bisa cek lewat => console.log('hasil: ', hasil);
            this.setState({
                postingan_detail : {
                    title: p.title,
                    body: p.body
                }
            })
        })
    }
    render(){
        return(
            <Fragment>
                <p>Post Detail</p>
                <hr/>
                <div className="p_post_detail">
                    <p className="post_detail_title">{this.state.postingan_detail.title}</p>
                    <p className="post_detail_body">{this.state.postingan_detail.body}</p>
                </div>
            </Fragment>
        ) 
    }
}
export default Post_Detail;