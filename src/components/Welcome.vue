<template>
  <div class="welcome cotainer">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterchat">
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model="name">
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  // name: Welcome,
  data(){
    return{
      name:null
    }
  },
  created() {
    console.log(firebase)
  },
    methods: {
      enterChat(){
        console.log(this.name)
      }
    }
}
</script>

<style>
.welcome{
  max-width:400px;
  margin-top:100px;
}

.welcome h2 {
  font-size: 3em;
}

.welcome button{
  margin:30px auto;
}


</style>
