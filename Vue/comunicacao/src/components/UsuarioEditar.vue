<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>{{nome}}</p>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:['nome'],
    created(){
        barramento.$on('nomeMudou', (nome)=>{
            this.nome = nome
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
