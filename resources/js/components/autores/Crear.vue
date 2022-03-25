<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Crear Autores</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="autores.nombre">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Direccion</label>
                                    <input type="text" class="form-control" v-model="autores.direccion">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Telefono</label>
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
    name:"crear-autores",
    data(){
        return {
            autores:{
                nombre:"",
                direccion:"",
                telefono:""
            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/autores',this.autores).then(response=>{
                this.$router.push({name:"mostrarAutores"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>