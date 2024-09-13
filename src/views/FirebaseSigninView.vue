<template>
    <div class="login-container">
      <h1>Login</h1>
      <div class="input-group">
        <label for="email">Email</label>
        <input id="email" type="text" v-model="email" placeholder="Enter your email">
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" placeholder="Enter your password">
      </div>
      <div class="button-group">
        <button class="submit-btn" @click="signin">Submit</button>
        <button class="clear-btn" @click="clearForm">Clear</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  const email = ref("");
  const password = ref("");
  const router = useRouter();
  const auth = getAuth();
  
  const signin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log("Login Successful!");
        router.push("/");
        console.log(auth.currentUser);
      }).catch((error) => {
        console.log(error.code);
      });
  };
  
  const clearForm = () => {
    email.value = "";
    password.value = "";
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
    
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button-group {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-btn {
    background-color: #4285f4;
    color: white;
  }
  
  .clear-btn {
    background-color: #9e9e9e;
    color: white;
  }
  </style>