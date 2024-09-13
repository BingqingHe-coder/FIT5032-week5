<template>
    <div>
      <h2>Logout Page</h2>
      <p v-if="currentUser">Current User: {{ currentUser.email }}</p>
      <p v-else>No user is currently logged in.</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  const auth = getAuth();
  const router = useRouter();
  const currentUser = ref(null);
  
  onMounted(() => {
    currentUser.value = auth.currentUser;
    console.log('Current User:', currentUser.value);
  });
  
  const logout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
      currentUser.value = null;
      router.push('/login'); 
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  </script>