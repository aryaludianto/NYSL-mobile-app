<template>
  <div class="body-wrap">
    
    <div class="header container">
      <div class="head-new">
       <router-link class="routr" to="/"> <img class="img-head-1" src="../images/schedule2icon.png"> </router-link> 
        <h1 class="gametext">NYSL Chat</h1>
        <img class="img-head-2" src="../images/nysl_logo.png">
      </div>
      <div class="head-text">
        <h3>Welcome to NYSL Chat</h3>
      </div>
    </div>

    <div class="body-chat container">
      <div class="chat">
        <div id="advice" class="advice">
          You must to be logged
          <button id="login" class="button is-info" @click="login()">Login!</button>      
        </div> 
        <div id="posts" class="box" @scroll="scrollFunc">
          <p id="load-notif"> Loading posts... </p>
          <button id="bott-scroll" class="container" @click="scrollBottChat()">&#8630;</button>
          <div v-for="(key ,index) in displayChat" id="card-messages" :key='index' :class='{myMessage : currentUser == key.name, "cont-messages" : currentUser != key.name}'>
            <p id="name-user">{{key.name}} : </p>
            <p id="message-user">{{key.body}}</p>
            <p id="time-stamp"> created: {{key.timeStamp}}</p>
          </div>
        </div>  
      </div>
    </div>
   
      <div class="inputs container">
        <form @submit.prevent="writeNewPost()" class="form-message" id="frm-mssg">
          <input id="textInput" class="input" type="text" placeholder="Your message..." v-model="newMessage">
          <button id="create-post" class="button is-primary" >Send</button>
        </form>
      </div>
    

  </div>
</template>

<script>
import firebase, { messaging } from 'firebase';

export default {
  data(){
    return{
      name:null,
      time:null,
      newMessage:null,
      dispMessages:{},
      currentUser: '',
      scrollPos:0
    }
  },
  mounted() {
    this.isLoggedIn();
  },
    methods: {
      login() {
        // Provider
        var provider = new firebase.auth.GoogleAuthProvider();
        // How to Log In
        firebase.auth().signInWithPopup(provider);
        // console.log("login");
      },
      writeNewPost() {
        if(document.getElementById("textInput").value===''){
          return
        } 

        // Values
         var text = this.newMessage
         var userName = firebase.auth().currentUser.displayName;
         // A post entry
         var post = {
             name: userName,
             body: text,
             timeStamp: new Date()
         };
         // Get a key for a new Post.
         var newPostKey = firebase.database().ref().child('main-chat').push().key;
         //Write data
         var updates = {};
         updates[newPostKey] = post;
         firebase.database().ref('main-chat').update(updates)

        //clearing newMessage data and input
         this.newMessage = null;
      
         return this.getPosts();
      },
      getUser(){
        console.log(firebase.auth().currentUser)
      },
      getPosts() {
        let that = this;
        var messages;
        firebase.database().ref('main-chat').on('value', function (data) {
          messages = data.val();
          document.getElementById("load-notif").innerHTML="";
          that.dispMessages = messages;  
          that.scrollBottChat();    
          })
       },
       isLoggedIn() {
        const that = this;        
         firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            // User is signed in.
            document.getElementById("posts").classList.add("active")
            document.getElementById("advice").classList.add("active")
            document.getElementById("frm-mssg").classList.add("active")
            that.currentUser = firebase.auth().currentUser.displayName;
            that.getPosts();
            
          } else {
            // No user is signed in.
            document.getElementById("posts").classList.remove("active")
            document.getElementById("advice").classList.remove("active")
            that.currentUser = '';
          }
          
          })
       },
       scrollBottChat(){
          var chatEl = document.getElementById("posts");
          chatEl.scrollTop = chatEl.scrollHeight;   
       },
       scrollFunc(){
        if (document.getElementById("bott-scroll").classList != "active"){
            document.getElementById("bott-scroll").classList.add("active")
       
         setTimeout(function(){ document.getElementById("bott-scroll").classList.remove("active"); }, 5000);
        }
       
        }   

    },
    computed:{
      displayChat(){
        let chatMessages = {...this.dispMessages}
        
        return chatMessages;
      }

    }
}

</script>

<style scoped>

/* Body wrap */
.body-wrap{
  display: grid;
  grid-template-rows: 15% 80% 5% ;
  height: 90vh;
  grid-auto-columns: 100vw;
  /* grid-gap: 10px; */
}

/* header */
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
  /* background-color: green; */
}

.header.container h3{
    content: "Welcome to NYSL CHAT";
    font-size: 150%;
    font-family: Verdana;
    margin-bottom: 5%;
    text-align: center;
    text-shadow: 2px 2px 8px gray;
    
}

#load-notif{
  grid-column: 6/15;
  grid-row: 5;
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

