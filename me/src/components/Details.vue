<template>
  <div class="details">
    <div class="nes-container with-title">
      <i class="title snes-jp-logo"></i>
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
  </div>
</template>

<script>
export default {
  name: 'Details',
  data(){
    return {
      icons:[{
        href:'https://twitter.com/zapoVic',
        icon:'nes-icon twitter'
      },{
        href:'https://github.com/vzapo',
        icon:'nes-icon github'
      },{
        href:'https://www.linkedin.com/in/victor-zaporojan/',
        icon:'nes-icon linkedin'
      },{
        href:'mailto:victor.zaporojan0@gmail.com',
        icon:'nes-icon gmail'
      }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  & a {
    padding:0px !important;
    margin-right:25px;
  }
}

.details{
  flex:1;
}
</style>
