//bnw project images

import backendLogin from "./swiperImages/backendLogin.png";
import bnwLanding from "./swiperImages/bnwLanding.jpg";
import cart from "./swiperImages/cart.png";
import mainProduct from "./swiperImages/mainProduct.png";
import newProduct from "./swiperImages/newProduct.png";
import orders from "./swiperImages/orders.png";
import stripe from "./swiperImages/stripe.png";

export const eCommerceImages = [
  {
    image: bnwLanding,
    text: "An ecommerce site styled to fit the Theme Provided",
  },
  {
    image: mainProduct,
    text: "This grabs image from firebase service and collects data from MongoDB from backend",
  },
  { image: cart, text: "Add products to cart" },
  {
    image: stripe,
    text: "When buying, the client contacts the backend, creates an order and saves this to DB, requests the priceId and redirects to STRIPE",
  },
  {
    image: backendLogin,
    text: "Site owners can access a backend to monitor and create products and sales, this is found at the /admin path and is protected by passport.js",
  },
  {
    image: newProduct,
    text: "Site owners can create new products for the store.  This asyncronously saves multiple images to firebase, creates a stripe product and priceID and passes this to DB",
  },
  {
    image: orders,
    text: "Site Owners can also view an orders that have been placed",
  },
];
