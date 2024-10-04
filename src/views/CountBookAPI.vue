<template>
    
    <div class="text-center">
    <pre>{{ count }}</pre>
</div>
  </template>
  
  <script>
  import axios from 'axios';
import { count } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        count: null,
        error: null,
      };
    },
    mounted() {
        this.getBookCountAPI();
    },
    methods: {
      async getBookCountAPI() {
        try {
          const response = await axios.get('https://countbooks-mtwzbj2ofq-uc.a.run.app');
          this.count = response.data;
          this.error = null;
        } catch (error) {
          console.error('Error fetching book count:', error);
          this.error = error;
          this.count = null;
        }
      },
    },
  };
  </script>