<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{cpf | inverter | cpf}}</p>
		<input type="text" :value="cpf|cpf">
		<hr>
		<Frutas/>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
export default {
	components:{Frutas},
	data(){
		return{
			cpf:'18152683660'
		}
	},
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
