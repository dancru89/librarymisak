<template>
    <div class="row">
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link :to='{name:"crearAutores"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>
        <div class="col-12">             
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Direccion</th>
                                    <th>Telefono</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="autores in autores" :key="autores.id">
                                    <td>{{ autores.id }}</td>
                                    <td>{{ autores.nombre }}</td>
                                    <td>{{ autores.direccion }}</td>
                                    <td>{{ autores.telefono }}</td>
                                    <td>
                                        <!-- llamamos al componente para Editar     -->
                                        <router-link :to='{name:"editarAutores",params:{id:autores.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                        <a type="button" @click="borrarAutores(autores.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>                          
        </div>
    </div>
</template>

<script>
export default {
    name:"autores",
    data(){
        return {
            autores:[]
        }
    },
    mounted(){
        this.mostrarAutores()
    },
    methods:{
        async mostrarAutores(){
            await this.axios.get('/api/autores').then(response=>{
                this.autores = response.data
            }).catch(error=>{
                console.log(error)
                this.autores = []
            })
        },
        borrarAutores(id){
            if(confirm("¿Confirma eliminar el autor seleccionado?")){
                this.axios.delete(`/api/autores/${id}`).then(response=>{
                    this.mostrarAutores()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>