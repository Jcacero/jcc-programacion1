//importar para iniciar
import { initializeApp } from 'firebase/app'
//importar firestore
import{ getFirestore } from 'firebase/firestore'
//importamos storage
import { getStorage} from 'firebase/storage'
//importamos autenticacion
import{getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTsp9-Qx53q6ahiU0TbX-ViWw11nJ6Htc",
    authDomain: "programacion1-cet30.firebaseapp.com",
    projectId: "programacion1-cet30",
    storageBucket: "programacion1-cet30.appspot.com",
    messagingSenderId: "182181227208",
    appId: "1:182181227208:web:b8a11c549cb2de040c93fd",
    measurementId: "G-6PQ810ZL42"
};

 //iniciamos la conexion entre nuestra APP y firebase
const conexion = initializeApp(firebaseConfig)
//me conecto con el servicio de base de datos de datos Firestore y lo guardo en la constante db (data base)
const db=getFirestore()
//me conecto con el serivicio de alamecenamiento de imagenes de fireStorage y lo guardo en la constante storage 
const storage = getStorage(conexion)
//guardamos lo que retorna la funcion en una variable
const auth = getAuth()

//exportamos db y storage para usarlo en otros componentes
export {db,storage,auth}
