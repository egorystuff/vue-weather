import { ref, type Ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'

// const APIKey = '7d8aeec9c3044f21849121348242106'
const APIKey = import.meta.env.VITE_API_KEY as string
const BASE_URL = import.meta.env.VITE_BASE_URL as string

export const cityWeatherData: Ref<any> = ref({})

export const fetchWeatherData = async (city: string, days: number = 1): Promise<void> => {
  try {
    const { data } = await axios.get<AxiosResponse<any>>(
      `${BASE_URL}${APIKey}&q=${city}&days=${days}`
    )
    cityWeatherData.value = data
  } catch (error: unknown) {
    console.error(error)
  }
}
