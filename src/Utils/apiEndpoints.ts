export const API_ENDPOINTS = {
    admin: {
      cars: "/cars",
      bookings: "/bookings",
      products: "/products",
      categories: "/category",
      ordersList: "/order/get-orders-list",
      deleteOrder: "/order",
    },
    user: {
      carList: "/cars",
      bookCar: "/bookings",
      getCart: "/cart/get-cart",
      guestAddress: "/address/get-address/guest",
      makeOrder: "/order/create-order",
      addAddress: "/address/add-address",
      payment: "/payment/create-payment-intent",
    },
  };
  