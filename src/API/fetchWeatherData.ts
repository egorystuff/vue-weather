import { ref, type Ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'

const APIKey = '7d8aeec9c3044f21849121348242106'

export const cityWeatherData: Ref<any> = ref({})

export const fetchWeatherData = async (city: string): Promise<void> => {
  try {
    const { data } = await axios.get<AxiosResponse<any>>(
      `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`
    )
    cityWeatherData.value = data
  } catch (error: unknown) {
    console.error(error)
  }
}
