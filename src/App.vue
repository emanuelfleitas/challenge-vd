<template>
  <Header/>
  <router-view />
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Navbar/Header.vue'
import Home from '@/views/Home.vue'

export default {
  components: {
    Header,
    Home
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color:#fff;
  font-size:1.25rem;
  font-weight: 600px;
}

.over-table{
  overflow-x:auto;
}

td{
  padding:30px 10px;
}

tr{
  text-align: center;
  padding:30px 10px;
  margin:30px ;
}

tr:hover{
  background-color:#dcf2f8;
}


th{
  padding:30px 10px;
}

thead{
  background-color:rgb(220, 234, 243);
}

.centrar{
  margin:40px auto;
  width:800px;
  border:1px solid rgb(207, 206, 206);
  box-shadow: -2px 2px 8px;
}

@media screen and  (max-width: 600px) {
  .over-table{
    width:600px;
    margin: auto;
  }
  #app{
    width:500px;
  }
}



</style>
