<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/floorprice"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
