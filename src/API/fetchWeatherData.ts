import { ref, type Ref } from 'vue'
import axios from 'axios'

export interface DataApi {
  current: {
    temp_c: number
    is_day: number
    pressure_mb: number
    feelslike_c: number
    wind_kph: number
    condition: {
      icon: string
      code: number
      text: string
    }
  }

  forecast: {
    forecastday: Array<{
      day: {
        maxtemp_c: number
        mintemp_c: number
        condition: {
          icon: string
          text: string
        }
      }
    }>
  }

  location: {
    name: string
    region: string
    localtime: string
  }
}

export interface ApiResponse {
  data: DataApi
  status: number
}

export interface ApiError {
  message: string
  status: number
}

const APIKey = import.meta.env.VITE_API_KEY as string
const BASE_URL = import.meta.env.VITE_BASE_URL as string

export const cityWeatherData: Ref<ApiResponse | ApiError> = ref({
  data: {
    current: {
      temp_c: 0,
      is_day: 0,
      pressure_mb: 0,
      feelslike_c: 0,
      wind_kph: 0,
      condition: {
        icon: '',
        code: 0,
        text: ''
      }
    },
    forecast: {
      forecastday: []
    },
    location: {
      name: '',
      region: '',
      localtime: ''
    }
  },
  status: 0
})

export const fetchWeatherData = async (
  city: string,
  days: number = 1
): Promise<ApiResponse | ApiError> => {
  try {
    const { data } = await axios.get<ApiResponse>(`${BASE_URL}${APIKey}&q=${city}&days=${days}`)
    cityWeatherData.value = data
    return cityWeatherData.value
  } catch (error: unknown) {
    console.error(error)
    return Promise.reject(error)
  }
}
