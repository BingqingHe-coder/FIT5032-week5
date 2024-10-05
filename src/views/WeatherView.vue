<!-- <template> -->
    <!-- <div class="container">
      <div class="header">
        <h1 class="text-center">WEATHER APP</h1>
        <div class="text-center">
          <input
            type="text"
            v-model="city"
            placeholder="Enter city name"
            class="search-input"
            @keyup.enter="searchByCity"
          />
          <button @click="searchByCity" class="search-button">Search</button>
        </div>
    </div>
    </div> -->
    <!-- <div class="container">
    <div class="header">
      <h1 class="text-center">WEATHER APP</h1>
      <form @submit.prevent="searchByCity" class="text-center">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
          id="citySearch"
          name="citySearch"
          autocomplete="off"
        />
        <button type="submit" class="search-button">Search</button>
      </form>
    </div>
  </div> -->
  
      <!--The <main> tag in HTML is used to specify the main content of a document
More info about main, check https://www.w3schools.com/tags/tag_main.asp-->
<!-- <main> -->
  <!--If there are no data returned, then skip rendering the information-->
  <!-- <div v-if="weatherData">
    <!--Display the weather data attribute returned from API
    Example of API data: https://openweathermap.org/current-->
    <!-- <h2 class="text-center">
      {{ weatherData.name }}, {{ weatherData.sys.country }}
    </h2>
    <div class="text-center">
      <!--The image source of of the weather icon will be coming from a function called iconUrl
      which will be shared in script later-->
      <!-- <img :src="iconUrl" alt="Weather Icon" />
      <p>{{ temperature }} °C</p>
    </div> --> --> -->
    <!-- weather[0] means the current weather, the way we need to obtain data depends on how
    the API JSON data looks-->
    <!-- <div class="text-center">
    <span >{{ weatherData.weather[0].description }}</span>
</div>
  </div>
</main>
  </template> -->


<!-- <script> -->
// The info section in 10.1.1 provided detailed information about this package
<!-- import axios from "axios";
import {ref} from 'vue';
const city = ref('');
const weatherData = ref(''); -->

<!-- const apikey = "fe1e098bd3a0d210cbd624269dfdb236"; -->

// const searchByCity =() => {
//     try {
//         const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct?q=Clayton,%20AU&appid=fe1e098bd3a0d210cbd624269dfdb236');
//         //Returned data from API is stored as JSON file in weatherData
//         this.weatherData = response.data;
//         iconUrl() 
//       return this.weatherData
//         ? `http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
//         : null;
    
//         temperature() 
//       return this.weatherData
//         ? Math.floor(this.weatherData.main.temp - 273)
//         : null;
    

//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//       }
// }

<!-- const searchByCity = async (city) => {
  try {
    const geoResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=fe1e098bd3a0d210cbd624269dfdb236`);
    
    if (geoResponse.data.length === 0) {
      throw new Error('City not found');
    }

    const { lat, lon } = geoResponse.data[0];
    
    const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=fe1e098bd3a0d210cbd624269dfdb236`);
    
    const weatherData = weatherResponse.data;
    
    return {
      temperature: Math.round(weatherData.main.temp),
      description: weatherData.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
export default {
  name: "App",
  data() {
    return {
      city: "",
      weatherData: null,
      hourlyForecast: [],
      dailyForecast: [],
    };
  }, -->
  //computed is a property that is used to define a property that
  //is dependent on other data properties.
  //If we using a more easy to understand words to understand the concept:
  //the derived value such as temperature automatically update when the relevant value change.
  computed: {
    //There are multiple way to obtain the data in Celsius format.
    //Calculation by yourself like below after data is retrieved or via API parameters
    //Example of adding additional units requirement, if you choose this, remember to change section 3.1
    //https://api.openweathermap.org/data/2.5/weather?lat=XXXX&lon=-XXX.15&appid={API key}&units=metric
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273)
        : null;
    },
    //Get the current weather icon using the API link
    iconUrl() {
      return this.weatherData
        ? `http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  //There are two steps involved in this,
  //step 1: identify current location
  //step 2: after identify, get the weather data straight based on the current location.
  mounted() {
    this.fetchCurrentLocationWeather();
  },
  methods: {
    //Async in a easy to understand way means the method will run in backend thread,
    //and it won't occupy the main thread, so the user experience is still smooth
    async fetchCurrentLocationWeather() {
      //The navigator.geolocation object is part of the Web API provided by modern web browsers
      //Please note this function is not belongs to Vue or openweather.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          //API link to obtain the current weather based on the current location browser identified
          <!-- const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`; -->
          //await means wait for the fetchWeatherData method to complete before proceeding
          <!-- await this.fetchWeatherData(url);
        });
      }
    },
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);
        //Returned data from API is stored as JSON file in weatherData
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  }
}; -->
<!-- </script> -->


