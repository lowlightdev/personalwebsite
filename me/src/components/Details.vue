<template>
  <main class="main">
    <section class="details">
        <a href="https://lowlightdev.itch.io/">
          <p class="nes-balloon from-left nes-pointer updates" v-if="showGamesBubble">
          I make games, check them out here.<i class="nes-icon close is-small" @click="showGamesBubble=!showGamesBubble"></i>
        </p>
      </a>
      <div class="nes-container with-title content">
        <i class="title snes-jp-logo  nes-pointer " @click="showGamesBubble=!showGamesBubble"></i>
        <img alt="me" src="../assets/me.png" class="img">
        <h2>Victor Zaporojan</h2>
        <p><i class="nes-icon heart"></i></p>
        <h3>Software Developer</h3>
        <ul>
          <i class="nes-icon coin"></i>
          <i class="nes-icon coin"></i>
          <i class="nes-icon coin"></i>
        </ul>
      </div>
      <section class="icon-list nes-container is-rounded is-dark">
        <a v-for="icon in icons" :href="icon.href" :key="icon.icon"><i :class="icon.icon"></i></a>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Details',
  data(){
    return {
      showGamesBubble:false,
      icons:[{
        href:'https://twitter.com/lowlightdev',
        icon:'nes-icon twitter'
      },{
        href:'https://github.com/lowlightdev',
        icon:'nes-icon github'
      },{
        href:'https://www.linkedin.com/in/victor-zaporojan/',
        icon:'nes-icon linkedin'
      },{
        href:'mailto:contact@victorz.me',
        icon:'nes-icon gmail'
      }]
    }
  },
  methods:{
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main{
  max-width:960px;
  margin:auto;
  display: flex;
  align-items: center;
  height:100%;
}
.updates{
  text-align:left;
  margin-left:1rem;
}
.img, ul,h2,h3{
  padding-left:0;
  margin:0;
  padding-bottom:2rem;
}
.news{
    margin:auto;
    align-self: center;
    width:75%;
    text-align: left;
    & .title {
      padding:0;
      padding-bottom:15px;
      font-size:125%;
    }

    & .content {
      padding:0;
      padding-bottom:15px;
    }

    & .footer {
      padding:0;
      font-size:70%;
      font-weight: 100;
    }
}

.icon-list{
  text-align: center;
  & a {
    padding:0px !important;
    margin-right:25px;
  }
}

.details{
  & > .content {
    text-align: center;
  }
  flex:1;
}
</style>
