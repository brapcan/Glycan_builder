<template>
  <div class="canvas_container">
    <h5 class='title'>Glycan Builder Demo</h5>
    <br>
    <br>
    <canvas ref="canvas" id='drawing-pad' height=600></canvas>
  </div>
</template>

<script src='assets/canvas.js'></script>

<style scoped>
.title{
  margin-top: -0.1%;
  margin-left: 2%
}

canvas {
  border: 1px solid black;
  background: #daecf2;
  cursor:crosshair;
  margin-top: -2%;
  margin-left: 1.5%;
  }
.buttons-row {
  margin-left: 2%;
  }
</style>
