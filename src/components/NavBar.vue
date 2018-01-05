<template>
  <nav>
      <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/data" exact>Data</router-link></li>
          <li><router-link to="/about" exact>About</router-link></li>
          <li><router-link to="/contacts" exact>Contacts</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    ul{
        padding: 0;
        height: 100px;
        background: lightgreen;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 10px;
        background: rgb(109, 207, 207);
        transition: all 0.3s;
        flex-basis: 200px;
        margin-right: 20px;
    }
    li:hover{
        background: darkcyan;
    }
    li:hover a{
        color: white;
        flex-direction: column;
    }
    a{
        text-decoration: none; 
        font-size: 2em;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .router-link-active{
        color: white;
        font-weight: bold;
        flex-direction: column;
    }
    .router-link-active::after{
        content: '';
        display: block;
        width: 70%;
        margin: 0 auto;
        height: 3px;
        background: white;
    }
</style>


