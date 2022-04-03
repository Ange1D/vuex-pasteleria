<template>
  <div class="home">
    <img alt="Logo Pasteleria" width="150px" src="../assets/pastelerialogo.png">
    <HelloWorld msg="Pastelería Dulce Oasis"/>

    <SaboresRestantes/>
    <AdornosRestantes/>
    <Pedidos/>
    <br>
    <Direccion/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Direccion from '@/components/Direccion.vue'
import SaboresRestantes from '@/components/SaboresRestantes.vue'
import AdornosRestantes from '@/components/SaboresRestantes.vue'
import Pedidos from '@/components/Pedidos.vue'

export default {
  name: 'pastelero',
  components: {
    HelloWorld,
    Direccion,
    SaboresRestantes,
    AdornosRestantes,
    Pedidos
  }
}
</script>
