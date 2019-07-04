<template>
<div class="disp-schedule">
 <div class="header container">
    <!-- <div id="header-cont" class=""> -->
      <div class="head-new">
       <router-link to="/chat"><img class="img-head-1" src="../images/chat_logo.png"></router-link> 
        <h1 class="gametext">Game Schedule</h1>
        <img class="img-head-2" src="../images/nysl_logo.png">
      </div>
    <!-- </div> -->

    
  
    <div id="selection-list" class="">
      <div class="selection-sort">
        <select  class="selections"  v-model="selectedTeam" @change="sortData()">
          <option selected="selected" value="All Teams">All Teams</option>
          <option v-for="(team,index) in results.overView.teams" v-bind:value="team" :key="index">
            {{team}}
          </option>
        </select>


        <select class="selections" v-model="selectedDate" @change="sortData()" value="All Date">
          <option selected="selected" value="All Date">All Date</option>
          <option v-for="(game,index) in results.games" v-bind:value="game.date" :key="index">
            {{game.day}}, {{game.month}} {{game.dayNumber}}, {{game.time}}
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
      <div v-for="(game,index) in filterData.games" id="card-cont-id" class="container" :key='index'>  
        <div v-on:click="mapClass($event)" v-bind:id="'card-'+game.gameNum" class="card-wrap">
          <div class="container card">
            <div id="full-card" class="row">
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
import firebase from 'firebase';

