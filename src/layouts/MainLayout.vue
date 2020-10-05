<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title
          class="text-grand-hotel text-bold">
          QuasaGram
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          to="/"
          name="home"
          icon="home" 
        />
        <q-route-tab
          to="/camera"
          name="camera"
          icon="camera" 
        />
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="sass">
.q-toolbar__title
  text-align: center
  font-size: 35px
</style>
