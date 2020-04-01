<template>
	<v-app>
		<navbar></navbar>
		<toolbar></toolbar>
		<carrousel></carrousel>
		<foot></foot>
	</v-app>
</template>

<script>
import Tool from './components/Toolbar.vue'
import Carrousel from './components/Carrousel.vue'
import Footer from './components/Footer.vue'
export default {
	components: {'toolbar':Tool, 'carrousel':Carrousel, foot:Footer}
}
</script>
