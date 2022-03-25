<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Editar Tipo Material</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                         <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre Tipo Material</label>
                                    <input type="text" class="form-control" v-model="tipom.nombre">
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
    name:"editartipom",
    data(){
        return {
            tipom:{
                nombre:""
            }
        }
    },
    mounted(){
        this.mostrarBlog()
    },
    methods:{
        async mostrarBlog(){
            await this.axios.get(`/api/tipom/${this.$route.params.id}`).then(response=>{
                const { nombre } = response.data
                this.tipom = nombre
                
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/tipom/${this.$route.params.id}`,this.tipom).then(response=>{
                this.$router.push({name:"mostrartipom"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>