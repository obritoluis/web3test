<template>
  <form action="#" enctype="multipart/form-data" @submit="submitForm">
    <label for="file">File</label>
    <input id="file" type="file" name="file" @change="updateFile">

    <label for="password">Password</label>
    <input id="password" type="password" name="password" v-model="password">
  </form>
</template>

<script>
export default {
  name: 'KeyStoreAuthForm',
  data: function () {
    return {
      file: null,
      password: null
    }
  },
  methods: {
    updateFile: function (e) {
      console.log(e)
    },
    submitForm: function (e) {
      e.preventDefault()
      alert(`${this.file} and ${this.password}`)
    }
  }
}
</script>
