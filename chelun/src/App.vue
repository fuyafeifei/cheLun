<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">首页</router-link>     -->
      <router-link to="/"></router-link>
      <router-link to="/floorprice"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
html,body{
  width: 100%;
  height: 100%;
}
}
</style>
