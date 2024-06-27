import { ref, type Ref } from 'vue'
import { conditions } from './conditions'
import type { DataApi } from './fetchWeatherData'

export const weatherForSomeDays: Ref<any> = ref()

export const updateWeatherForSomeDays = (data: any): void => {
  weatherForSomeDays.value = data.forecast?.forecastday

  weatherForSomeDays.value = weatherForSomeDays.value.map((item: any) => {
    const weatherDay = conditions.find((el) => el.code === item.day?.condition?.code)

    return {
      id: item?.date_epoch,
      day: item?.date,
      icon_id: item?.day?.condition?.icon,
      temp_day: item?.day?.maxtemp_c,
      temp_night: item?.day?.mintemp_c,
      info: weatherDay?.languages[23]?.day_text
    }
  })

  console.log(weatherForSomeDays.value)
}