export default {
    name: 'schedule', 
    // props: {
    //   results: {
    //     type: Object,
    //     required: true
    //   }
    // },
    // created() {console.log(firebase)},
    data(){
        return{
          // tempResult: {...this.results},
          selectedTeam:'All Teams',
          selectedDate:'All Date',
          selectedField:'All Fields',
          
          results:{
  "overView": {
      "teams": ["AJ Katzenmaier", "Greenbay", "Howard A Yeager", "Marjorie P Hart", "North", "South"],
      "dates": [
          "2019-06-22T09:30:00+0200",
          "2019-06-22T13:00:00+0200", 
          "2019-06-23T09:30:00+0200", 
          "2019-06-29T09:30:00+0200", 
          "2019-06-30T09:30:00+0200",  
          "2019-07-06T09:30:00+0200", 
          "2019-07-06T13:00:00+0200", 
          "2019-07-07T09:30:00+0200", 
          "2019-07-07T13:00:00+0200", 
          "2019-07-13T09:30:00+0200", 
          "2019-07-14T09:30:00+0200", 
          "2019-07-14T13:00:00+0200", 
          "2019-07-20T13:00:00+0200", 
          "2019-07-21T09:30:00+0200", 
          "2019-07-21T13:00:00+0200", 
          "2019-07-27T13:00:00+0200", 
          "2019-07-28T09:30:00+0200", 
          "2019-07-28T13:00:00+0200", 
          "2019-08-03T09:30:00+0200",             
          "2019-08-03T13:00:00+0200", 
          "2019-08-10T09:30:00+0200", 
          "2019-08-10T13:00:00+0200", 
          "2019-08-11T09:30:00+0200", 
          "2019-08-11T13:00:00+0200",             
          "2019-08-17T09:30:00+0200",
          "2019-08-17T13:00:00+0200", 
          "2019-08-18T09:30:00+0200", 
          "2019-08-18T13:00:00+0200", 
          "2019-08-24T09:30:00+0200", 
          "2019-08-25T09:30:00+0200" 
      ]
  },
  "teams": [ 
      {
      "teamName": "AJ Katzenmaier",
      "teamPlayers": ["Harrison Thomas", "Lewis Hart", "Alfie Russell", "Sebastian Ross", "Declan Burke", "Abram Guzman", "Oakley Bowers", "Drake Hardin","Adonis Norton", "Xavier Harris"],
      "teamGoals": [4, 3, 3, 1, 0, 1, 0, 0, 0, 0],
      "location": "24 W. Walton St., Chicago, IL 60610",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115728!2d-87.63124444878233!3d41.90029237911847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2snl!4v1557932229690!5m2!1sen!2snl",
      "wins": 3,
      "losses": 2,
      "draws": 1,
      "gamesPlayed": 6,
      "points": 10
  },
  {
      "teamName": "Greenbay",
      "teamPlayers": ["Tyler Stevens", "Brandon Davies", "Alexander Hart", "Frankie White", "Edward Cole", "Kolby Wright", "Ethan Galloway", "Quentin Hicks", "Aydin Wolf", "Caden Sanchez"],
      "teamGoals": [3, 3, 5, 2, 3, 0, 0, 0, 0, 0],
      "location": "1734 N. Orleans St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0258843688607!2d-87.64002798467415!3d41.91380227921929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561467908101!5m2!1sen!2snl",
      "wins": 3,
      "losses": 3,
      "draws": 1,
      "gamesPlayed": 7,
      "points": 10
  },
  {
      "teamName": "Howard A Yeager",
      "teamPlayers": ["Arthur Holland", "Patrick Burns", "Charles Clark", "Scott West", "Joel Thomson", "John Kim", "Giovanny Grant", "Dustin Hill", "Kendrick Mcdonald", "Justus Alston"],
      "teamGoals": [3, 3, 3, 3, 0, 0, 0, 0, 1, 0],
      "location": "2245 N. Southport Ave., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085616!2d-87.66511458467383!3d41.9232645792187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468042854!5m2!1sen!2snl",
      "wins": 4,
      "losses": 1,
      "draws": 1,
      "gamesPlayed": 6,
      "points": 13
  },
  {
      "teamName": "Marjorie P Hart",
      "teamPlayers": ["Bobby John", "Oliver Cunningham", "Joel Gray", "Oliver Watts", "Rory Robertson", "Alessandro Sloan", "Maxim O'brien", "Elliott Peters", "Gael Chaney", "Bradyn Francis"],
      "teamGoals": [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
      "location": "2625 N. Orchard St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658432!2d-87.64808628467361!3d41.92957827921814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468117275!5m2!1sen!2snl",
      "wins": 1,
      "losses": 2,
      "draws": 2,
      "gamesPlayed": 5,
      "points": 5
  },
  {
      "teamName": "North",
      "teamPlayers": ["Nathan Bell", "Daniel Young", "Stanley Knight", "Luca White", "Oliver Thompson", "Jayson Mccray", "Easton Meyers", "Jaeden Mullins", "Francisco O'neal", "Jonathon Floyd"],
      "teamGoals": [2, 1, 2, 0, 0, 0, 0, 0, 0, 0],
      "location": "N. Fremont St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9243907367836!2d-87.6530423846741!3d41.91598407921915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3188c084b73%3A0x492517dd97fe611e!2sN+Fremont+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468174927!5m2!1sen!2snl",
      "wins": 1,
      "losses": 3,
      "draws": 1,
      "gamesPlayed": 5,
      "points": 4
  },
  {
      "teamName": "South",
      "teamPlayers": ["Aaron Gallagher", "Cameron Woods", "Isaac Hughes", "Max Poole", "Scott Holmes", "Julian Pennington", "Bobby Stewart", "Wyatt Cole", "Ramiro Hines", "Kobe Wolfe"],
      "teamGoals": [1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
      "location": "1409 N. Ogden Ave., Chicago, IL 60610",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492124!2d-87.64837698467437!3d41.90709647921989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2snl!4v1561468237768!5m2!1sen!2snl",
      "wins": 1,
      "losses": 2,
      "draws": 2,
      "gamesPlayed": 5,
      "points": 5
  }],
  "games": [
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "Greenbay",
      "date": "2019-06-22T09:30:00+0200",
      "day": "Saturday",
      "dayNumber": 22,
      "month": "June",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 0,
      "homeGoals": 2,
      "homeScorers": [["Abram Guzman", 43], ["Lewis Hart", 46]],
      "homeTeam": "AJ Katzenmaier",
      "location": "24 W. Walton St., Chicago, IL 60610",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115728!2d-87.63124444878233!3d41.90029237911847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2snl!4v1557932229690!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 1,
      "awayScorers": [["Scott West", 43]],
      "awayTeam": "Howard A Yeager",
      "date": "2019-06-22T13:00:00+0200",
      "day": "Saturday",
      "dayNumber": 22,
      "month": "June",
      "year": "2019",
      "time": "13:00 PM",
      "gameNum": 1,
      "homeGoals": 1,
      "homeScorers": [["Tyler Stevens", 48]],
      "homeTeam": "Greenbay",
      "location": "1734 N. Orleans St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0258843688607!2d-87.64002798467415!3d41.91380227921929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561467908101!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "Marjorie P Hart",
      "date": "2019-06-23T09:30:00+0200",
      "day": "Sunday",
      "dayNumber": 23,
      "month": "June",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 2,
      "homeGoals": 1,
      "homeScorers": [["Charles Clark", 48]],
      "homeTeam": "Howard A Yeager",
      "location": "2245 N. Southport Ave., Chicago, IL 60614",
      "map":  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085616!2d-87.66511458467383!3d41.9232645792187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468042854!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "North",
      "date": "2019-06-29T09:30:00+0200",
      "day": "Saturday",
      "dayNumber": 29,
      "month": "June",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 3,
      "homeGoals": 2,
      "homeScorers": [["Oliver Watts", 40], ["Oliver Watts", 47]],
      "homeTeam": "Marjorie P Hart",
      "location": "2625 N. Orchard St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658432!2d-87.64808628467361!3d41.92957827921814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468117275!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "South",
      "date": "2019-06-30T09:30:00+0200",
      "day": "Sunday",
      "dayNumber": 30,
      "month": "June",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 4,
      "homeGoals": 0,
      "homeScorers": [],
      "homeTeam": "North",
      "location": "N. Fremont St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9243907367836!2d-87.6530423846741!3d41.91598407921915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3188c084b73%3A0x492517dd97fe611e!2sN+Fremont+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468174927!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 2,
      "awayScorers": [["Patrick Burns", 52], ["Arthur Holland", 68]],
      "awayTeam": "Howard A Yeager",
      "date": "2019-07-06T09:30:00+0200",
      "day": "Saturday",
      "dayNumber": "6",
      "month": "July",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 5,
      "homeGoals": 1,
      "homeScorers": [["Alfie Russell", 4]],
      "homeTeam": "AJ Katzenmaier",
      "location": "24 W. Walton St., Chicago, IL 60610",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115728!2d-87.63124444878233!3d41.90029237911847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2snl!4v1557932229690!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "Marjorie P Hart",
      "date": "2019-07-06T13:00:00+0200",
      "day": "Saturday",
      "dayNumber": 6,
      "month": "July",
      "year": "2019",
      "time": "13:00 PM",
      "gameNum": 6,
      "homeGoals": 1,
      "homeScorers": [["Brandon Davies", 77]],
      "homeTeam": "Greenbay",
      "location": "1734 N. Orleans St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115728!2d-87.63124444878233!3d41.90029237911847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2snl!4v1557932229690!5m2!1sen!2snl"   
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 5,
      "awayScorers": [["Nathan Bell", 29], ["Stanley Knight", 44], ["Stanley Knight", 48], ["Daniel Young", 48], ["Nathan Bell", 73]],
      "awayTeam": "North",
      "date": "2019-07-07T09:30:00+0200",
      "day": "Sunday",
      "dayNumber": 7,
      "month": "July",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 7,
      "homeGoals": 1,
      "homeScorers": [["Scott West", 56]],
      "homeTeam": "Howard A Yeager",
      "location": "2245 N. Southport Ave., Chicago, IL 60614",
      "map":  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085616!2d-87.66511458467383!3d41.9232645792187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468042854!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "South",
      "date": "2019-07-07T13:00:00+0200",
      "day": "Sunday",
      "dayNumber": 7,
      "month": "July",
      "year": "2019",
      "time": "13:00 PM",
      "gameNum": 8,
      "homeGoals": 0,
      "homeScorers": [],
      "homeTeam": "Marjorie P Hart",
      "location": "2625 N. Orchard St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658432!2d-87.64808628467361!3d41.92957827921814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468117275!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "Marjorie P Hart",
      "date": "2019-07-13T09:30:00+0200",
      "day": "Saturday",
      "dayNumber": 13,
      "month": "July",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 9,
      "homeGoals": 0,
      "homeScorers": [],
      "homeTeam": "AJ Katzenmaier",
      "location": "24 W. Walton St., Chicago, IL 60610",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115728!2d-87.63124444878233!3d41.90029237911847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2snl!4v1557932229690!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "North",
      "date": "2019-07-14T09:30:00+0200",
      "day": "Sunday",
      "dayNumber": 14,
      "month": "July",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 10,
      "homeGoals": 3,
      "homeScorers": [["Frankie White", 1], ["Edward Cole", 65], ["Alexander Hart", 71]],
      "homeTeam": "Greenbay",
      "location": "1734 N. Orleans St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0258843688607!2d-87.64002798467415!3d41.91380227921929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561467908101!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "South",
      "date": "2019-07-14T13:00:00+0200",
      "day": "Sunday",
      "dayNumber": 14,
      "month": "July",
      "year": "2019",
      "time": "13:00 PM",
      "gameNum": 11,
      "homeGoals": 3,
      "homeScorers": [["Charles Clark", 3], ["Patrick Burns", 18], ["Charles Clark", 86]],
      "homeTeam": "Howard A Yeager",
      "location": "2245 N. Southport Ave., Chicago, IL 60614",
      "map":  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085616!2d-87.66511458467383!3d41.9232645792187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468042854!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 0,
      "awayScorers": [],
      "awayTeam": "North",
      "date": "2019-07-20T13:00:00+0200",
      "day": "Saturday",
      "dayNumber": 20,
      "month": "July",
      "year": "2019",
      "time": "13:00 PM",
      "gameNum": 12,
      "homeGoals": 3,
      "homeScorers": [["Lewis Hart", 12], ["Alfie Russell", 14], ["Harrison Thomas", 33]],
      "homeTeam": "AJ Katzenmaier",
      "location": "24 W. Walton St., Chicago, IL 60610",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115728!2d-87.63124444878233!3d41.90029237911847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2snl!4v1557932229690!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 2,
      "awayScorers": [["Aaron Gallagher", 45], ["Bobby Stewart", 77]],
      "awayTeam": "South",
      "date": "2019-07-21T09:30:00+0200",
      "day": "Sunday",
      "dayNumber": 21,
      "month": "July",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 13,
      "homeGoals": 1,
      "homeScorers": [["Alexander Hart", 46]],
      "homeTeam": "Greenbay",
      "location": "1734 N. Orleans St., Chicago, IL 60614",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0258843688607!2d-87.64002798467415!3d41.91380227921929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561467908101!5m2!1sen!2snl"            
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 1,
      "awayScorers": [["Scott Holmes", 28]],
      "awayTeam": "South",
      "date": "2019-07-21T13:00:00+0200",
      "day": "Sunday",
      "dayNumber": 21,
      "month": "July",
      "year": "2019",
      "time": "13:00 PM",
      "gameNum": 14,
      "homeGoals": 3,
      "homeScorers": [["Lewis Hart", 19], ["Harrison Thomas", 26], ["Harrison Thomas", 63]],
      "homeTeam": "AJ Katzenmaier",
      "location": "24 W. Walton St., Chicago, IL 60610",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115728!2d-87.63124444878233!3d41.90029237911847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2snl!4v1557932229690!5m2!1sen!2snl"            
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 3,
      "awayScorers": [["Alfie Russell", 30], ["Harrison Thomas", 38], ["Sebastian Ross", 49]],
      "awayTeam": "AJ Katzenmaier",
      "date": "2019-07-27T13:00:00+0200",
      "day": "Saturday",
      "dayNumber": 27,
      "month": "July",
      "year": "2019",
      "time": "13:00 PM",
      "gameNum": 15,
      "homeGoals": 9,
      "homeScorers": [["Brandon Davies", 3], ["Tyler Stevens", 16], ["Alexander Hart", 22], ["Tyler Stevens", 35], ["Alexander Hart", 38], ["Alexander Hart", 45], ["Edward Cole", 47], ["Edward Cole", 68], ["Frankie White", 78]],
      "homeTeam": "Greenbay",
      "location": "1734 N. Orleans St., Chicago, IL 60614",
      "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0258843688607!2d-87.64002798467415!3d41.91380227921929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561467908101!5m2!1sen!2snl"
      },
      {
      "alreadyPlayed": true,
      "awayGoals": 1,
      "awayScorers": [["Brandon Davies", 55]],
      "awayTeam": "Greenbay",
      "date": "2019- 07-28T09:30:00+0200",
      "day": "Sunday",
      "dayNumber": 28,
      "month": "July",
      "year": "2019",
      "time": "09:30 AM",
      "gameNum": 16,
      "homeGoals": 5,
      "homeScorers": [["Kendrick Mcdonald", 25], ["Arthur Holland", 42], ["Arthur Holland", 56], ["Patrick Burns", 74], ["Scott West", 85]],
      "homeTeam": "Howard A Yeager",
      "location": "2245 N. Southport Ave., Chicago, IL 60614",
      "map":  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085616!2d-87.66511458467383!3d41.9232645792187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2snl!4v1561468042854!5m2!1sen!2snl"    
      }
  ]
} , tempResult: {...this.results}
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
        console.log(this.tempResult)
        return this.tempResult
      }

    }
}

</script>


<style scoped>


/* New Css header */

.header {
  display: grid;
  grid-template-rows: 70% 30%;
  height: 100%;
  position: sticky;
  /* overflow: hidden; */
  top: 0;
  /* grid-row: 1/2; */
  z-index: 1;
}

div.header.container{
  padding:0%;
}

.disp-schedule{
  display: grid;
  grid-template-rows: 20% 80%;
  height: 100vh;
  grid-gap: 10px;
}


#header-cont{
  padding:0;
  height: 100%;
}

