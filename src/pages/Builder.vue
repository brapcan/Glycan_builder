/* eslint-disable no-unused-vars */
<template>
  <div id="app">
    <h5 class='title'>Glycan Builder Demo</h5>
    <br>
    <br>
    <div class="canvas_container">
      <canvas ref="canvas" id='drawing-pad' height=600>
      </canvas>
    </div>
    <div class='buttons-row'>
      <q-btn
      title="Save image"
      flat
      round
      icon="save"
      @click='saveImage'>
      </q-btn>
      <q-btn
      title="New glycan"
      flat
      round
      icon="autorenew"
      @click='resetCanvas'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="Undo"
      icon="undo"
      @click='undo'>
      </q-btn>
    </div>
    <br>
    <div class="buttons-row">
      <q-btn
      size="15px"
      flat
      round
      title="D-Glucose (Glc)"
      @click='glcbutt'
      icon="img:statics/icons/Glc.png"
      >
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="D-Galactose (Gal)"
      @click='galbutt'
      icon="img:statics/icons/Gal.png" >
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="D-Manose (Man)"
      @click='manbutt'
      icon="img:statics/icons/Man.png">
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="N-Acetyl-D-Glucosamine (GlcNAc)"
      icon="img:statics/icons/GlcNAc.png"
      @click='glcnacbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="N-Acetyl-D-Galactosamine (GalNAc)"
      icon="img:statics/icons/GalNAc.png"
      @click='galnacbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="L-Fucose (Fuc)"
      icon="img:statics/icons/Fuc.png"
      @click='fucbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="D-Xylose (Xyl)"
      icon="img:statics/icons/Xyl.png"
      @click='xylbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="D-Glucuronic Acid (GlcA)"
      icon="img:statics/icons/GlcA.png"
      @click='glcabutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="D-Iduronic Acid (IdoA)"
      icon="img:statics/icons/IdoA.png"
      @click='idoabutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="N-Acetylneuraminic acid (Neu5Ac)"
      icon="img:statics/icons/Neu5Ac.png"
      @click='neu5acbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="N-Glycolylneuraminic Acid (Neu5Gc)"
      icon="img:statics/icons/Neu5Gc.png"
      @click='neu5gcbutt'>
      </q-btn>
    </div>
    <br>
    <div class='buttons-row'>
      <q-btn
      size="15px"
      flat
      round
      title="Branch up"
      icon="img:statics/icons/branchup.png"
      @click='branchupbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="Branch down"
      icon="img:statics/icons/branchdown.png"
      @click='branchdownbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="Branch bottom"
      icon="img:statics/icons/branchbottom.png"
      @click='branchbottombutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="Branch top"
      icon="img:statics/icons/branchtop.png"
      @click='branchtopbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="Return to main chain"
      icon="img:statics/icons/mainchain.png"
      @click='mainchainbutt'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="Unknow species"
      icon="img:statics/icons/curly.png"
      @click='curlybutton'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="Unknow species"
      icon="keyboard_arrow_up"
      v-if="iscurly"
      @click='upbutton'>
      </q-btn>
      <q-btn
      size="15px"
      flat
      round
      title="Unknow species"
      icon="keyboard_arrow_down"
      v-if="iscurly"
      @click='downbutton'>
      </q-btn>
    </div>
    <hr>
    <img ref="img" src="" id='canvas-image'>
    <small>Right click to save image.</small>
    <!--
    <q-card-section>
      Pointer location:<br>
      {{x}}, {{y}}<br>
      Glycan:<br>
      {{monolist}}<br>
      Main chain:<br>
      {{mainchainxy}}<br>
      Height:<br>
      {{heightcount}}<br>
      Max Min:<br>
      {{maxx}}, {{maxy}}, {{miny}}<br>
      {{minmax}}, {{lastminmax}}
     </q-card-section>
    -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvas: null,
      context: null,
      isDrawing: false,
      startX: 0,
      startY: 0,
      points: [],
      glycan: '',
      x: 50,
      y: 200,
      r: 20,
      glycan_info: [],
      monolist: [],
      branchinfo: [],
      branch_drawn: -1,
      branch_number: 1,
      mainchainxy: [],
      maxx: 50,
      maxy: 220,
      miny: 180,
      iscurly: false,
      curlyx: 0,
      curlyy: 0,
      heightcount: 0
    }
  },
  mounted () {
    var vm = this
    vm.canvas = vm.$refs.canvas
    vm.canvas.width = window.innerWidth * 0.96
    vm.context = vm.canvas.getContext('2d')
    vm.canvas.addEventListener('mousedown', vm.mousedown)
    vm.canvas.addEventListener('mousemove', vm.mousemove)
    document.addEventListener('mouseup', vm.mouseup)
  },
  methods: {
    undo () {
      this.monolist.pop()
      this.clear()
      this.glycan_show()
    },

    circle (type, x, y) {
      x += 20
      var vm = this
      vm.context.beginPath()
      vm.context.arc(x, y, this.r, 0, 2 * Math.PI, false)
      if (type === 'Glc') {
        vm.context.fillStyle = 'blue'
      } else if (type === 'Gal') {
        vm.context.fillStyle = 'yellow'
      } else {
        vm.context.fillStyle = 'green'
      }
      vm.context.fill()
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
    },

    circlefinish (type, x, y) {
      var vm = this
      vm.context.stroke()
      this.x = x + 40
    },

    rect (type, x, y) {
      var vm = this
      vm.context.beginPath()
      vm.context.rect(x, y - 20, 40, 40)
      if (type === 'GlcNAc') {
        vm.context.fillStyle = 'blue'
      } else {
        vm.context.fillStyle = 'yellow'
      }
      vm.context.fill()
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
    },
    rectfinish (type, x, y) {
      var vm = this
      vm.context.stroke()
      this.x = x + 40
    },

    triangle (type, x, y) {
      var vm = this
      vm.context.beginPath()
      vm.context.moveTo(x, y)
      vm.context.lineTo(x + 40, y + 24)
      vm.context.lineTo(x + 40, y - 24)
      vm.context.closePath()
      vm.context.fillStyle = 'red'
      vm.context.fill()
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
    },

    trianglefinish (type, x, y) {
      var vm = this
      vm.context.stroke()
      this.x = x + 40
    },

    triangletop (type, x, y) {
      var vm = this
      x += 20
      y += 18
      vm.context.beginPath()
      vm.context.moveTo(x, y)
      vm.context.lineTo(x + 26, y - 40)
      vm.context.lineTo(x - 26, y - 40)
      vm.context.closePath()
      vm.context.fillStyle = 'red'
      vm.context.fill()
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
    },

    triangletopfinish (type, x, y) {
      var vm = this
      vm.context.stroke()
      this.x = x + 35
      this.y = y - 2
    },

    trianglebot (type, x, y) {
      var vm = this
      x += 20
      y -= 18
      vm.context.beginPath()
      vm.context.moveTo(x, y)
      vm.context.lineTo(x + 26, y + 40)
      vm.context.lineTo(x - 26, y + 40)
      vm.context.closePath()
      vm.context.fillStyle = 'red'
      vm.context.fill()
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
    },

    trianglebotfinish (type, x, y) {
      var vm = this
      vm.context.stroke()
      this.x = x + 35
      this.y = y + 2
    },

    star (type, xx, yy) {
      xx += 14 * 1.2
      var vm = this
      var rot = Math.PI / 2 * 3
      var x = xx * 2 * 1.2
      var y = yy * 2 * 1.2
      var step = Math.PI / 5

      vm.context.beginPath()
      vm.context.moveTo(xx, yy - 20 * 1.2)
      for (let i = 0; i < 5; i++) {
        x = xx + Math.cos(rot) * 20 * 1.2
        y = yy + Math.sin(rot) * 20 * 1.2
        vm.context.lineTo(x, y)
        rot += step

        x = xx + Math.cos(rot) * 10 * 1.2
        y = yy + Math.sin(rot) * 10 * 1.2
        vm.context.lineTo(x, y)
        rot += step
      }
      vm.context.lineTo(xx, yy - 20 * 1.2)
      vm.context.closePath()
      vm.context.closePath()
      vm.context.fillStyle = 'orange'
      vm.context.fill()
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
    },

    starfinish (type, x, y) {
      var vm = this
      vm.context.stroke()
      this.x = x + 28 * 1.2
    },

    diamondtop (type, x, y) {
      var vm = this
      vm.context.beginPath()
      vm.context.moveTo(x, y)
      vm.context.lineTo(x + 20, y + 20)
      vm.context.lineTo(x + 40, y)
      if (type === 'Neu5Ac') {
        vm.context.fillStyle = 'purple'
        vm.context.fill()
      } else if (type === 'Neu5Gc') {
        vm.context.fillStyle = 'skyblue'
        vm.context.fill()
      } else if (type === 'IdoA') {
        vm.context.closePath()
        vm.context.fillStyle = 'brown'
        vm.context.fill()
      }
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      this.x = x
      this.y = y
    },

    diamondtopfinish () {
      var vm = this
      vm.context.stroke()
    },

    diamondbot (type, x, y) {
      var vm = this
      vm.context.beginPath()
      vm.context.moveTo(x, y)
      vm.context.lineTo(x + 20, y - 20)
      vm.context.lineTo(x + 40, y)
      if (type === 'Neu5Ac') {
        vm.context.fillStyle = 'purple'
        vm.context.fill()
      } else if (type === 'Neu5Gc') {
        vm.context.fillStyle = 'skyblue'
        vm.context.fill()
      } else if (type === 'GlcA') {
        vm.context.closePath()
        vm.context.fillStyle = 'blue'
        vm.context.fill()
      }
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
    },

    diamondbotfinish (type, x, y) {
      var vm = this
      vm.context.stroke()
      this.x = x + 40
    },

    bond (x, y) {
      var vm = this
      vm.context.beginPath()
      vm.context.moveTo(x, y)
      vm.context.lineTo(x + 30, y)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.x += 30
    },

    branchdown (x, y) {
      var vm = this
      var yd = 60 / (this.branch_drawn + 1)
      vm.context.beginPath()
      vm.context.moveTo(x, y)
      vm.context.lineTo(x + 20, y + yd)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.x += 20
      this.y += yd
    },

    branchup (x, y) {
      var vm = this
      var yd = 60 / (this.branch_drawn + 1)
      vm.context.beginPath()
      vm.context.moveTo(x, y)
      vm.context.lineTo(x + 20, y - yd)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.x += 20
      this.y -= yd
    },

    branchbottom (x, y) {
      var vm = this
      vm.context.beginPath()
      vm.context.moveTo(x - 20, y + 20)
      vm.context.lineTo(x - 20, y + 50)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.y += 70
      this.x -= 40
    },

    branchbottomf (x, y) {
      var vm = this
      y -= 10
      vm.context.beginPath()
      vm.context.moveTo(x - 20, y + 20)
      vm.context.lineTo(x - 20, y + 50)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.y += 60
      this.x -= 40
    },

    branchbottomx (x, y) {
      var vm = this
      y -= 9
      x += 4
      vm.context.beginPath()
      vm.context.moveTo(x - 20, y + 20)
      vm.context.lineTo(x - 20, y + 50)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.y += 65
      this.x -= 33
    },

    branchtop (x, y) {
      var vm = this
      vm.context.beginPath()
      vm.context.moveTo(x - 20, y - 20)
      vm.context.lineTo(x - 20, y - 50)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.y -= 70
      this.x -= 40
    },

    branchtopf (x, y) {
      var vm = this
      y += 10
      vm.context.beginPath()
      vm.context.moveTo(x - 20, y - 20)
      vm.context.lineTo(x - 20, y - 50)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.y -= 60
      this.x -= 40
    },

    branchtopx (x, y) {
      var vm = this
      x += 4
      vm.context.beginPath()
      vm.context.moveTo(x - 20, y - 20)
      vm.context.lineTo(x - 20, y - 50)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.y -= 64
      this.x -= 33
    },

    checkminmax (x, y) {
      if (x > this.maxx) {
        this.maxx = x + 40
      }
      if (y > this.maxy) {
        this.maxy = y + 40
      }
      if (y < this.miny) {
        this.miny = y - 40
      }
    },

    curlyb (maxx, maxy, miny) {
      var vm = this
      var y = (miny + maxy) / 2
      vm.context.beginPath()
      vm.context.moveTo(maxx, miny - 20)
      vm.context.arc(maxx, miny - 10, 10, 1.5 * Math.PI, 2 * Math.PI, false)
      vm.context.moveTo(maxx + 10, miny - 14)
      vm.context.lineTo(maxx + 10, y - 10)
      vm.context.lineTo(maxx + 30, y)
      vm.context.lineTo(maxx + 10, y + 10)
      vm.context.lineTo(maxx + 10, maxy + 14)
      vm.context.arc(maxx, maxy + 10, 10, 0, 0.5 * Math.PI, false)
      // vm.context.lineTo(maxx, maxy + 10)
      vm.context.lineWidth = 2
      vm.context.strokeStyle = '#003300'
      vm.context.stroke()
      this.x += 80
      this.y = y
      this.curlyx = this.x
      this.curlyy = this.y
      this.iscurly = true
    },

    cup (x, y) {
      this.heightcount -= 1
      y = y + 60 * this.heightcount
      this.y = y
      this.x = x
    },

    cdown (x, y) {
      this.heightcount += 1
      y = y + 60 * this.heightcount
      this.y = y
      this.x = x
    },

    mainchain (x, y) {
      this.x = x
      this.y = y
    },

    glcbutt () {
      this.monolist.push('Glc')
      this.clear()
      this.glycan_show()
    },

    galbutt () {
      this.monolist.push('Gal')
      this.clear()
      this.glycan_show()
    },

    manbutt () {
      this.monolist.push('Man')
      this.clear()
      this.glycan_show()
    },

    glcnacbutt () {
      this.monolist.push('GlcNAc')
      this.clear()
      this.glycan_show()
    },

    galnacbutt () {
      this.monolist.push('GalNAc')
      this.clear()
      this.glycan_show()
    },

    fucbutt () {
      this.monolist.push('Fuc')
      this.clear()
      this.glycan_show()
    },

    xylbutt () {
      this.monolist.push('Xyl')
      this.clear()
      this.glycan_show()
    },

    glcabutt () {
      this.monolist.push('GlcA')
      this.clear()
      this.glycan_show()
    },

    idoabutt () {
      this.monolist.push('IdoA')
      this.clear()
      this.glycan_show()
    },

    neu5acbutt () {
      this.monolist.push('Neu5Ac')
      this.clear()
      this.glycan_show()
    },

    neu5gcbutt () {
      this.monolist.push('Neu5Gc')
      this.clear()
      this.glycan_show()
    },

    branchupbutt () {
      this.monolist.push(':Branchup:')
      this.clear()
      this.glycan_show()
    },

    branchdownbutt () {
      this.monolist.push(':Branchdown:')
      this.clear()
      this.glycan_show()
    },

    branchbottombutt () {
      this.monolist.push(':Branchbottom:')
      this.clear()
      this.glycan_show()
    },

    branchtopbutt () {
      this.monolist.push(':Branchtop:')
      this.clear()
      this.glycan_show()
    },

    mainchainbutt () {
      this.monolist.push(':Mainchain:')
      this.clear()
      this.glycan_show()
    },

    curlybutton () {
      this.monolist.push(':Curly:')
      this.clear()
      this.glycan_show()
    },

    upbutton () {
      this.monolist.push(':Up:')
      this.clear()
      this.glycan_show()
    },

    downbutton () {
      this.monolist.push(':Down:')
      this.clear()
      this.glycan_show()
    },

    glycan_show () {
      var branch = []
      for (let i = 0; i < this.monolist.length; i++) {
        var type = this.monolist[i]
        if (i !== 0 && this.monolist[i - 1] !== ':Branchup:' && this.monolist[i] !== ':Down:' && this.monolist[i] !== ':Up:' && this.monolist[i - 1] !== ':Branchdown:' && this.monolist[i - 1] !== ':Branchtop:' && this.monolist[i - 1] !== ':Branchbottom:' && this.monolist[i] !== ':Branchup:' && this.monolist[i] !== ':Branchdown:' && this.monolist[i] !== ':Branchbottom:' && this.monolist[i] !== ':Branchtop:' && this.monolist[i] !== ':Mainchain:' && this.monolist[i] !== ':Curly:') {
          this.bond(this.x, this.y)
        }
        if (type === 'Glc' || type === 'Man' || type === 'Gal') {
          this.circle(type, this.x, this.y)
          this.circlefinish(type, this.x, this.y)
          this.checkminmax(this.x, this.y)
        } else if (type === 'GlcA' || type === 'IdoA' || type === 'Neu5Ac' || type === 'Neu5Gc') {
          this.diamondtop(type, this.x, this.y)
          this.diamondtopfinish(type)
          this.diamondbot(type, this.x, this.y)
          this.diamondbotfinish(type, this.x, this.y)
          this.checkminmax(this.x, this.y)
        } else if (type === 'Fuc') {
          if (i !== 0 && this.monolist[i - 1] === ':Branchtop:') {
            this.triangletop(type, this.x, this.y)
            this.triangletopfinish(type, this.x, this.y)
            this.checkminmax(this.x, this.y)
          } else if (i !== 0 && this.monolist[i - 1] === ':Branchbottom:') {
            this.trianglebot(type, this.x, this.y)
            this.trianglebotfinish(type, this.x, this.y)
            this.checkminmax(this.x, this.y)
          } else {
            this.triangle(type, this.x, this.y)
            this.trianglefinish(type, this.x, this.y)
            this.checkminmax(this.x, this.y)
          }
        } else if (type === 'GlcNAc' || type === 'GalNAc') {
          this.rect(type, this.x, this.y)
          this.rectfinish(type, this.x, this.y)
          this.checkminmax(this.x, this.y)
        } else if (type === 'Xyl') {
          this.star(type, this.x, this.y)
          this.starfinish(type, this.x, this.y)
          this.checkminmax(this.x, this.y)
        } else if (type === ':Branchup:') {
          branch.push(this.x, this.y)
          this.mainchainxy.push(branch)
          this.branch_drawn += 1
          this.branchup(this.x, this.y)
          this.checkminmax(this.x, this.y)
        } else if (type === ':Branchdown:') {
          branch.push(this.x, this.y)
          this.mainchainxy.push(branch)
          this.branch_drawn += 1
          this.branchdown(this.x, this.y)
          this.checkminmax(this.x, this.y)
        } else if (type === ':Branchbottom:') {
          branch.push(this.x, this.y)
          this.mainchainxy.push(branch)
          this.branch_drawn += 1
          if (i !== 0 && this.monolist[i - 1] === 'Fuc') {
            this.branchbottomf(this.x, this.y)
          } else if (i !== 0 && this.monolist[i - 1] === 'Xyl') {
            this.branchbottomx(this.x, this.y)
          } else {
            this.branchbottom(this.x, this.y)
          }
          this.checkminmax(this.x, this.y)
        } else if (type === ':Branchtop:') {
          branch.push(this.x, this.y)
          this.mainchainxy.push(branch)
          this.branch_drawn += 1
          if (i !== 0 && this.monolist[i - 1] === 'Fuc') {
            this.branchtopf(this.x, this.y)
          } else if (i !== 0 && this.monolist[i - 1] === 'Xyl') {
            this.branchtopx(this.x, this.y)
          } else {
            this.branchtop(this.x, this.y)
          }
          this.checkminmax(this.x, this.y)
        } else if (type === ':Mainchain:') {
          var x = this.mainchainxy[this.branch_drawn][0]
          var y = this.mainchainxy[this.branch_drawn][1]
          this.mainchainxy.pop()
          this.branch_drawn -= 1
          this.mainchain(x, y)
        } else if (type === ':Curly:') {
          this.curlyb(this.maxx, this.maxy, this.miny)
        } else if (type === ':Up:') {
          this.cup(this.curlyx, this.curlyy)
        } else if (type === ':Down:') {
          this.cdown(this.curlyx, this.curlyy)
        }
        branch = []
      }
    },

    clear () {
      var vm = this
      // eslint-disable-next-line no-self-assign
      vm.canvas.width = vm.canvas.width
      this.x = 50
      this.y = 200
      this.maxx = 50
      this.maxy = 220
      this.miny = 180
      this.mainchainxy = []
      this.branch_drawn = -1
      this.iscurly = false
      this.curlyx = 0
      this.heightcount = 0
    },

    mousedown (e) {
      var vm = this
      var rect = vm.canvas.getBoundingClientRect()
      var x = e.clientX - rect.left
      var y = e.clientY - rect.top

      vm.isDrawing = true
      vm.startX = x
      vm.startY = y
      vm.points.push({
        x: x,
        y: y
      })
    },

    mousemove (e) {
      var vm = this
      var rect = vm.canvas.getBoundingClientRect()
      var x = e.clientX - rect.left
      var y = e.clientY - rect.top

      if (vm.isDrawing) {
        vm.context.beginPath()
        vm.context.moveTo(vm.startX, vm.startY)
        vm.context.lineTo(x, y)
        vm.context.lineWidth = 2
        vm.context.lineCap = 'round'
        vm.context.strokeStyle = 'rgba(0,0,0,1)'
        vm.context.stroke()

        vm.startX = x
        vm.startY = y

        vm.points.push({
          x: x,
          y: y
        })
      }
    },

    mouseup (e) {
      var vm = this
      vm.isDrawing = false
      if (vm.points.length > 0) {
        localStorage.points = JSON.stringify(vm.points)
      }
    },

    resetCanvas () {
      var vm = this
      // eslint-disable-next-line no-self-assign
      vm.canvas.width = vm.canvas.width
      vm.points.length = 0 // reset points array
      this.x = 50
      this.y = 200
      this.maxx = 50
      this.maxy = 220
      this.miny = 180
      this.minmax = []
      this.monolist = []
      this.mainchainxy = []
      this.branch_drawn = -1
      this.iscurly = false
      this.curlyx = 0
      this.heightcount = 0
    },

    saveImage () {
      var vm = this
      var dataURL = vm.canvas.toDataURL()
      var img = vm.$refs.img
      img.src = dataURL
    }
  }
}
</script>

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
