import React from 'react';
import { connect } from 'react-redux';
import { addFilter, removeFilter,updatePriceRange } from '../actions';
import '../css/Filter.css'
class Filter extends React.Component {

  constructor(){
    super();
    this.state={
      minPrice:0,
      maxPrice:9999
    };

    this.minTimer='';
    this.maxTimer='';
  }

  updateFilter = (e)=>{
    let filter=e.target.name;
    let value=e.target.value;
    e.target.checked 
    ? this.props.dispatch(addFilter(filter,value))
    : this.props.dispatch(removeFilter(filter,value))

  }

  updateMaxPrice =(e)=>{
    this.setState({
      maxPrice:e.target.value
    },()=>{
      let property = 'maxPrice';
      let value = this.state.maxPrice;
      clearTimeout(this.maxTimer)
      this.maxTimer = setTimeout(()=>{
          this.props.dispatch(updatePriceRange(property,value))
      },1000)
    })
  }
  
  updateMinPrice =(e)=>{
    this.setState({
      minPrice:e.target.value
    },()=>{
      let property = 'minPrice';
      let value = this.state.minPrice;
      clearTimeout(this.minTimer)
      this.minTimer = setTimeout(()=>{
          this.props.dispatch(updatePriceRange(property,value))
      },1000)
    })
  }

  render() {

    // console.log(this.props.filter.price)

    let products = this.props.products;
    let brands =[]
    let colors = []
    let categories = []
    products.forEach(element => {
      if(brands.indexOf(element.brand)===-1){
        brands.push(element.brand)
      }
      if(colors.indexOf(element.color)===-1){
        colors.push(element.color)
      }
      if(categories.indexOf(element.category)===-1){
        categories.push(element.category)
      }
    });

    return (
      <div className="filter">
        <div className='filter-container'>
          <div className='filter-heading'>Filters</div>
        </div>
        <div className='filter-container'>
          <div className='filter-heading'>Price</div>
          <div className='filter-options'>
            {/* <div class="range-slider">
              <input type="range" step="1" min="0" max="10" value='5' id="slider1" />
              <input type="range" step="1" min="0" max="10" value="3" id="slider2" />
            </div> */}
            <div className='price-input'>
              <input type='number' name='minPrice' max='9999' placeholder='0000' onChange={this.updateMinPrice}/>
              <span>to</span>
              <input type='number' name='maxPrice' max='9999' placeholder='9999' onChange={this.updateMaxPrice}/>
            </div>
          </div>
        </div>
        <div className='filter-container'>
          <div className='filter-heading'>Brands</div>
          <div className='filter-options'>
            {brands.map((item ) =><label key={item}>
                <input type='checkbox' name='brands' value={item} onClick={this.updateFilter}/>
                {item}
              </label>
            )}
          </div>
        </div>

        <div className='filter-container'>
          <div className='filter-heading'>Category</div>
          <div className='filter-options'>
            {categories.map((item ) =><label key={item}>
                <input type='checkbox' name='categories' value={item} onClick={this.updateFilter}/>
                {item}
              </label>
            )}
        </div>
        </div>

        <div className='filter-container'>
          <div className='filter-heading'>Color</div>
          <div className='filter-options'>
            {colors.map((item ) =><label key={item}>
                <input type='checkbox' name='colors' value={item} onClick={this.updateFilter}/>
                {item}
              </label>
            )}
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps({filter,products}){
  return {
    products,
    filter,
  }
}
export default connect(mapStateToProps)(Filter);