.head-new {
  padding: 1%;
  background-color: green;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(10px,auto);
  grid-gap: 10px;
  width: 100%;
  margin: 0;
  align-items: center;
  justify-items: center;
  height: 100%;
}

.img-head-1{
  grid-column: 1/2;
  width:60%;
}

.gametext{
  grid-column:2/6;
  color: white;
  text-shadow: 2px 2px 8px #000000;
  width: 100%;
  text-align: center;
  font-size: auto;
}

.img-head-2{
  grid-column: 6/7;
   width: 60%;
}


/* New sort button CSS */

.selection-sort{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(100px, 1fr));
  background-color: white;
}

.selections{
 text-align: center;
 background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+) no-repeat 95% 50%;
 -moz-appearance: none; 
 -webkit-appearance: none; 
 appearance: none;
 background-color:white;
}

select {
  width: 100%;
  padding-left: 5%;
}


#selection-list{
  padding: 0%;
  height: 100%;
}

.card-container{
  overflow-y: scroll;
  display: grid;
  grid-gap: 10px; 
  padding: 0% 5% ;
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
  font-size: 100%;
}

.container.nav-sort{
  padding: 0;
  z-index: 1;
}


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
  font-size: 130%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}

div.col-6.main.column{
  margin:auto;
}

.container.card:hover{
  background-color: aqua;
}

#full-card{
  height: minmax(300px,auto);
  padding: 5%;
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
  overflow-y:scroll;
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


/* Media Queries */


@media screen and (orientation:landscape) 
and (max-device-width: 850px) {
  
  .header{
    height: 100%;
    padding: 0 10% 0;
    margin: auto;

  }

  .img-head-1, .img-head-2 {
    width: 60%;
  }

  h1.gametext{
  font-size: auto;
}


  
  .card-container{
    /* height: 80vh; */
  }

  .card-container.container{
    /* height: 80vh; */
  }

  p, h3{
  font-size: 80%;
}

}



@media screen and (min-device-width: 180px) and (max-device-width: 450px) {

  .img-head-1, .img-head-2{
    width: 100%
  }

    p, h3{
  font-size: 60%;
}

.time.row hr {
  width: 10%;
}

}




/* reset */




</style>
