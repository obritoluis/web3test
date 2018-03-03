<template>
  <div class="counter">
    <div
      class="counter__count"
      aria-live
      :id="counterCountId"
    >
      {{ count }}
    </div>
    <v-btn
      @click=incrementCount
      aria-label="Increase Counter"
      :aria-controls="counterCountId"
    >
      <span aria-hidden>+</span>
    </v-btn>
    <v-btn
      @click=decrementCount
      aria-label="Decrease Counter"
      :aria-controls="counterCountId"
    >
      <span aria-hidden>-</span>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: 'Counter',
  computed: {
    count: function () {
      return this.$store.state.count
    },
    counterCountId: function () {
      return `${this._uid}-count`
    }
  },
  methods: {
    incrementCount: function () {
      this.$store.commit('incrementCount')
    },
    decrementCount: function () {
      this.$store.commit('decrementCount')
    }
  }
}
</script>
