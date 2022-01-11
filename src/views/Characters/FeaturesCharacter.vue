<template>
  <div class="h1">
    <h1>Features Character</h1>
  </div>
  <div class="box">
    <div class="box-features">
      <img :src="feature.image" alt="img">
    </div>
    <div class="box-features">
      <div class="tam">
        <div class="uno">Name:</div>
        <div class="dos">{{feature.name}}</div>
      </div>
      <div class="tam">
        <div class="uno">Status:</div>
        <div class="dos">{{feature.status}}</div>
      </div>
      <div class="tam">
        <div class="uno">Species:</div>
        <div class="dos">{{feature.species}}</div>
      </div>
      <div class="tam">
        <div class="uno">Type:</div>
        <div class="dos">{{feature.type}}</div>
      </div>
      <div class="tam">
        <div class="uno">Gender:</div>
        <div class="dos">{{feature.gender}}</div>
      </div>
      <div class="tam">
        <div class="uno">Origin name:</div>
        <div class="dos">{{origin.name}}</div>
      </div>
    </div>
  </div>

<div class="over-table">
  <table class="centrar" >
    <thead>
      <tr>
        <th>Name</th>
        <th>Release</th>
        <th>Episode</th> 
        <th>Characters</th> 
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in episode" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.air_date}}</td>
          <td>{{item.episode}}</td>
          <td>{{item.characters}}</td>  
        </tr>
    </tbody> 
  </table>
</div>
  

</template>

<script>
import store from '@/store/index.js'
import axios from 'axios'
export default {
    props:['id'],
    data(){
        return {
            feature:[],
            episodes:{},
            episode:[],
            origin:[],
            url: store.state.url,
        }
    },
    mounted() {
      axios
        .get(store.state.url + '/character/' + this.id)
        .then(response =>{
            let datos = response.data
            console.log(datos);
            this.origin = datos.origin
            this.feature = datos
            let resultados = response.data.episode
            resultados.forEach((element) =>{
              axios
                .get(element)
                .then(response =>{
                  this.episode.push({
                      name:response.data.name,
                      air_date:response.data.air_date,
                      episode:response.data.episode,
                      characters:response.data.characters.length

                  }) 
                  /* console.log(this.episode); */
              })
            })
      })
     
    },
}
</script>

<style scoped>
.tam{
  padding:5px;
  width:300px;
  display:flex;
  justify-content:space-between;
  line-height:20px;
}
.tam:hover{
 /*  border: 1px solid rgb(199, 196, 196); */
  /* background-color:#f8f8f8; */
  box-shadow: -1px 1px 8px;
}
.uno{
  font-weight:bold;
  padding:10px;
}
.dos{
  padding:10px;
}

.box{
  width:600px;
  margin: auto;
  display:flex;
  flex-direction: row;
  text-align:center;
  box-shadow: -2px 6px 10px;
}

.h1{
  width:600px;
  margin:20px auto ;
  display:flex;
  justify-content: center; 
  flex-direction: row;
}

.box-features{
  box-sizing: border-box;
  flex: 40%;
 
}
.centrar{
  margin:20px auto;
  width:800px;
}
p{
  padding:10px;
  width:150px;
  
}



@media screen and (max-width:800px){
  .h1{
    flex-direction: column;
  }
  .box{
    flex-direction: column;
  }
  .tam{
    margin: auto;
    text-align: center;
    width: 50%;
  }
  
}


</style>