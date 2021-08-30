import React from 'react';
import { connect } from 'react-redux';
import '../css/Products.css'
class Products extends React.Component {

  constructor(){
    super();
    this.state={
        
        currentPage: 1,
        productsPerPage: 10
    }
}

setActivePageButton = ()=>{
  if(this.state.currentPage!==1)
    return;
  var oldSelected = document.getElementsByClassName('page-button')
  if(oldSelected.length>0)
    oldSelected[0].classList.add('selected-page')
}
componentDidMount(){
  this.setActivePageButton();
}
componentDidUpdate(){
  this.setActivePageButton();
}
updatePageNumber = (e) =>{
  let currentPage = this.state.currentPage;
  this.setState({
    currentPage:e.target.value
  },()=>{
    if(currentPage != this.state.currentPage){
      window.scrollTo(0,0);
    }
  })
  var oldSelected = document.getElementsByClassName('page-button')
  for (var i = 0; i < oldSelected.length; i++) {
    oldSelected[i].classList.remove("selected-page");
  }
  e.target.classList.add('selected-page')

  
}
 
  render() {
    console.log(this.props.filter.search)
    let categories = this.props.filter.categories;
    let colors = this.props.filter.colors;
    let brands = this.props.filter.brands;
    let price = this.props.filter.price;
    let search = this.props.filter.search

    
    let allProducts = this.props.products;

    let products = allProducts.filter( item => item.price >= price.minPrice
        && item.price <= price.maxPrice
      );

    if(search!==''){
      search=search.toLowerCase()
      let result=[]

      products.forEach((item)=>{
        let string = item.title+item.brand+item.category+item.color
        const searchArr = search.toLowerCase().split(" ");
        let flag = true;
        searchArr.forEach(searchItem=>{
          if(!string.toLowerCase().includes(searchItem)){
            flag=false;
            // break;
          }

          if(searchItem==='men' || searchItem==='mens'){
            if(item.category.toLowerCase()!=='mens'){
              flag=false
            }
          }
        })

        if(flag){
          result=[...result,item]
        }
        // if(item.title.toLowerCase().includes(search)){
        //   result=[...result,item]
        // }else if(item.brand.toLowerCase().includes(search)){
        //   result=[...result,item]
        // }else if(item.color.toLowerCase().includes(search)){
        //   result=[...result,item]
        // }

      })

      products=result
    }
    if(categories.length >0){
      let result=[]
      categories.forEach(element => {
        result = [...result,...products.filter(item=>item.category===element)]

      });
      products=result;
    }
    if(colors.length>0){
      let result=[]
      colors.forEach(element => {
        result = [...result,...products.filter(item=>item.color===element)]


      });
      products=result;

    }
    if(brands.length>0){
      let result=[]
      brands.forEach(element => {
        result = [...result,...products.filter(item=>item.brand===element)]

      });
      products=result;

    }



    //setting for pagination
    const end = this.state.currentPage * this.state.productsPerPage;
    const start = end - this.state.productsPerPage;
    let currentProducts=[]
    const pages = [];

    if(products.length>0){
      currentProducts = products.slice(start,end);
      for(let i=1;i<= Math.ceil(products.length / this.state.productsPerPage); i++) {
        pages.push(i);
      }
    }

    
   return (
     <div className='products'>
      <div className="products-main">
        {currentProducts.map((item,index)=><Product key={`product-${index}`} product={item}/>)}
        
      </div>
      <div className='pages-number '>
          {pages.map(item=><button className='page-button' name="currentPage" key={'page'+item} value={item} onClick={this.updatePageNumber}>{item}</button>)}
          {pages.length===0 && 'No product available'}
      </div>
     </div>

    );
  }
}

class Product extends React.Component {
 
  render() {
    let product = this.props.product;
    return (
      <div className="product">
        <div className='pr-image'><img src={product.img} alt="product-img"/></div>
        <div className='pr-details'>
          <div className='pr-name'>
            <div className='pr-brand'>{product.brand}</div>
            <div className='pr-title'>{product.title}</div>
          </div>
          <div className='pr-description'>{product.description}</div>
          <div className='pr-price'>Price: {product.price}</div>
          <button className='add-to-cart-btn'>Add to cart</button>
        </div>

      </div>
    );
  }
}

function mapStateToProps({products,filter}){
  return{
    products,
    filter
  }
}
export default connect(mapStateToProps)(Products);
