<script setup>
import { ref } from 'vue'
const router = useRouter()
import { useAuth } from '../router/auth';
import { useRouter } from 'vue-router';

const defaultUsername = 'user'
const defaultPassword = '12345'

const {login} = useAuth()

const formData = ref({
  username: '',
  password: ''
  
})



const submitForm = async () => {
  validateName(true)
  validatePassword(true)

  console.log('Username:', formData.value.username)
  console.log('Password:', formData.value.password)
  console.log('Username Error:', errors.value.username)
  console.log('Password Error:', errors.value.password)
  console.log('Username Match:', formData.value.username === defaultUsername)
  console.log('Password Match:', formData.value.password === defaultPassword)

  if (
    formData.value.username.trim() === defaultUsername &&
    formData.value.password === defaultPassword
  ) {
    try {
      await login(formData.value.username, formData.value.password)
      alert("login success!")
      router.push({ name: 'About' })
    } catch (error) {
      console.error('Login failed:', error)
      alert("Login failed. Please try again.")
    }
  } else {
    console.log('Login failed')
    alert("Login failed. Please check your username and password.")
  }
}


const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
   
  }
}

const errors = ref({
  username: null,
  password: null,
  
})

const validateName = (blur) => {
  if (formData.value.username.trim().length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password.trim()
  const minLength = 5

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else {
    errors.value.password = null
  }
}


</script>

<template>
  <!-- 🗄️ W3. Library Registration Form -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Login</h1>
        
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6">
                    <label for="password" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        @blur="() => validatePassword(true)"
                        @input="() => validatePassword(false)"
                        v-model="formData.password"
                    />
                    <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                </div>

              </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>