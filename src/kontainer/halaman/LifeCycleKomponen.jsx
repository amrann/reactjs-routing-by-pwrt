import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

// Video #8
import './LifeCycleKomponen.css';

class LifeCycleKomponen extends Component{
    constructor(props){
        super(props) //ini diperlukan karena kita mengextends Component
        this.state = {
            hitung: 1
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount')
        setTimeout(()=>{
            this.setState({
                hitung: 2
            })
        }, 3000)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log('render')
        return(
            <Fragment>
                <p>Lifecycle Komponen</p>
                <hr/>
                <button className="btn">Component Button {this.state.hitung}</button>
                <hr/>
        <p>Total Pesan: {this.props.pesan}</p>
            </Fragment>
        )
    }
}
// export default LifeCycleKomponen;

const mapStateToProps = (state) => {
    return {
        pesan: state.totalPesanan
    }
}
export default connect(mapStateToProps)(LifeCycleKomponen);