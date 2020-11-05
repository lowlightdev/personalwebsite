<template>
  <main class="main">
    <section class="home">
      <div class="nes-container with-title content">
        <p class="nes-balloon from-right nes-pointer title">
        Hello!
        </p>
        <img alt="me" src="../assets/me.png" class="img">
        <h2>Victor Zaporojan</h2>
        <p class="heart-animation">
          <i class="nes-icon is-transparent heart"></i>
          <i class="nes-icon is-half heart"></i>
          <i class="nes-icon heart"></i>
        </p>
        <h3>Software Developer</h3>
      </div>
      <section class="icon-list nes-container is-rounded is-dark">
        <a v-for="icon in icons" :href="icon.href" :key="icon.icon"><i :class="icon.icon"></i></a>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      showGamesBubble:false,
      icons:[{
        href:'https://twitter.com/zapobyte',
        icon:'nes-icon twitter'
      },{
        href:'https://github.com/zapobyte',
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
  mounted(){
    let container = document.getElementsByClassName('heart-animation')[0],
      children = container.childNodes,
      show=-1;
      setInterval(()=>{
        if(children[show]) children[show].style.display='none';
        show=show+1;
        if(show==children.length) show=0;
        children[show].style.display='inline-block';
      },2000)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/home.scss';
</style>
