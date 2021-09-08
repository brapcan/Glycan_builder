<template>
  <div class="page">
    <div class="sugar_butttons full-width row wrap justify-center items-center">
      <q-btn
      size="35px"
      flat
      title="D-Glucose (Glc)"
      @click='glcbutt'
      icon="img:statics/icons/Glc.png"
      >
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="D-Galactose (Gal)"
      @click='galbutt'
      icon="img:statics/icons/Gal.png" >
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="D-Manose (Man)"
      @click='manbutt'
      icon="img:statics/icons/Man.png">
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="N-Acetyl-D-Glucosamine (GlcNAc)"
      icon="img:statics/icons/GlcNAc.png"
      @click='glcnacbutt'>
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="N-Acetyl-D-Galactosamine (GalNAc)"
      icon="img:statics/icons/GalNAc.png"
      @click='galnacbutt'>
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="L-Fucose (Fuc)"
      icon="img:statics/icons/Fuc.png"
      @click='fucbutt'>
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="D-Xylose (Xyl)"
      icon="img:statics/icons/Xyl.png"
      @click='xylbutt'>
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="D-Glucuronic Acid (GlcA)"
      icon="img:statics/icons/GlcA.png"
      @click='glcabutt'>
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="D-Iduronic Acid (IdoA)"
      icon="img:statics/icons/IdoA.png"
      @click='idoabutt'>
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="N-Acetylneuraminic acid (Neu5Ac)"
      icon="img:statics/icons/Neu5Ac.png"
      @click='neu5acbutt'>
      </q-btn>
      <q-btn
      size="35px"
      flat
      title="N-Glycolylneuraminic Acid (Neu5Gc)"
      icon="img:statics/icons/Neu5Gc.png"
      @click='neu5gcbutt'>
      </q-btn>
      </div>
      <br>
      <br>
    <div class="q-pa-md items-center q-gutter-sm">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Your Glycan</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Your glycan mass is {{total_mass}} Da<br>
          It has {{C}} carbon atoms.<br>
          It has {{O}} oxygen atoms.<br>
          It has {{H}} hydrogen atoms.<br>
          It has {{N}} nitrogen atoms.<br>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          Your Glycan composition:<br>
          {{glycan}}
        </q-card-section>
      </q-card>
      <div class='q-pa-sm float-right'>
          <q-btn

          title="Reset"
          unelevated
          rounded
          color="green"
          label='Reset'
          @click='reset'>
          </q-btn>
          <q-btn
          title="Undo"
          unelevated
          rounded
          color="green"
          label='Undo'
          @click='undo'>
          </q-btn>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sugars',
  data: () => ({
    total_mass: 0,
    glycan: '',
    N: 0,
    C: 0,
    O: 0,
    H: 0
  }),
  methods: {
    undo () {
      if (this.glycan.length < 7) {
        this.O = 0
        this.N = 0
        this.C = 0
        this.H = 0
        this.total_mass = 0
        this.glycan = ''
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 3) === 'Glc') {
        this.O = this.O - 5
        this.C = this.C - 6
        this.H = this.H - 10
        this.glycan = this.glycan.substr(0, this.glycan.length - 4)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 3) === 'Man') {
        this.O = this.O - 5
        this.C = this.C - 6
        this.H = this.H - 10
        this.glycan = this.glycan.substr(0, this.glycan.length - 4)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 3) === 'Gal') {
        this.O = this.O - 5
        this.C = this.C - 6
        this.H = this.H - 10
        this.glycan = this.glycan.substr(0, this.glycan.length - 4)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 6) === 'GlcNAc') {
        this.O = this.O - 5
        this.C = this.C - 8
        this.H = this.H - 13
        this.N = this.N - 1
        this.glycan = this.glycan.substr(0, this.glycan.length - 7)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 6) === 'GalNAc') {
        this.O = this.O - 5
        this.C = this.C - 8
        this.H = this.H - 13
        this.N = this.N - 1
        this.glycan = this.glycan.substr(0, this.glycan.length - 7)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 3) === 'Fuc') {
        this.O = this.O - 4
        this.C = this.C - 6
        this.H = this.H - 10
        this.glycan = this.glycan.substr(0, this.glycan.length - 4)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 3) === 'Xyl') {
        this.O = this.O - 4
        this.C = this.C - 5
        this.H = this.H - 8
        this.glycan = this.glycan.substr(0, this.glycan.length - 4)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 4) === 'GlcA') {
        this.O = this.O - 6
        this.C = this.C - 6
        this.H = this.H - 8
        this.glycan = this.glycan.substr(0, this.glycan.length - 5)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 4) === 'IdoA') {
        this.O = this.O - 6
        this.C = this.C - 6
        this.H = this.H - 8
        this.glycan = this.glycan.substr(0, this.glycan.length - 5)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 6) === 'Neu5Ac') {
        this.O = this.O - 8
        this.C = this.C - 11
        this.H = this.H - 17
        this.N = this.N - 1
        this.glycan = this.glycan.substr(0, this.glycan.length - 7)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else if (this.glycan.substr(this.glycan.length - 6) === 'Neu5Gc') {
        this.O = this.O - 9
        this.C = this.C - 11
        this.H = this.H - 17
        this.N = this.N - 1
        this.glycan = this.glycan.substr(0, this.glycan.length - 7)
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {}
    },
    reset () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to reset your glycan',
        cancel: true,
        persistent: true,
        preventClose: true
      }).onOk(() => {
        this.O = 0
        this.N = 0
        this.C = 0
        this.H = 0
        this.total_mass = 0
        this.glycan = ''
        this.$q.notify('Your glycan was reset!')
      })
    },
    glcbutt () {
      if (this.total_mass === 0) {
        this.O += 6
        this.C += 6
        this.H += 12
        this.glycan += 'Glc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 5
        this.C += 6
        this.H += 10
        this.glycan += '-Glc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    galbutt () {
      if (this.total_mass === 0) {
        this.O += 6
        this.C += 6
        this.H += 12
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
        this.glycan += 'Gal'
      } else {
        this.O += 5
        this.C += 6
        this.H += 10
        this.glycan += '-Gal'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    manbutt () {
      if (this.total_mass === 0) {
        this.O += 6
        this.C += 6
        this.H += 12
        this.glycan += 'Man'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 5
        this.C += 6
        this.H += 10
        this.glycan += '-Man'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    glcnacbutt () {
      if (this.total_mass === 0) {
        this.O += 6
        this.C += 8
        this.H += 15
        this.N += 1
        this.glycan += 'GlcNAc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 5
        this.C += 8
        this.H += 13
        this.N += 1
        this.glycan += '-GlcNAc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    galnacbutt () {
      if (this.total_mass === 0) {
        this.O += 6
        this.C += 8
        this.H += 15
        this.N += 1
        this.glycan += 'GalNAc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 5
        this.C += 8
        this.H += 13
        this.N += 1
        this.glycan += '-GalNAc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    fucbutt () {
      if (this.total_mass === 0) {
        this.O += 5
        this.C += 6
        this.H += 12
        this.glycan += 'Fuc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 4
        this.C += 6
        this.H += 10
        this.glycan += '-Fuc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    xylbutt () {
      if (this.total_mass === 0) {
        this.O += 5
        this.C += 5
        this.H += 10
        this.glycan += 'Xyl'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 4
        this.C += 5
        this.H += 8
        this.glycan += '-Xyl'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    glcabutt () {
      if (this.total_mass === 0) {
        this.O += 7
        this.C += 6
        this.H += 10
        this.glycan += 'GlcA'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 6
        this.C += 6
        this.H += 8
        this.glycan += '-GlcA'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    idoabutt () {
      if (this.total_mass === 0) {
        this.O += 7
        this.C += 6
        this.H += 10
        this.glycan += 'IdoA'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 6
        this.C += 6
        this.H += 8
        this.glycan += '-IdoA'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    neu5acbutt () {
      if (this.total_mass === 0) {
        this.O += 9
        this.C += 11
        this.H += 19
        this.N += 1
        this.glycan += 'Neu5Ac'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 8
        this.C += 11
        this.H += 17
        this.N += 1
        this.glycan += '-Neu5Ac'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    },
    neu5gcbutt () {
      if (this.total_mass === 0) {
        this.O += 10
        this.C += 11
        this.H += 19
        this.N += 1
        this.glycan += 'Neu5Gc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      } else {
        this.O += 9
        this.C += 11
        this.H += 17
        this.N += 1
        this.glycan += '-Neu5Gc'
        this.total_mass = 15.99976 * this.O + 12.0107 * this.C + 1.00797 * this.H + 14.00667 * this.N
      }
    }
  }
}
</script>
