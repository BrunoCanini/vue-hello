const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Hello Vue, I hope we will be friends',
        mieClassi: "colorWhite textCenter",
        srcImg: "https://thumbs.dreamstime.com/b/il-robot-d-si-allinea-alla-donna-due-mani-una-posizione-proposta-intelligenza-artificiale-progettazione-aziendale-amicizia-tra-181841302.jpg"
      }
    }
  }).mount('#app')