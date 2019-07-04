<template>
  <div class="body-wrap">
    
    <div class="header container">
      <div class="head-new">
       <img class="img-head-1" src="../images/chat_logo.png">
        <h1 class="gametext">NYSL Chat</h1>
        <img class="img-head-2" src="../images/nysl_logo.png">
      </div>
      <h3>Welcome to NYSL Chat</h3>
    </div>

    <div class="body-chat">
      <div class="chat">
        <div id="advice" class="advice">
          You must to be logged
          <button id="login" class="button is-info" @click="login()">Login!</button>      
        </div> 
        <div id="posts" class="box">
          <p id="load-notif"> Loading posts... </p>
          <div class="cont-messages"  v-for="(key ,index) in displayChat" id="card-messages" :key='index' :class='{myMessage : currentUser == key.name}'>
            <p>{{key.name}} says: </p>
            <p>{{key.body}}</p>
          </div>
        </div>  
        <div class="inputs">
          <form @submit.prevent="writeNewPost()" class="form-message" id="frm-mssg">
            <input id="textInput" class="input" type="text" placeholder="Your message..." v-model="newMessage">
            <button id="create-post" class="button is-primary" >Send</button>
          </form>
          <h3></h3>
        </div>
      </div>
    </div>


    <div class="foot">
      <router-link to="/schedule"> <h3> Back to Schedule </h3> </router-link> 
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
      currentUser: ''
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
        console.log("login");
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
             body: text
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
  grid-template-rows: 15% 75% 10% ;
  height: 100vh;
  grid-auto-columns: 100vw;
  /* grid-gap: 10px; */
}

/* header */
.header {
  display: grid;
  grid-template-rows: 80% 20%;
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
    font-size: 100%;
    font-family: Verdana;
    margin-bottom: 5%;
    text-align: center;
    text-shadow: 2px 2px 8px gray;
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


/* chat css */
.cont-messages {
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    background-color: lightgoldenrodyellow;
    border-radius: 10px;
    opacity: 0.8;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.myMessage {
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    background-color: rgb(210, 250, 220);
    border-radius: 10px;
    opacity: 0.8;
    font-family: Verdana, Geneva, Tahoma, sans-serif; 
}

.me {
  background: grey;
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
  display: flex;
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
    height: 450px;
}

.body-chat{
    height: 100%;
    width: 100%;
    /* display: grid; */
    /* grid-column:repeat(3,1fr); */
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    justify-items: center;
}

.inputs h3{
    content: "Write your post and click 'Send'";
    margin-top: 5%;
    font-size: 100%;
    color: grey;
}

.form-message{
  display:none;
}

.form-message.active{
  display:flex;
}

.inputs{
    display: grid;
    grid-auto-columns: 90% 10%;
    justify-content: center;
}

#textInput{
  width: 100%;
}

input{
    margin-right: 15px;
}

.notification:not(:last-child){
    margin-bottom: .3rem;
}

.notification.is-info{
    text-align: right;
    max-width: 80%;
    align-self: flex-end;
    border-radius: 20px;
}

.notification.is-primary{
    text-align: left;
    max-width: 80%;
    align-self: flex-start;
    border-radius: 20px;    
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
  background-color: green;
  align-items: center;
  text-shadow: 2px 2px 8px #000000;
}

.foot h3 {
  color: white;
  margin: auto;
}


@media screen and (orientation:landscape) 
and (max-device-width: 850px) {
  

  .body.chat{
     justify-content: center;
    align-items: center;
    justify-items: center;

  }

  .chat{
      height: 230px;
      width: 80%;
  }

}







@media screen and (min-device-width: 180px) and (max-device-width: 450px) {

  .img-head-1, .img-head-2{
    width: 100%
  }
    /* p, h3{
  font-size: 60%;
} */

.time.row hr {
  width: 10%;
}

}



</style>
