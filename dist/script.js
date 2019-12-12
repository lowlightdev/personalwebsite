let Navigation = {
  data: function () {
    return {
      items: [
        {icon:'fab fa-linkedin-in', link:'https://www.linkedin.com/in/victor-zaporojan/'},
        {icon:'fab fa-github-alt', link:'https://github.com/vzapo'},
        {icon:'fab fa-twitter', link:'https://twitter.com/zapoVic'},
        {icon:'far fa-envelope', link:'contact@victorz.me'},
        {icon:'fas fa-gamepad', link:'https://retroachievements.org/user/zapo'}]
    }
  },
  template: `<nav class="navbar">
    
    <ul class="navlist">
      <li v-for="item in items"><a :href=" item.link.includes('@') ? 'mailto:'+item.link : item.link "><i :class="item.icon" class="fa-2x icon"></i></a></li>
    </ul>
    </nav>`
};

const store = new Vuex.Store({
  state: {
    uiGradientsAPI:"https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json"
  }
})

var app = new Vue({
  store,
  el: '#app',
  data:function() {
    return { 
      date:new Date().getFullYear(),
      colors: [],
      message: 'Hello Vue!',
           description:"Enthusiastic software developer. I do stuff.<br> When I'm not busy I enjoy spending time playing retro console games and read or listen to audiobooks. I also have a lovely shih-tzu."
    }
  },
  components:{
    'navigation':Navigation
  },
  methods:{
    generateGradient(colors){
      
      var granimInstance = new Granim({
      element: '#canvas',
      direction: 'top-bottom',
      states : {
          "default-state": {
              gradients: colors,
            transitionSpeed: 3500,
            loop:true
          }
        }
      });
    },
    async downloadGradients(){
      const response = await fetch(this.$store.state.uiGradientsAPI);
      const data = await response.json();
      data.forEach((item,i)=>{
        if(item.colors.length < 3){
          this.colors.push(item.colors)  
        }
        
      })
    }
  },
  async mounted(){
    await this.downloadGradients();
    this.generateGradient(this.colors);
  }
})