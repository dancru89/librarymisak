<template>
    <div class="row">
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link :to='{name:"creartipom"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>
        <div class="col-12">             
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tipom in tipom" :key="tipom.id">
                                    <td>{{ tipom.id }}</td>
                                    <td>{{ tipom.nombre }}</td>
                                    <td>
                                        <!-- llamamos al componente para Editar     -->
                                        <router-link :to='{name:"editarBlog",params:{id:tipom.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                        <a type="button" @click="borrarBlog(tipom.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
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
    name:"tipom",
    data(){
        return {
            blogs:[]
        }
    },
    mounted(){
        this.mostrartipom()
    },
    methods:{
        async mostrartipom(){
            await this.axios.get('/api/tipom').then(response=>{
                this.tipom = response.data
            }).catch(error=>{
                console.log(error)
                this.tipom = []
            })
        },
        borrartipom(id){
            if(confirm("¿Confirma eliminar el registro del tipo de material?")){
                this.axios.delete(`/api/tipom/${id}`).then(response=>{
                    this.mostrartipom()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>