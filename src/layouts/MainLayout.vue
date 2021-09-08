<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Navigation</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <br>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Periodic table',
          caption: 'Explore the periodic table of elements!',
          icon: 'img:statics/icons/periodic.png',
          link: '/#/'
        },
        {
          title: 'Glycan calculator',
          caption: 'Mass and atomic composition calculator!',
          icon: 'img:statics/icons/sugar.png',
          link: '/#/sugars'
        },
        {
          title: 'Glycan builder',
          caption: 'Build your own Glycan!',
          icon: 'img:statics/icons/Builder_icon.png',
          link: '/#/builder'
        },
        {
          title: 'About',
          caption: 'Everything you need to know about this app!',
          icon: 'contact_support',
          link: '/#/settings'
        }
      ]
    }
  }
}
</script>
