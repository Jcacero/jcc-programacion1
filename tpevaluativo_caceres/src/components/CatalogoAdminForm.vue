<template>
        <div class="row">
        <div class="col-4">
            <div class="mb-3">
                <label class="label-form">Descripcion</label>
                <input v-model="descripcion" class="form-control" placeholder="ingrese la descripcion" type="text">
            </div>
            <div class="mb-3">
                <label class="label-form">Precio</label>
                <input v-model="precio" class="form-control" placeholder="ingrese el precio" type="number">
            </div>
            <div class="mb-3">
                <label class="label-form">Porcentaje de descuento</label>
                <input v-model="porcentaje_descuento" class="form-control" placeholder="ingrese el porcentaje del descuento" type="number">
            </div>
            <div class="mb-3">
                <label class="label-form">Categoria</label>
                <input v-model="categoria" class="form-control" placeholder="ingrese la categoria" type="text">
            </div>

            <div class="mb-3">
                <label class="label-form">Stock</label>
                <input v-model="stock" class="form-control" placeholder="ingrese el stock" type="number">
            </div>

            <div class="mb-3">
                <label class="label-form">Estado del producto</label>
                <select v-model="estadoP" class="form-select" aria-label="Default selecto example">
                    <option selected value ="1">Activo</option>
                    <option value ="0">Inactivo</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="label-form">Adjuntar Imagen</label>
                <input id="inp_file" type="file">
            </div>
            <button v-if="estado == 0" @click="guardar_producto()" class="btn btn-success">Guardar</button>
            <button v-if="estado == 1" @click="actualizar_producto()" class="btn btn-primary">Actualizar</button>
        </div>

        <div class="col-8">
            <table class="table">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>% Descuento</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Estado del producto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="catalogo of lista_catalogo" v-bind:key="catalogo.id">
                        <td>
                            <img style="width:5rem" :src ="catalogo.url" alt="">
                        </td>
                        <td>{{catalogo.descripcion}}</td>
                        <td>{{catalogo.precio}}</td>
                        <td>{{catalogo.porcentaje_descuento}}</td>
                        <td>{{catalogo.categoria}}</td>
                        <td>{{catalogo.stock}}</td> 
                        <td>{{catalogo.estadoP}}</td>         
                        <td>
                            <button @click="eliminar_producto(catalogo.id)" class="btn btn-danger btn-sm">x</button>
                            <button @click="editar_producto(catalogo)" class="btn btn-primary btn-sm">edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import{collection, addDoc,onSnapshot,deleteDoc,doc,updateDoc } from 'firebase/firestore'
import {uploadBytes, ref,getDownloadURL } from 'firebase/storage'
import{db,storage} from '../utils/firebase.js'
export default {
    name:'CatalogoAdminForm',
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
        async subir_imagen()
        {
            const file= document.getElementById("inp_file").files[0]
            //vamos a indicar en que lugar vamos a guardar nuestra imagen
            const config = ref(storage,'catalogo_imagenes/'+file.name)
            
            await uploadBytes(config,file).then (()=>{
                alert('¡operacion existosa!')
                document.getElementById("inp_file").value=''
            })

            this.url= await getDownloadURL(config)
        },

        async guardar_producto()
        {   
            await this.subir_imagen()
            
            const objetoCatalogo={
                
                descripcion:this.descripcion,
                precio:this.precio,
                porcentaje_descuento:this.porcentaje_descuento,
                categoria:this.categoria,
                stock:this.stock,
                estadoP:this.estadoP,
                url:this.url
            }
            const coleccion = collection (db,'catalogo')
            addDoc(coleccion,objetoCatalogo)
            this.vaciar_producto()
        },

        obtener_productos()
        {
            
            //se hace una captura de datos de la coleccion producto
            onSnapshot( collection(db,'catalogo'), (snapshot) => {
                this.lista_catalogo = []
                snapshot.docs.map((doc)=> {
                    //se colocan en el arreglo los obejtos y el id
                    this.lista_catalogo.push({...doc.data(),id:doc.id})
                })

            })
        },

        eliminar_producto(id)
        {
            /*
                para eliminar, necesito acceso a la base,
                especificar la coleccion y el ID
            */
            deleteDoc(doc(db,'catalogo',id))
        },

        editar_producto(catalogo)
        {
            this.descripcion=catalogo.descripcion;
            this.precio= catalogo.precio;
            this.porcentaje_descuento = catalogo.porcentaje_descuento;
            this.categoria = catalogo.categoria;
            this.stock = catalogo.stock;
            this.estadoP = catalogo.estadoP;
            this.url = catalogo.url;
            //el atributo no se usa como v-model
            this.id = catalogo.id;
            this.estado = 1;
        },

        actualizar_producto()
        {
            const catalogoModificado = {
                descripcion: this.descripcion,
                precio: this.precio,
                porcentaje_descuento: this.porcentaje_descuento,
                categoria:this.categoria,
                stock:this.stock,
                estadoP:this.estadoP,
                url:this.url
            }
            updateDoc(doc(db,'catalogo',this.id) , catalogoModificado)
            this.estado= 0;
            this.vaciar_producto()
        },
        vaciar_producto()
        {
            this.descripcion='';
            this.precio = null;
            this.porcentaje_descuento = null;
            this.categoria = '';
            this.stock = null;
            this.estadoP = null;
        }
    },
    mounted(){
        this.obtener_productos()
    }
}
</script>
