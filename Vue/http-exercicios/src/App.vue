<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissable v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">
			{{mensagem.texto}}
		</b-alert>

		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"></b-form-input>
			</b-form-group>

			<b-form-group label="Email:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="enviar()" variant="primary" >Enviar</b-button>

			<b-button @click="obterUsuarios()" class="ml-2" variant="warning">Obter Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario,id) in usuarios" :key="id">
				<strong>Nome: {{usuario.nome}}</strong><br>
				<strong>Email: {{usuario.email}}</strong><br>
				<strong>ID: {{id}}</strong><br>
				<b-button variant="success" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" @click="apagar(id)" class="ml-2">Excluir</b-button>

			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
//import axios from 'axios'
//axios.defaults.baseURL = 'https://curso-vue-db5bc.firebaseio.com/'
export default {
	data(){
		return{
			mensagens:[],
			usuarios: [],
			id: null,
			usuario:{
				nome: '',
				email: ''
			}
		}
	},
	methods:{
		enviar(){
			const metodo = this.id ? 'patch': 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() =>{
					 this.limpar()
					 this.mensagens.push({
						 texto: 'Operação realizada com sucesso!',
						 tipo: 'success'
					 })
				})
		},
		obterUsuarios(){
			this.$http('usuarios.json')
				.then(res=>{
					this.usuarios = res.data
				})
		},
		
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},

		apagar(id){
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar())
				.then(() => this.obterUsuarios())
				.catch(err =>{
					this.mensagens.push({
						texto:"Erro ao Excluir",
						tipo: 'danger'
					})
				})
		},

		limpar(){
			this.usuario = {}
			this.id = null
			this.mensagens = []
		}



	}

}
	// created(){
	// 	this.$http.post('usuarios.json',{
	// 		nome: 'Maria',
	// 		email: 'maria@gmail.com'
	// 	}).then(res => console.log(res))
	// }
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
