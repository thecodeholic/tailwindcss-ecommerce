document.addEventListener('alpine:init', () => {
  Alpine.data('productList', () => ({
      cartItems: [],
      cartItemCount: 0,
      notification: {
        show: false,
        message: null
      },
      timeout: null,
      watchlistCount: 0,
      addToCart() {
        this.cartItemCount++;
        this.showNotification(`The Item was successfully added into your cart`)
      },
      addToWatchlist() {
        this.watchlistCount++;
        this.showNotification(`The Item was successfully added in your watchlist`)
      },
      showNotification(message) {
        this.notification.show = true;
        this.notification.message = message;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.notification.show = false;
        }, 3000)
      }

  }))
})