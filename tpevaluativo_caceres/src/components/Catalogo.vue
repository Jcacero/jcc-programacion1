<template>
        <div class="row">
            <template  v-for="catalogo of lista_catalogo" v-bind:key="catalogo.id">
            <div v-if="catalogo.estadoP == 1" class="col-3 me-1 mb-3">
                    <div class="card">
                        <img :src ="catalogo.url" class="card-img-top" style="height:15rem" alt="imagen_catalogo">
                    <div class="card-body">
                        <h5 class="card-title">{{catalogo.descripcion}}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li v-if="catalogo.estadoP == 1" class="list-group-item">Disponible</li>
                        <li class="list-group-item">${{catalogo.precio}}</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-primary btn-sm">Comprar</button>
                    </div>
                </div>
            </div>

            </template>
        </div>
</template>

<script>
import{collection,onSnapshot} from 'firebase/firestore'
import{db} from '../utils/firebase.js'
export default {
    name:'Catalogo',
    data(){
        return{
            url:null,
            descripcion:'',
            precio:null,
            porcentaje_descuento:null,
            categoria:'',
            stock:null,
            estadoP:1,
            estado:0,
            lista_catalogo:[],
            id: null,

        }
    },

    methods:{
        obtener_catalogo()
        {
            
            //se hace una captura de datos de la coleccion producto
            onSnapshot( collection(db,'catalogo'), (snapshot) => {
                this.lista_catalogo = []
                snapshot.docs.map((doc)=> {
                    //se colocan en el arreglo los obejtos y el id
                    this.lista_catalogo.push({...doc.data(),id:doc.id})
                })

            })
        }        
    },
    mounted(){
        this.obtener_catalogo()
    }
}
</script>
