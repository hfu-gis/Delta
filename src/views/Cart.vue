<template>
  <div class="cart">
    <article>
      <about />
    </article>
    <h1 class="title">Your Cart</h1>
    <p v-show="!products.length">
      <i>Your cart is empty!</i>
      <router-link to="/">Go shopping</router-link>
    </p>
    <table class="table is-striped" v-show="products.length">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" v-bind:key="p">
          <td>{{ p.name }}</td>
          <td>${{ p.price }}</td>
          <td>{{ p.quantity }}</td>
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td></td>
          <td>
            <b>${{ total }}</b>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <button
        v-show="products.length"
        class="button is-primary"
        @click="checkout"
      >
        Checkout
      </button>
    </p>
  </div>
</template>

<script>
import about from "../components/about";
export default {
  name: "Cart",
  components: {
    about
  },
  data: () => ({
    products: [
      {
        product_id: "test item",
        title: "test description",
        sub_title: "Test Description",
        price: 4.2,
        qty: 1
      }
    ]
  })
};
</script>

<style scoped></style>
