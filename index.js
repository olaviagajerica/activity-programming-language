const cart = [
    { productName: "t-shirt", price: 20 },
    { productName: " Jeans" , price: 50 },
    { productName: "sneakers", price:80 },
    { productName: "mask", price: 40 },
    { productName: "Dress", price: 90 },
    { productName: "swim Suit", price: 100},

];

//Create a function that will calculate total prices
const calculateTotalPrice = (cart) =>{
     let totalprice = 0;
      for(let product of cart){
          totalprice += product.price 
      }
      return totalprice;

}

 const totalprice = calculateTotalPrice(cart);
 console.log("The total Price is: " + totalPrice);

 