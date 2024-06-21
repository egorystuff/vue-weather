import axios from 'axios'

const APIKey = '7d8aeec9c3044f21849121348242106 '

export const fetchWeatherData = async (city: string) => {
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`
    )
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
