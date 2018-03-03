export default {
  mounted() {
    console.log('mounted something with the getRandom method')
  },
  methods: {
    getRandom(list) {
      return list[Math.floor(Math.random() * list.length)];
    }
  }  
}