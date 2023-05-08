const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Hello Vue, I hope we will be friends',
        mieClassi: "colorWhite textCenter"
      }
    }
  }).mount('#app')