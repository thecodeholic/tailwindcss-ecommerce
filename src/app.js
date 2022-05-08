document.addEventListener('alpine:init', () => {
  Alpine.data('productList', () => ({
      cartItems: [],
      cartItemCount: 0,
      notification: {
        show: false,
        message: null
      },
      timeout: null,
      addToCart() {
        this.cartItemCount++;
        this.notification.show = true;
        this.notification.message = `The Item was successfully added into your cart`;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.notification.show = false;
        }, 3000)
      }
  }))
})