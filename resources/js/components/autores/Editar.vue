<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Editar Autores</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                         <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="autores.nombre">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Dirección</label>
                                    <input type="text" class="form-control" v-model="autores.direccion">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>telefono</label>
                                    <input type="text" class="form-control" v-model="autores.telefono">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>                          
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-autores",
    data(){
        return {
            autores:{
                nombre:"",
                direccion:"",
                telefono:"",
            }
        }
    },
    mounted(){
        this.mostrarAutores()
    },
    methods:{
        async mostrarAutores(){
            await this.axios.get(`/api/autores/${this.$route.params.id}`).then(response=>{
                const { nombre, direccion, telefono } = response.data
                this.autores.nombre = nombre
                this.autores.direccion = direccion
                this.autores.telefono = telefono
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/autores/${this.$route.params.id}`,this.autores).then(response=>{
                this.$router.push({name:"mostrarAutores"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>