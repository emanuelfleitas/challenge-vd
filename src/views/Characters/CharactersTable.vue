<template>
  <div class="over-table">
      <table class="centrar" >
        <thead>
          <tr>
            <th>
              <button v-show="showArrow==true" class="btn-orden" @click="ordenar()"><i class="fas fa-arrow-up"></i>Name</button>
              <button v-show="showArrow==false" class="btn-orden" @click="ordenar()"><i class="fas fa-arrow-down"></i>Name</button>
            </th> 
            <th>Status</th>
            <th>Species</th>
            <th>Gender</th>
            <th><input placeholder="Buscar" type="text" v-model="palabra"></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="char in buscar()" :key="char.id">
              <td>{{char.name}}</td>
              <td>{{char.status}}</td>
              <td>{{char.species}}</td>
              <td>{{char.gender}}</td>
              <td><button @click="seeFeatures(char)" class="btn-style">Detalles</button></td>
            </tr>
        </tbody> 
      </table>
  </div>
</template>

<script>
import store from '@/store/index.js'
import axios from 'axios'
import {useRouter} from 'vue-router'


export default {
  name: 'CharactersTable',
  data() {
    return{
      palabra:"",
      characters:[],
      url: store.state.url,
      showArrow: false
    }
  },
  mounted() {
    axios
      .get(store.state.url + '/character')
      .then(response =>{
          let resultados = response.data.results
          this.characters = resultados
      })
  },
  methods:{
    ordenar(){
      this.showArrow = !this.showArrow
      console.log(this.characters);
      this.characters.reverse()
    },
    buscar(){
        let lista = this.characters
        let resultado = lista.filter(
          item => 
          item.name.toLowerCase().includes(this.palabra.toLowerCase()) ||
          item.status.toLowerCase().includes(this.palabra.toLowerCase()) ||
          item.species.toLowerCase().includes(this.palabra.toLowerCase()) ||
          item.gender.toLowerCase().includes(this.palabra.toLowerCase())  
        )
        if(this.palabra!=""){
          return resultado
        }
        return lista
    }
  },
  setup(){

    const router = useRouter()
    const seeFeatures = (char) => {
      console.log(char); 
      router.push({ name: 'FeaturesCharacter', params: { id: char.id } })
    }
    return{
      seeFeatures
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-style{
  padding:10px 20px ;
  background-color:#FBFCFC ;
  color:#4da853 ;
  border:0.5px solid #4da853;
  font-weight: bold;
}

.btn-style:hover{
  background-color:#75D47B;
  color:#FBFCFC  ;
  cursor: pointer;
}

.btn-orden{
  cursor: pointer;
  text-decoration: underline;
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size:1.0rem;
  background-color:rgb(220, 234, 243);
}

input{
  border: none;
  border-bottom: 1px solid grey;
  box-sizing: border-box;
  padding: 12px 20px;
  background-color:rgb(235, 242, 247);
}
input:focus{
    outline: none;
    border: none;
}
input:active{
    border: none;
}
</style>
