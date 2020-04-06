<template>
  <v-flex class="pr-3 pb-3" cs12 mb6 lg4>
    <v-card class="red darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{stock.name}} <small>(Preço: {{stock.price|currency}} | Quantidade:{{stock.quantity}})</small></strong>
      </v-card-title>
    </v-card>

    <v-card>
      <v-container fill-height>
        <v-text-field label='Quantidade' type="number" v-model.number="quantity"></v-text-field>
        <v-btn class="red darken-3 white--text ml-1" @click="sellStock" :disabled=" insefficientQuantity||quantity <= 0 || !Number.isInteger(quantity)">Vender</v-btn>
      </v-container>
    </v-card>
    
  </v-flex>
</template>

<script>
export default {
  props:['stock'],
  data(){
    return{
      quantity:0
    }
  },
  methods:{
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
    this.$store.dispatch('sellStock',order)
    this.quantity = 0
    }
  },
  computed:{
    insefficientQuantity(){
      return this.quantity > this.stock.quantity
    }
  }
}
</script>

<style>

</style>