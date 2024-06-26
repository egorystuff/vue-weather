import type { DaysType } from '@/types'
import { ref, type Ref } from 'vue'

export const weatherForSomeDays: Ref<any> = ref()

export const updateWeatherForSomeDays = (data: any): void => {
  weatherForSomeDays.value = data.forecast?.forecastday

  weatherForSomeDays.value = weatherForSomeDays.value.map((item: any) => {
    return {
      id: item?.date_epoch,
      day: item?.date,
      icon_id: item?.day?.condition?.icon,
      temp_day: item?.day?.maxtemp_c,
      temp_night: item?.day?.mintemp_c,
      info: item?.day?.condition?.text
    }
  })

  console.log(weatherForSomeDays.value)
}
