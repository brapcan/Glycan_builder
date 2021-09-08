<template>
  <div class="fixed-center">
    <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Glycan builder manual</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <br>
          <br>
          This app consits of 3 modules in this build.
          <br>
          <br>
          <q-separator inset />
          <br>
          <a href="http://localhost:8080/#/">First module</a> is a periodic table. All elements can be clicked and when pressed they give basic info about the chosen element. Can be used by pressing "Periodic table"
           on navigation table.
          <br>
          <br>
          <q-separator inset />
          <br>
          <a href="http://localhost:8080/#/sugars">Second module</a> is glycan calc. You can build your glycan by pressing the glycan buttons each represented by its own glycan symbol. When pressed the glycan is added to
           a chain and each of its atoms is added to a full glycan and their mass is calculated. Glycans can also be deleted. Either by undoing the last change made (i.e. the last glycan)
           added or by reseting the whole glycan(thus removing the complete glycan).
          <br>
          <br>
          <q-separator inset />
          <br>
          The <a href="http://localhost:8080/#/builder">third</a> and the last module is the glycan builder itself. The glycans are created using buttons. Each button has a label which can be seen by hovering over it.
          <br>
          <br>
           The first row of buttons contains general instruction buttons. Save image creates an image of your canvas and lets you save your canvas as a jpeg. Reset canvas
            deletes all changes made to the canvas. Undo button removes the last change made to the canvas
          <br>
          <br>
           The second row of buttons represents glycans that can be drawn. It draws glycans using HTML canvas and javascritp. You can draw any of eleven glycans represented by
            their buttons in the menu bellow the canvas. When a glycan is pressed its graphical symbol will be drawn. If any glycan has any other glycans before itself it will
            draw a bond and then the symbol.
          <br>
          <br>
           The third row of the buttons represents the navigation portion of the builder. Branch up and branch down represent branching of the glycan in a slanting manner as
            represented by the symbol of the buttons. Branch top and bottom branch the glycan above or bellow its current plain. When these buttons are pressed the first glycan
            following their clicking is treated as a first glycan in a new row. To return to the previous row and countinue the chain you have to press mainchain. Unknown
            species button represented by a curly brace creates a curly brace and lets you add unknown species a the end of your glycan (IT SHOULD ONLY BE USED AFTER YOU'VE
            FINISHED BUILDING YOUR KNOWN GLYCAN CHAIN). Once pressed it shows 2 more buttons Unknown up and Unknown down which let you adjust the height of your glycans after
            the brace.
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="stylus" scoped>
.texti{
  margin: 5%;
  background-color: #e1e6ed;
  width: 600px;
  height 600px;
}
</style>
