<template>
    <div class="text-center">
      <h1>GetAllBookAPI</h1>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <pre v-else>{{ booksJson }}</pre>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        books: null,
        booksJson: '',
        error: null,
        loading: true,
      };
    },
    mounted() {
      this.getAllBooksAPI();
    },
    methods: {
      async getAllBooksAPI() {
        try {
          this.loading = true;
          console.log('Starting to fetch book data');
          const response = await axios.get('https://getallbooks-mtwzbj2ofq-uc.a.run.app');
          console.log('API response:', response);
          
          let booksData = response.data;
          
          // Check the structure of the response data
          if (Array.isArray(booksData)) {
            this.books = booksData;
          } else if (typeof booksData === 'object' && booksData !== null) {
            // If the response is an object, try to find the property containing the book data
            const possibleArrays = Object.values(booksData).filter(Array.isArray);
            if (possibleArrays.length > 0) {
              this.books = possibleArrays[0];
            } else {
              throw new Error('No book array found in API response');
            }
          } else {
            throw new Error('Unrecognized API response format');
          }
  
          this.booksJson = JSON.stringify(this.books, null, 2);
          console.log('Successfully fetched book data:', this.books);
          this.error = null;
        } catch (error) {
          console.error('Error fetching all books:', error);
          this.error = error.message || 'An error occurred while fetching books';
          this.books = null;
          this.booksJson = '';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>