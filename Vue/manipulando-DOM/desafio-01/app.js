new Vue({
    el: "#desafio",
    data:{
        nome: "Matheus",
        idade: 21,
    },

    methods:{
        saudacao(){
            return "Olá " + this.nome
        }
    }
    
})