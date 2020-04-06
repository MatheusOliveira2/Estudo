<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
    <v-sheet :elevation="6" class="pa-2" color="primary">
      <span class="white--text ml-2 headline font-weight-light">Você pode Salvar & Carregar os dados</span>
    </v-sheet>

    <v-sheet :elevation="6" class="pa-2 success mt-3">
      <span class="white--text ml-2 headline font-weight-light">Clique em 'Finalizar Dia' para iniciar um novo dia</span>
    </v-sheet>

    <v-divider class="my-4"></v-divider>
    <p class="display-1"><strong>Seu Saldo</strong> {{funds | currency}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    funds(){
      return this.$store.getters.funds
    }
    
  }
}
</script>

<style>

</style>