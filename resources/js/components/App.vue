<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <!-- llamamos al logo de Vue -->
                    <img src="https://vuejs.org/images/logo.svg" alt="" width="30" height="24">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/autores" class="nav-link active" aria-current="page">Autores</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/areas" class="nav-link">Areas</router-link>
                    </li>   
                     <li class="nav-item">
                        <router-link exact-active-class="active" to="/tipom" class="nav-link">Tipo de material</router-link>
                    </li>   
                     <li class="nav-item">
                        <router-link exact-active-class="active" to="/descargas" class="nav-link">Descargas</router-link>
                    </li>          
                     <li class="nav-item">
                        <router-link exact-active-class="active" to="/editorial" class="nav-link">Editorial</router-link>
                    </li> 
                     <li class="nav-item">
                        <router-link exact-active-class="active" to="/niveledu" class="nav-link">Nivel Educativo</router-link>
                    </li> 
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {}
</script>