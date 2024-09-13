<template>
    <div class="register-container">
      <h1>Create an Account</h1>
      <div class="input-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" placeholder="Enter your email">
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" placeholder="Enter your password">
      </div>
      <div class="button-group">
        <button class="submit-btn" @click="register">Save to Firebase</button>
        <button class="clear-btn" @click="clearForm">Clear</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  const email = ref("");
  const password = ref("");
  const router = useRouter();
  const auth = getAuth();
  
  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Firebase Register Successful!");
        router.push("/FireLogin");
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
  .register-container {
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