<!-- <template>
    <div class="container">
      <div class="header">
        <h1 class="text-center">WEATHER APP</h1>
        <form @submit.prevent="searchByCity" class="text-center">
          <input
            type="text"
            v-model="city"
            placeholder="Enter city name"
            class="search-input"
            id="citySearch"
            name="citySearch"
            autocomplete="off"
          />
          <button type="submit" class="search-button">Search</button>
        </form>
      </div>
    </div>
    
    <main>
      <div v-if="weatherData">
        <h2 class="text-center">
          {{ weatherData.name }}, {{ weatherData.sys.country }}
        </h2>
        <div class="text-center">
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <div class="text-center">
          <span>{{ weatherData.weather[0].description }}</span>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "App",
    data() {
      return {
        city: "",
        weatherData: null,
        apiKey: "fe1e098bd3a0d210cbd624269dfdb236",
      };
    },
    computed: {
      temperature() {
        return this.weatherData ? Math.round(this.weatherData.main.temp) : null;
      },
      iconUrl() {
        return this.weatherData
          ? `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}.png`
          : null;
      },
    },
    mounted() {
      this.fetchCurrentLocationWeather();
    },
    methods: {
      async fetchCurrentLocationWeather() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            await this.fetchWeatherData(latitude, longitude);
          });
        }
      },
      async searchByCity() {
        try {
          const geoResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${this.apiKey}`);
          
          if (geoResponse.data.length === 0) {
            console.error('City not found');
            return;
          }
  
          const { lat, lon } = geoResponse.data[0];
          await this.fetchWeatherData(lat, lon);
        } catch (error) {
          console.error("Error searching for city:", error);
        }
      },
      async fetchWeatherData(lat, lon) {
        try {
          const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`);
          this.weatherData = response.data;
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
    },
  };
  </script> -->

  <template>
    <div class="container">
      <h1 class="text-center">WEATHER APP</h1>
      <form @submit.prevent="searchWeather" class="text-center">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Enter city name (e.g. Clayton, AU)"
          class="search-input"
          id="citySearch"
          name="citySearch"
          autocomplete="off"
        />
        <button type="submit" class="search-button">Search</button>
      </form>
  
      <main v-if="weatherData">
        <h2 class="text-center">
          {{ displayCity }}, {{ weatherData.sys.country }}
        </h2>
        <p v-if="isApproximateLocation" class="text-center warning">
          Note: Showing weather for the nearest available location.
        </p>
        <div class="text-center">
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <div class="text-center">
          <span>{{ weatherData.weather[0].description }}</span>
        </div>
      </main>
  
      <div v-if="error" class="text-center error">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "App",
    data() {
      return {
        searchQuery: "",
        weatherData: null,
        error: null,
        apiKey: "fe1e098bd3a0d210cbd624269dfdb236",
        displayCity: "",
        isApproximateLocation: false,
      };
    },
    computed: {
      temperature() {
        return this.weatherData ? Math.round(this.weatherData.main.temp) : null;
      },
      iconUrl() {
        return this.weatherData
          ? `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
          : null;
      },
    },
    methods: {
      async searchWeather() {
        this.error = null;
        this.weatherData = null;
        this.isApproximateLocation = false;
  
        try {
          const geoResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(this.searchQuery)}&limit=1&appid=${this.apiKey}`);
          
          if (geoResponse.data.length === 0) {
            this.error = 'Location not found. Please try a different name or format.';
            return;
          }
  
          const { lat, lon, name } = geoResponse.data[0];
          this.displayCity = this.searchQuery.split(',')[0].trim(); // 保存用户输入的城市名
  
          const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`);
          
          this.weatherData = weatherResponse.data;
  
        
          if (this.weatherData.name.toLowerCase() !== this.displayCity.toLowerCase()) {
            this.isApproximateLocation = true;
          }
        } catch (error) {
          console.error("Error fetching weather data:", error);
          this.error = "An error occurred while fetching the weather data. Please try again.";
        }
      },
    },
  };
  </script>