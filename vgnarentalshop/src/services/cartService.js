// Shopping cart service with localStorage
export const cartService = {
  getCart() {
    const cartStr = localStorage.getItem('cart');
    return cartStr ? JSON.parse(cartStr) : [];
  },

  setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  },

  addToCart(product) {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    this.setCart(cart);
    return cart;
  },

  removeFromCart(productId) {
    const cart = this.getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    this.setCart(updatedCart);
    return updatedCart;
  },

  updateQuantity(productId, quantity) {
    const cart = this.getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        return this.removeFromCart(productId);
      }
    }
    
    this.setCart(cart);
    return cart;
  },

  clearCart() {
    localStorage.removeItem('cart');
  },

  getCartTotal() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
};
