export default {

  methods: {
    myStyle (offset) {
      const size = `calc(100vh - ${offset}px)`
      return {
        minHeight: size,
        height: size
      }
    }
  }
}
