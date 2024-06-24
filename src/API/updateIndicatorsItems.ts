import { IndicatorsType, type ItemType } from '@/types'
import { ref, type Ref } from 'vue'

export const IndicatorsItems: Ref<ItemType[]> = ref([
  {
    iconId: IndicatorsType.TEMP,
    name: 'Температура',
    value: null,
    boxView: '-2 0 25 25'
  },
  {
    iconId: IndicatorsType.PRESSURE,
    name: 'Давление',
    value: null,
    boxView: '0 0 19 19'
  },
  {
    iconId: IndicatorsType.PREC,
    name: 'Осадки',
    value: null,
    boxView: '5 1 25 25'
  },
  {
    iconId: IndicatorsType.WIND,
    name: 'Ветер',
    value: null,
    boxView: '-1 -2 22 22'
  }
])

export const updateIndicatorsItems = (data: any): void => {
  const newIndicatorsItems: string[] = [
    data.current?.temp_c + '° - ощущается как ' + data.current?.feelslike_c + '°',
    data.current?.pressure_mb + ' мм ртутного столба',
    'Переменная облачность, без осадков',
    ((data.current?.wind_kph * 1000) / 3600).toFixed(1) + ' м/с '
  ]

  IndicatorsItems.value = IndicatorsItems.value.map((item, index) => {
    return {
      ...item,
      value: newIndicatorsItems[index]
    }
  })
}
