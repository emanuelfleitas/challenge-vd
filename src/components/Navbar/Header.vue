<template>
  <div class="header">
    <div class="btn-img">
      <img src="@/assets/logo_rick_and_morty.png" alt="logo">
      <router-link  to="/">Vida Digital R&M</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'header',
}
</script>

<style scoped>

.header{
  background-color:#63b3ed ;
}
.btn-img{

  border-bottom: 1px solid rgb(172, 169, 169);
  text-align: initial; 
  padding:20px;
  font-size:20px;
  font-weight: bold;
  color: #fff;

}
img{
  width:20px;
  height:30px;
  margin-right:10px;
  margin-left:10px;
}

.text{
  color:#fff;
  font-size:1.25rem;
  font-weight: 600px;
}


a{
  color: inherit;
  text-decoration:inherit;
  background-color: transparent;
}

@media screen and  (max-width: 600px) {
 
  .header{
    width:600px;
  }
  .btn-img{
      text-align: center; 
  }

}


</style> 