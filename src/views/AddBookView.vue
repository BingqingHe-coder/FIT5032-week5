<template>
    <div class="container">
      <h1 class="title">
        Add Book to Library
      </h1>
     
      <form @submit.prevent="addBook" class="form">
        <div class="form-group">
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required class="input-field" />
        </div>
        <div class="form-group">
          <label for="name">Book Name:</label>
          <input type="text" v-model="name" id="name" required class="input-field" />
        </div>
        <button type="submit" class="submit-button">Add Book</button>
      </form>
      <BookList />
    </div>
  </template>
  

  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .icon {
    margin-right: 10px;
  }
  
  .description {
    margin-bottom: 20px;
    color: #666;
  }
  
  .form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .input-field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .submit-button {
    background-color: #4285f4;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #3367d6;
  }
  </style>

<script setup>
import { ref } from 'vue';
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore';
import BookList from '../components/BookList.vue';

const isbn = ref('');
const name = ref('');

const addBook = async () => {
    try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
            alert('ISBN must be a valid number');
            return;
        }
        await addDoc(collection(db, 'books'), {
            isbn: isbnNumber,
            name: name.value
        });
        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
    } catch (error) {
        console.error('Error adding book: ', error);
    }
};
</script>