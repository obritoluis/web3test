<template>
  <v-app id="app">
    <v-layout justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card>
          <v-card-text>
            <KeyStoreAuthForm></KeyStoreAuthForm>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <router-view/>
  </v-app>
</template>

<script>
import KeyStoreAuthForm from '@/components/KeyStoreAuthForm.vue'

export default {
  name: 'App',
  components: {
    'KeyStoreAuthForm': KeyStoreAuthForm
  }
}
</script>
