<template>
    <div>
        <hi>Books with ISBN > 1000</hi>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js'
import { collection, query, where, getDocs } from 'firebase/firestore';

const books = ref([]);

const fetchBooks = async () => {
    try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        books.value = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error fetching books: ', error);
    }
};

onMounted(fetchBooks);
</script>

