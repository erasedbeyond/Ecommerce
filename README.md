# Ecommerce Product Page
### _React App_
Hosted Link: https://erasedbeyond.github.io/Ecommerce/

This is a demo for product page of ecommmerce website, how the filtering and searching of product is to be done. 

### Points to be noted
- _It just a product page, so add to cart button wont be working._
- _Only data for tshirt and shoes is added as of now, searching other than these product   will result in **no product available**_
- _Back button will appear after search is hit to go back to all products page, or just hit search with blank input._


## Features

- Pagination View (10 product per page)
- Products can be search by typing brand name, product name , gender or colors and even by combining them to get particular product
- Filter of category, brand , color, price are provided and multiple filter can be applied at a time.
- Fiter can also be applied on search products




## Installation

App requires [Node.js](https://nodejs.org/) to run.

- Create a react app using ```npx create-react-app app-name``` and copy the src folder.
- Install the dependencies start the server using command ```npm start```
- Redux is used here. So use these commands to install dependencies,
    ```sh
    npm install redux
    npm install react-redux
    npm install redux-thunk
    ```
## Learning

 Used debouncing concept to tackle the implementation of price filter. As the updating of price filter will run with the every key Stroke but what needed is to update min or max price after the user has typed in the value. Hence to limits the rate at which the function get invoked debouncing is used by setting some delay

 >Debouncing is a programming practice used to 
 >ensure that time-consuming tasks do not fire so
 >often, that it stalls the performance of the web page.

CONCEPT LEARNED: **Debouncing**
