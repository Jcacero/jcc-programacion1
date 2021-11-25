<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tp Final JC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/catalogo" class="nav-link" >Catalogo</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cargaproductos" class="nav-link">Carga de productos</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="container mt-3">
    <router-view/>
  </div>

</template>

