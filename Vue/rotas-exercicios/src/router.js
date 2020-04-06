import Vue from 'vue'
import Router from 'vue-router'
import Usuario from './components/usuario/Usuario'
import Inicio from './components/Inicio'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/template/Menu.vue'

Vue.use(Router)


const router = new Router({
    mode: 'hash',
    scrollBehavior(to, from,savedPosition){
        if(savedPosition){
            return savedPosition
        }
        else if(to.hash){
            return{selector:to.hash}
        }
        return {x:0,y:0}
    },
    routes:[{
        path: '/',
        //component: Inicio,
        name:'inicio',
        components:{
            default:Inicio,
            menu:Menu
        }
    }, 
    {
        path: '/usuario',
        component: Usuario,
        props: true,
        children:[
            {path:'',component:UsuarioLista},
            {path:':id',component:UsuarioDetalhe, props:true},
            {path:':id/editar',component:UsuarioEditar, props:true, name:'editarUsuario'}
        ]
    },{
       path:'/redirecionar',
       redirect:'/usuario' 
    },{
        path:'*',
        redirect: '/'
    }]
})

router.beforeEach((to,from,next) =>{
    next()
})

export default router