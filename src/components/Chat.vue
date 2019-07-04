<template>
<div class="body-wrap">
  <div class="header container">
    <div class="head-new">
     <img class="img-head-1" src="../images/chat_logo.png">
      <h1 class="gametext">NYSL Chat</h1>
      <img class="img-head-2" src="../images/nysl_logo.png">
    </div>
  </div>
  <div class="body-chat">
    <div class="chat">
       <div id="advice" class="advice">
        You must to be logged
        <button id="login" class="button is-info" @click="login()">Login!</button>      
      </div> 
      <div id="posts" class="box">
       <p id="load-notif"> Loading posts... </p>
       <div class="cont-messages"  v-for="(key ,index) in displayChat" id="card-messages" :key='index' :class='{me : currentUser == key.name}'>
        <p>{{key.name}} says:</p>
        <p>{{key.body}}</p>
       </div>

      </div>
      
      <div class="inputs">
        <form @submit.prevent="writeNewPost()">
        <input id="textInput" class="input" type="text" placeholder="Your message..." v-model="newMessage">
        <button id="create-post" class="button is-primary" >Send</button>
        </form>
      </div>
      <button @click="getUser">get user</button>
      <button @click="getPosts">get Post</button>
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
  // name: Chat,
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
    //  console.log(firebase)
    this.isLoggedIn();
    // this.getPosts()
    //  var messages;
    //        firebase.database().ref('main-chat').on('value', function (data) {
    //            messages = data.val();
    //            console.log(messages)
    //        })
    //       this.dispMessages = messages;
    //       document.getElementById("load-notif").innerHTML="";
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
       
        console.log(this.newMessage)

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
               that.dispMessages = messages;        })
          //  console.log("getting posts");
          // this.dispMessages = messages;
         
          // return console.log(this.dispMessages);
       },
       isLoggedIn() {
        const that = this;
        let chatMessages = {...this.dispMessages}
         
         firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            // User is signed in.
            document.getElementById("posts").classList.add("active")
            document.getElementById("advice").classList.add("active")
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
        const that = this;
        let chatMessages = {...this.dispMessages}
         
        //  firebase.auth().onAuthStateChanged(function (user) {
        //   if (user) {
        //     // User is signed in.
        //     document.getElementById("posts").classList.add("active")
        //     document.getElementById("advice").classList.add("active")
        //     // that.getPosts();

        //   } else {
        //     // No user is signed in.
        //     document.getElementById("posts").classList.remove("active")
        //     document.getElementById("advice").classList.remove("active")
        //   }
        //   })
         

        // console.log(this.dispMessages)
        
      //  Object.keys(this.dispMessages).forEach(item => {
      //    console.log(item[name])
      //     // if(item.name == firebase.auth().currentUser.displayName){
      //     //   item.user= "main";
      //     // } else {
      //     //   item.user = "second";
      //     // }
      //   });
      console.log(chatMessages)

        return chatMessages;
      }

    }
}

</script>

<style scoped>

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

.body-wrap{
  display: grid;
  grid-template-rows: 15% 80% 10%;
  height: 100vh;
  /* grid-gap: 10px; */
}

.foot{
  text-align: center;
}
.me {
  background: grey;
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







/* chat css */
.message {
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

#posts{
    height: 400px;
    width: 400px;
    overflow: scroll;
    margin-bottom: 20px;
    display: none;
    flex-direction: column;
}

#posts.active{
  display: flex;
}


.advice{
    height: 400px;
    width: 400px;
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
    height: 400px;
}

.body-chat{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
}

.body-chat:before{
    content: "Welcome to NYSL CHAT";
    font-size: 30px;
    font-family: Verdana;
    margin-bottom: 30px;
}

.body-chat:after{
    content: "Write your post and click 'Send'";
    margin-top: 70px;
    font-size: 14px;
    color: grey;
}

.inputs{
    display: flex;
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


</style>
