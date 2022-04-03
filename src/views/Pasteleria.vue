<template>
  <div class="home">
    <img alt="Logo Pasteleria" src="../assets/pastelerialogo.png" >
    <HelloWorld msg="Pastelería Dulce Oasis"/>
    <hr>
    <Sabores/>
    <Adornos/>
    <Boton/>
    <Direccion/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Direccion from '@/components/Direccion.vue'
import Sabores from '@/components/Sabores.vue'
import Adornos from '@/components/Sabores.vue'
import Boton from '@/components/BotonForm.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Direccion,
    Sabores,
    Adornos,
    Boton
  }
}
</script>

