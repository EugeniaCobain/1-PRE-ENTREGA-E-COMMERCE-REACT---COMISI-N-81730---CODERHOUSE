const CartWidget = () => {
  const productCount = 0; 
  return (
    <div className="cart_container">
      <img className="cart_pic" src="../logo/shopping-cart.png" alt="" />
      <span className="cart_bubble">
        {productCount}
      </span>
    </div>
  );
};

export default CartWidget;
