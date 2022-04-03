<template>
  <div class="home">
    <img alt="Logo Pasteleria" src="../assets/pastelerialogo.png" >
    <HelloWorld msg="Pastelería Dulce Oasis"/>
    <hr>
    <Formulario/>
    <br>
    <Direccion/>
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '@/components/Formulario.vue'
import Direccion from '@/components/Direccion.vue'


export default {
  name: 'pedido',
  components: {
    Formulario,
    Direccion,

  }
}
</script>