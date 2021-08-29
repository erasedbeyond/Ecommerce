import React from 'react';

import {data as products} from '../assets/data'
import NavBar from './NavBar';
import Products from './Products';
import Filter from './Filter';
import '../css/App.css'
import { connect } from 'react-redux';
import {addProducts} from '../actions/index'


class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(addProducts(products))
  }
  render(){
    return (
      <div className="App">
            <NavBar/>
            <div className='app-main'>
              <Filter/>
              <Products/>
            </div>
      </div>
    );
  }
}
// function mapStateToProps(state){
//   return {
//     products:state.products
//   }
// }
function mapStateToProps({products,filter}){
  return {
    products,
    filter
  }
}
export default connect(mapStateToProps)(App);
