import React from 'react';
import { connect } from 'react-redux';
import { updateSearch } from '../actions';
import '../css/NavBar.css';
import home from '../assets/home.png'

class NavBar extends React.Component {
  constructor(){
    super();
    this.state={
      searchText:''
    }
  }

  setSearch =(e)=>{
    e.preventDefault()
    this.setState({
      searchText:e.target.value
    })
  }
  resetSearch = ()=>{
    this.setState({
      searchText:''
    })
    document.getElementById('search-bar').value = '';
    this.props.dispatch(updateSearch(''))
  }
  updateSearch = (e)=>{
    e.preventDefault()
    this.props.dispatch(updateSearch(this.state.searchText))
  }
  render() {
  
    return (
      <div className="nav-bar">
        {this.props.filter.search !== '' && <img id='home' src={home} onClick={this.resetSearch}/>}

        <h1>Ecommerce product page</h1>

        <form className='search-form'>

          <input id='search-bar' placeholder='Enter Product Name' name='searchText' onChange={this.setSearch} />
          <input type='submit' value='Search' onClick={this.updateSearch}/>
        </form>
      </div>
    );
  }
}

function mapStateToProps({filter}){
  return{
    filter
  }
}
export default connect(mapStateToProps)(NavBar);
