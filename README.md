# ChallengeAngularShopCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## First step:

`cd` into the main directory and install all the node packages with the command: `npm install`.
After that, you will be able to run all the below commands:

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project structure

Below it is explained how the project work at the tech especification:

### Components

1. Cart: responsible to show all the cart products addded using the Cart service. Also, contains a form with validators, whis way the client can type the informations about the credit card, name and address and finish the order. After successfull submission of the form, the user is redirected to the Confirmation component.
2. Confirmation: only shows informations after the last successfull order completed.
3. ProductItem: child component of the ProductList component, used to show to user a product with some small informations and the possibility to add it to the cart (using communication via Cart service)
4. ProductItemDetail: Used to show the details of a product, giving the possibility to add it to the Cart service. Showed after clicking in the image showed in the ProductItem component.
5. ProductList: principal component of the page, consume the data.json from the /asset folder and present it to the user in a list of products format.
6. Header: main menu of the project. Show the title and two links:
   - Products (main page - call the ProductList component)
   - Cart (call the Cart component)

### Services

1. Cart: used to store all the products selected by the user using the components. Provides some methods, like:
   - getProducts(): return all products added to the cart
   - addProduct(): add a new product to the cart, removing first if already exist an entry for that product.
   - removeProduct(): remove a product from the cart.
   - changeProduct(): update a product already added to the cart.
   - clean(): clean all the products from the cart.
2. Product: used only to consume the data from our local json. Provide only one method:
   - getProducts(): fetch all the data from the local assets/products.json, returning an observable that can be subscribed from the components.

### Routing

Provide in a total of 5 routes:

- { path: '', component: ProductListComponent, description: 'Principal page' },
- { path: 'product/:id', component: ProductItemDetailComponent, description: 'Show a product with details using route parameters (id)' },
- { path: 'cart', component: CartComponent, description: 'Show the cart component' },
- { path: 'confirmation', component: ConfirmationComponent, description: 'Show the confirmation page after submission from the /cart route' },
- { path: '\*\*', component: ProductListComponent, description: 'Wildcard route, only redirect the user to the main page when a unknown route is passed' },

### Api endpoints

In this project, because of time issues, was not possible to implement a real backend. This way, the project only consume onde "endpoint":

- assets/products.json -> simple data to make the project works
