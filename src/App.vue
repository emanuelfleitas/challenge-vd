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



.view{
    width:1100px;
    margin: auto;
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
  background-color:#EEEEEE;
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


.main-view{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}


@media screen and  (max-width: 600px) {
 
 .over-table{
   width:500px;
   margin: auto;
 }
.view{
    width:100%;
    margin: auto;
  }

}
/* 
@media screen and  (max-width: 500px) {
  .main-view{
   flex-direction: row;
  }
} */


</style>
