const Home = () => import('./components/Home.vue')
const Contacto = () => import('./components/Contacto.vue')
const Areas = () => import('./components/Areas.vue')
const Autores = () => import('./components/Autores.vue')
const Descargas = () => import('./components/Descargas.vue')
const Editorial = () => import('./components/Editorial.vue')
const Niveledu = () => import('./components/Niveledu.vue')
const Tipom = () => import('./components/Tipom.vue')

//importamos los componentes para el blog
const Mostrar = () => import('./components/blog/Mostrar.vue')
const Crear = () => import('./components/blog/Crear.vue')
const Editar = () => import('./components/blog/Editar.vue')
const Toast=()=>import('./components/areas/Toast.vue')


export const routes = [
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'mostrarBlogs',
        path: '/blogs',
        component: Mostrar
    },
    {
        name: 'crearBlog',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarBlog',
        path: '/editar/:id',
        component: Editar
    },
     {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: 'Areas',
        path: '/areas',
        component: Toast
    },
    {//se crea funcionalidad de autores
        name: 'autores',
        path: '/autores',
        component: Autores
    },
    {
        name: 'mostrarAutores',
        path: '/mostrar',
        component: Mostrar
    },
    {
        name: 'crearAutores',
        path: '/Crear',
        component: Crear
    },
    {
        name: 'editarAutores',
        path: '/editar/:id',
        component: Editar
    },
    {
        name: 'descargas',
        path: '/descargas',
        component: Descargas
    },
    {
        name: 'editorial',
        path: '/editorial',
        component: Editorial
    },
    {
        name: 'niveledu',
        path: '/niveledu',
        component: Niveledu
    },
    {//se crea funcionalidad de tipo de material
        name: 'tipom',
        path: '/tipom',
        component: Tipom
    },
    {
        name: 'mostrartipom',
        path: '/mostrar',
        component: Mostrar
    },
    {
        name: 'creartipom',
        path: '/Crear',
        component: Crear
    },
    {
        name: 'editartipom',
        path: '/editar/:id',
        component: Editar
    },
    
]