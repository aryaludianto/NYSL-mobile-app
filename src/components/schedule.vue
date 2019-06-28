<template>
<div class="disp-schedule">

 <div class="header">
    <div id="header-cont" class="container">
      <div class="head-new">
        <img class="img-head" src="../images/chat_logo.png">
        <h1 class="gametext">Game Schedule</h1>
        <img class="img-head" src="../images/nysl_logo.png">
      </div>
    </div>
  


    
    <div id="selection-list" class="container">
      <div class="selection-sort">
        <select  class="selections "  v-model="selectedTeam" @change="sortData()">
          <option selected="selected" value="All Teams">All Teams</option>
          <option v-for="(team,index) in results.overView.teams" v-bind:value="team" :key="index">
            {{team}}
          </option>
        </select>


        <select class="selections" v-model="selectedDate" @change="sortData()" value="All Date">
          <option selected="selected" value="All Date">All Date</option>
          <option v-for="(game,index) in results.games" v-bind:value="game.date" :key="index">
            {{game.day}}, {{game.month}} {{game.dayNumber}}
          </option>
        </select>


        <select  class="selections" v-model="selectedField" @change="sortData()">
          <option selected="selected" value="All Fields">All Fields</option>
          <option v-for="(team,index) in results.overView.teams" v-bind:value="team" :key="index">
           {{team}}
          </option>
        </select>
      </div>
    </div>

  </div>

    <div class="card-container">
      <div v-for="(game,index) in filterData.games" id="card-cont-id"class="container" :key='index'>  
        <div v-on:click="mapClass($event)" v-bind:id="'card-'+game.gameNum" class="card-wrap">
          <div class="container card">
            <div class="row">
            <div class="col-3 team">
              <img class="team-logo" src="../assets/logo-home.png">
              <p>{{game.homeTeam}}</p>
            </div>
            <div class="col-6 main column">
              <div class="date">
                <p>{{game.day}} {{game.month}} {{game.dayNumber}}</p>
              </div>

              <div class="time">
                <div class="row">
                  <hr class="col-2">
                  <p class="row"> {{game.time}} </p>
                  <hr class="col-2">
                </div>
              </div>
              <div class="loc">
                <h3>{{game.homeTeam}}</h3>
              </div>
            </div>
            <div class="col-3 team">
              <img class="team-logo" src="../assets/away-logo.png">
              <p>{{game.awayTeam}}</p>
            </div>
            </div>
          </div> 
        </div>
        <div class="map-cont" v-bind:id="'map-'+game.gameNum" >
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <p class="loc">Location: {{game.location}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <iframe class="map-loc" v-bind:src="game.map" height="160px">
                </iframe>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p  class="loc">Facility Type: Outdoor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>

</template>

<script>

export default {
    name: 'schedule', 
    props: {
      results: {
        type: Object,
        required: true
      }
    },
    data(){
        return{
          tempResult: {...this.results},
          selectedTeam:'All Teams',
          selectedDate:'All Date',
          selectedField:'All Fields'
        }
    },
    methods: {
      mapClass(event) {
        let targetId = (event.currentTarget.id).slice(5)
        let mapId = document.getElementById("map-" + targetId)
        mapId.classList.contains('active')? mapId.classList.remove('active') : mapId.classList.add('active');
      },
      sortData(){
        let tempData = [], tempData1 =[], tempData2 =[];
       let witoutGame = [{"time": "No Game"}]
        
        //sort by Teams
        this.results.games.filter(res => {
          if(this.selectedTeam === "All Teams") tempData.push(res)
          if (res.homeTeam === this.selectedTeam || res.awayTeam === this.selectedTeam) tempData.push(res) 
        })

        //sort by Fields
        tempData.filter(res=> {
          if(this.selectedField === "All Fields") tempData1.push(res)
          if(res.homeTeam === this.selectedField) tempData1.push(res)
        })

        //sort by Date
        tempData1.filter(res=>{
          if(this.selectedDate === "All Date") tempData2.push(res)
          if(res.date === this.selectedDate) tempData2.push(res)
        })

      tempData2.length === 0 ? tempData2 = witoutGame : tempData2

      this.tempResult.games = tempData2
      }
    },
    computed:{
      filterData(){
        return this.tempResult
      }

    }
}

</script>


<style scoped>

/* Header New */
#header-cont.container{
  padding:0;
  /* height: 50%; */
}

.header {
  position: sticky;
  overflow: hidden;
  top: 0;
  grid-row: 1/2;
}

.head-new{
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items:center;
  background-color: green;
  padding: 5%;
  /* height:100%; */
  width:100%;
  
  grid-auto-rows: auto;
}

.head{
  padding: 2%;
  height: 100%;
}

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


.disp-schedule{
  display: grid;
  /* grid-template-rows: repeat(10, 1fr);  */
}

/* New sort button CSS */

.selection-sort{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(100px, 1fr));
}

.selections{
 height: 3em;
 text-align: center;
}

select {
  width: 100%;
  padding-left: 5%;
}


#selection-list{
  padding: 0%;
  
  /* position: sticky; */
  /* margin: 0 auto;
  overflow: hidden; */
}

.card-container{
  overflow-y: scroll;
  /* grid-row: 2 / 10; */
}

.card-container.row{
  margin: 0;
}



.cont-sel{
  width: 100%;
 
}

#card-cont-id.container{
  padding: 0;
}




/* .selection-sort{
  display: flex;
  flex-direction: row;
  padding: 0%;
  
}

.selections{
  width: 100%;
  height: 3em;
}


#selection-list{
  padding: 0%;
} */


/* Sort Buttons CSS */

#sort-menu{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0%;
  height: 3em;
}

.nav-team-in:hover, .nav-date-in:hover, .nav-field-in:hover {
  background-color: gray;
}

.nav-team, .nav-date, .nav-field {
  flex: 1 100%;
  margin: 1px;
  background-color: lightgray;
  border-radius: 5px;
  border:1px ridge black;
}

.nav-team-in p, .nav-date-in p, .nav-field-in p{
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 130%;
}

.container.nav-sort{
  padding: 0;
  z-index: 1;
}
/* 
.container.container.nav-sort{
  overflow: hidden;
  position:sticky;
  top: 5%;
  width: 100%;
} */


.dropdown-content {
  display:none;
}

.nav-team:hover .dropdown-content, .nav-date:hover .dropdown-content, .nav-field:hover .dropdown-content{
  display: block;
  z-index: 1;
}

.dropdown-content ul {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  list-style-type: none;
  background-color: azure;
  margin: 0;
}

.dropdown-content ul:hover {
  background-color: #ddd;
  z-index: 1;
}







/* Card CSS */

.card{
		-moz-box-shadow: 0 0 10px #ccc;
		-webkit-box-shadow: 0 0 10px #ccc;
		box-shadow: 0 0 10px #ccc;
    z-index: -1
	}

.team-logo{
  width: 90%;
}

p, h3{
  text-align: center;
}

p, h3{
  font-size: 1em;
  font-weight: bold;
}

div.col-6.main.column{
  margin:auto;
}

.container.card:hover{
  background-color: aqua;
}


/* Map Css */

.map-cont{
  background-color: green;
  display: none;
  
}

.map-cont.active{
  display: block;
  
}

.map-loc{
  width: 100%;
  height: 160px;
}

p.loc{
  margin: auto;
  color: white;
  text-shadow: 2px 2px 8px #000000;
  padding: 5px;
  z-index: -1;
}

.row.map-cont{
  z-index: -1;
}







/* Loader  */

#loader .active {
  display:none;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid gray;
  border-bottom: 16px solid gray;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin: auto;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>
