<template>
    <h2>Realizar pedido</h2>
    <form action="pedido.js" id="form1" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" class="inputStyle"><br><br>

        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" name="telefono" maxlength="10" placeholder="Telefono celular" class="inputStyle"><br><br>

        <label for="correo">Correo Electrónico</label><br>
        <input type="email" id="correo" name="correo" placeholder="Escribe tu correo" class="inputStyle"><br><br>
        
        <label for="descripcion">Descripción general del pastel</label><br>
        <textarea id="descripcion" name="descripcion" rows="4" cols="50" placeholder="Descripción general del pastel" class="inputStyle">
        </textarea>
        <br><br>

        <h2>Seleccion de sabores</h2>
        <input type="checkbox" id="sabor1" name="sabor1" value="Chocolate">
        <label for="sabor1">Chocolate</label><br>
        <input type="checkbox" id="sabor2" name="sabor2" value="Vainilla">
        <label for="sabor2">Vainilla</label><br>
        <input type="checkbox" id="sabor3" name="sabor3" value="Tres leches">
        <label for="sabor3">Tres leches</label><br><br>

        <h2>Seleccion de adornos</h2>
        <input type="checkbox" id="adorno1" name="adorno1" value="Decoraciones florales">
        <label for="adorno1">Decoraciones florales</label><br>
        <input type="checkbox" id="adorno2" name="adorno2" value="Crema de chocolate">
        <label for="adorno2">Crema de chocolate</label><br>
        <input type="checkbox" id="adorno3" name="adorno3" value="Tres leches">
        <label for="adorno3">Velas</label><br>
        <input type="checkbox" id="adorno4" name="adorno4" value="Mensaje personalizado">
        <label for="adorno4">Mensaje personalizado</label>
        <input type="text" id="mensaje" name="mensaje" placeholder="Escribe el mensaje personalizado" class="inputStyle">
        <br><br>

        <input type="submit" class="btnStyle">
        <input type="reset" class="btnStyle">


    </form>
</template>