<template>
  <header>
    <div id="header-cont" class="container">
      <div class="head-new">
        <img class="img-head" src="../images/chat_logo.png">
        <h1 class="gametext">Game Schedule</h1>
        <img class="img-head" src="../images/nysl_logo.png">
      </div>
    </div>
  </header>
</template>

<script>


</script>


<style scoped>

/* row row-no-gutters head */

/* col-xs-1 col-md-1 img-head */
/* text-justify gametext */
/* col-xs-1 col-md-1 img-head */

#header-cont{
  /* height:100%; */
}

.head-new{
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items:center;
  background-color: green;
  padding: 5%;
  height:100%;
  width:100%;
  border-radius: 10px;
  grid-auto-rows: auto;
}

div.container{
  padding:0;
}

.head{
  padding: 2%;
  height: 100%;
}

/* .row {
  background-color: green;
} */

.gametext{
  text-align: center;
  margin: auto;
  color: white;
  text-shadow: 2px 2px 8px #000000;
}

.img-head{
  width: 100%;
  margin:auto;
}

.row h1 {
  color: white;
  text-shadow: 2px 2px 8px #000000;
}

header{
  /* overflow: hidden; */
  /* position:sticky;
  top: 0;
  width: 100%; */
}


</style>
