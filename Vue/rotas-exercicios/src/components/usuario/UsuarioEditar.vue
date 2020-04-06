<template>
  <div class="usuario editar">
      <h3>Usuário Editar</h3>
      <p><strong>Codigo: {{id}}</strong></p>
      <p>Completo : {{$route.query.completo? 'Sim': 'Não'}}</p>
      <div id="rodape" style="margin-top:1000px;">
        <h3>CursoVue</h3>
      </div>
      
  </div>
</template>

<script>
export default {
  props:['id']
}
</script>

<style>

</style>