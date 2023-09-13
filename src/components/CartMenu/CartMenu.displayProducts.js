export default function(list) {
    const allProducts = Object.keys(list).map((key) => {
      const el = list[key];
      return (
        <div className="cart-product" key={key}>
          <div className="cart-product-img">
            <img src={el.img} alt="cart" />
          </div>
          <div className=" cart-product-des">
            <div className="cart-product-price">
              <p>{el.name}</p>
              <h3>{el.price * el.amount}$</h3>
            </div>
            <div className="cart-product-quantity">
              <div className="cart-product-btns">
                <button
                  onClick={() => changeAmount("minus", key, setCartItems)}
                >
                  -
                </button>
                <h2>{el.amount}</h2>
                <button onClick={() => changeAmount("plus", key, setCartItems)}>
                  +
                </button>
              </div>
              <div
                className="cart-delete-btn"
                onClick={() => deleteObject(key)}
              >
                {allSvg(25).closeBtn}
              </div>
            </div>
          </div>
        </div>
      );

      return allProducts;
    });

}