.routr{
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

.img-head-1{
  grid-column: 1/2;
  /* width:40%; */

  height:100%;
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
   /* width: 40%; */
   height:100%;
}

.head-text{
  border:1px solid black;
  background-color: gray;
  height: 100%;
}

.head-text h3 {
  color: white;
  text-shadow: 2px 2px 8px #000000;
  width: 100%;
  margin: auto;
}


/* chat css */

#card-messages.cont-messages {
  grid-column: 2/15;
	position: relative;
	background:lightgoldenrodyellow;
	border-radius: .4em;
  /* border: 1px solid black; */
  padding: 5px;
  margin: 5px;
}


#card-messages.cont-messages:after {
  /* grid-column: 1/2; */
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 24px solid transparent;
	border-right-color: lightgoldenrodyellow;
	border-left: 0;
	border-bottom: 0;
	margin-top: -5.5px;
	margin-left: -11px;
}

#card-messages.myMessage {
  position: relative;
	border-radius: .4em;
    grid-column: 7/20;
    /* border: 1px solid black; */
    padding: 5px;
    margin: 5px;
    background-color: rgb(210, 250, 220);
    border-radius: 10px;
    opacity: 0.8;
    font-family: Verdana, Geneva, Tahoma, sans-serif; 
}


#card-messages.myMessage:before {
  grid-column: 19/21;
	content: '';
	position: absolute;
	right: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 20px solid transparent;
	border-left-color:rgb(210, 250, 220);
	border-right: 0;
	border-bottom: 0;
	margin-top: -10px;
	margin-right: -20px;
}

#posts{
    height: 100%;
    width: 100%;
    overflow: scroll;
    margin-bottom: 10px;
    display: none;
    flex-direction: column;
}

#posts.active{
  display: grid;
  grid-template-columns: repeat(20,1fr);
  margin: 0 10% 10% 0;
  width: 100%;
}

.advice{
    height: 100%;
    width: 100%;
    overflow: scroll;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
    color: white;
    opacity: .7;
    border-radius: 10px;
}

.advice.active{
  display: none;
}

.chat{
    height: 100%;
}

.body-chat{
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 0;
}


#time-stamp{
  font-size: 50%;
  font-style: italic;
  margin-bottom: 0;
}

#bott-scroll {
  display: none;
  position: fixed;
  right: 11.5%;
  bottom: 30%;
  z-index: 99;
  font-size: 100%;
  border: 1px solid black;
  outline: none;
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 1em;
  border-radius: 4px;
  width: 10%;
  height: 5%; 
}

#bott-scroll.active{
  display:block;
}


#name-user{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bolder;
  margin-left: 5%;
  margin-bottom: 0;
}

#message-user{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left: 10%;
  margin-bottom: 1%;
}

.form-message{
  display:none;
}

.form-message.active{
  display:flex;
  position: sticky;
}

.inputs{
    display: grid;
    grid-auto-columns: 90% 10%;
    justify-content: center;
    border-top: 1px solid gray;
    border-right: 1px solid gray;
    border-left: 1px solid gray;
    height: 100%;
    width: 100%;
    padding: 0;
}

#textInput{
  width: 100%;
}

input{
    margin-right: 15px;
}


.name{
    font-size: 12px;
    font-weight: bold;
    color: lightyellow;
}

/* Footer */

.foot{
  display: grid;
  text-align: center;
  align-items: center;
}


@media screen and (orientation:landscape) 
and (max-device-width: 850px) {
  
  .body.chat{
     justify-content: center;
    align-items: center;
    justify-items: center;
  }

  .body-chat.container{
    padding: 0;

  }

  .head-text{
    height: 150%;
  }

  .chat{
      height: 230px;
      width: 80%;
  }

  .inputs{
    margin: 0 10% 0;
}

.body-wrap{
  display: grid;
  grid-template-rows: 20% 75% 10% ;
  height: 90vh;
}
.chat{
  height: 100%;
  width: 100%;
}

div.body-chat{
  margin: auto;
}

div.inputs.container{
  padding: 0;
  margin: auto;
}

div#posts.box.active{
  border: 1px solid black;
  height: 100%;
  width: 100%;
}

#bott-scroll {
  right: 9.5%;
}


}




@media screen and (min-device-width: 180px) and (max-device-width: 450px) {

  .header.container h3{
    font-size: 110%;
}

  .img-head-1, .img-head-2{
    width: 100%
  }

.img-head-1{
  grid-column: 1/2;
  height: auto;
}

.gametext{
  grid-column:2/6;
  
}

.img-head-2{
  grid-column: 6/7;
  height: auto;
}




.time.row hr {
  width: 10%;
}

#posts {
  margin: 0;
  
}

div.inputs.container{
  padding: 0;
}

#bott-scroll {
  right: 0%;
}

}



</style>
