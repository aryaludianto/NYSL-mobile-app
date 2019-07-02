<template>
  <div id="app">
    <app-schedule v-bind:results="results" ></app-schedule>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import header from './components/header.vue'
// import footer from './components/footer.vue'
import schedule from './components/schedule.vue'

export default {
  name: 'app',
  components: {
    'app-schedule': schedule,
  }, data (){
    return{ results:{
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
}
  }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px 0px 0px;
  /* display: grid;
  grid-template-rows: 25vh 70vh; */
}

/* .app-header {
  grid-row: 1/2;
}

.app-schedule {
  grid-row: 2/3;
} */

/* .app-footer {
  grid-row: 3/4;
} */



</style>
