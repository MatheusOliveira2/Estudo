<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{nome}}</strong></p>
        <button @click="mudarNome()">Mudar Nome</button>
        <button @click="reiniciarNome()">reiniciarNome</button>
         <button @click="reiniciarFn()">reiniciarNome(Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:{
        nome:{
            type: String,
            required: true
        },
        reiniciarFn: Function,
    },
    methods:{
        mudarNome(){
            this.nome = "Matheus"
            barramento.$emit('nomeMudou', this.nome)
        },
        reiniciarNome(){
            this.nome = "Matheus"
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
