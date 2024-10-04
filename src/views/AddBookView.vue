<!-- <template>
    <div class="container">
      <h1 class="title">Book Management</h1>
  
      <!-- Add Book Form -->
      <!-- <form @submit.prevent="addBook" class="form">
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
  
      <!-- Book List -->
      <!-- <div v-for="book in books" :key="book.id" class="book-item">
        <span>{{ book.name }} (ISBN: {{ book.isbn }})</span>
        <button @click="updateBook(book)">Update</button>
        <button @click="deleteBook(book.id)">Delete</button>
      </div> -->
  
      <!-- Query Controls -->
      <!-- <div class="query-controls">
        <input v-model="queryIsbn" placeholder="Search by ISBN" />
        <select v-model="sortField">
          <option value="name">Sort by Name</option>
          <option value="isbn">Sort by ISBN</option>
        </select>
        <input v-model.number="limitCount" type="number" placeholder="Limit results" />
        <button @click="performQuery">Search</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
  import db from '../firebase/init.js';
  
  const isbn = ref('');
  const name = ref('');
  const books = ref([]);
  const queryIsbn = ref('');
  const sortField = ref('name');
  const limitCount = ref(10);
  
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
      fetchBooks();
    } catch (error) {
      console.error('Error adding book: ', error);
    }
  };
  
  const updateBook = async (book) => {
    const newName = prompt('Enter new name for the book:', book.name);
    if (newName) {
      try {
        await updateDoc(doc(db, 'books', book.id), { name: newName });
        alert('Book updated successfully!');
        fetchBooks();
      } catch (error) {
        console.error('Error updating book: ', error);
      }
    }
  };
  
  const deleteBook = async (bookId) => {
    if (confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteDoc(doc(db, 'books', bookId));
        alert('Book deleted successfully!');
        fetchBooks();
      } catch (error) {
        console.error('Error deleting book: ', error);
      }
    }
  };
  
  const fetchBooks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'books'));
      books.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };
  
  const performQuery = async () => {
    try {
      let q = collection(db, 'books');
  
      if (queryIsbn.value) {
        q = query(q, where('isbn', '==', Number(queryIsbn.value)));
      }
  
      q = query(q, orderBy(sortField.value));
  
      if (limitCount.value > 0) {
        q = query(q, limit(limitCount.value));
      }
  
      const querySnapshot = await getDocs(q);
      books.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error performing query: ', error);
    }
  };
  
  onMounted(fetchBooks);
  </script>  -->

  <template>
    <div class="container">
      <h1 class="title">Book Management</h1>
  
      <!-- Add Book Form -->
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
  
      <!-- Display added book -->
      <div v-if="addedBook" class="added-book">
        <h3>Added Book (Before Capitalization):</h3>
        <p>Name: {{ addedBook.name }}</p>
        <p>ISBN: {{ addedBook.isbn }}</p>
        <p>Check Firestore to see the capitalized version.</p>
      </div>
  
      <!-- Book List -->
      <div v-for="book in books" :key="book.id" class="book-item">
        <span>{{ book.name }} (ISBN: {{ book.isbn }})</span>
        <button @click="updateBook(book)">Update</button>
        <button @click="deleteBook(book.id)">Delete</button>
      </div>
  
      <!-- Query Controls -->
      <div class="query-controls">
        <input v-model="queryIsbn" placeholder="Search by ISBN" />
        <select v-model="sortField">
          <option value="name">Sort by Name</option>
          <option value="isbn">Sort by ISBN</option>
        </select>
        <input v-model.number="limitCount" type="number" placeholder="Limit results" />
        <button @click="performQuery">Search</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
  import db from '../firebase/init.js';
  
  const isbn = ref('');
  const name = ref('');
  const books = ref([]);
  const queryIsbn = ref('');
  const sortField = ref('name');
  const limitCount = ref(10);
  const addedBook = ref(null);
  
  const addBook = async () => {
    try {
      const isbnNumber = Number(isbn.value);
      if (isNaN(isbnNumber)) {
        alert('ISBN must be a valid number');
        return;
      }
      const newBook = {
        isbn: isbnNumber,
        name: name.value
      };
      await addDoc(collection(db, 'books'), newBook);
      addedBook.value = newBook; // Store the added book
      isbn.value = '';
      name.value = '';
      alert('Book added successfully! Check Firestore for the capitalized version.');
      fetchBooks();
    } catch (error) {
      console.error('Error adding book: ', error);
    }
  };
  
  
  
  const updateBook = async (book) => {
    const newName = prompt('Enter new name for the book:', book.name);
    if (newName) {
      try {
        await updateDoc(doc(db, 'books', book.id), { name: newName });
        alert('Book updated successfully!');
        fetchBooks();
      } catch (error) {
        console.error('Error updating book: ', error);
      }
    }
  };
  
  const deleteBook = async (bookId) => {
    if (confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteDoc(doc(db, 'books', bookId));
        alert('Book deleted successfully!');
        fetchBooks();
      } catch (error) {
        console.error('Error deleting book: ', error);
      }
    }
  };
  
  const fetchBooks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'books'));
      books.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };
  
  const performQuery = async () => {
    try {
      let q = collection(db, 'books');
  
      if (queryIsbn.value) {
        q = query(q, where('isbn', '==', Number(queryIsbn.value)));
      }
  
      q = query(q, orderBy(sortField.value));
  
      if (limitCount.value > 0) {
        q = query(q, limit(limitCount.value));
      }
  
      const querySnapshot = await getDocs(q);
      books.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error performing query: ', error);
    }
  };
  
  onMounted(fetchBooks);
  // ... rest of the code remains the same
  
  </script>

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