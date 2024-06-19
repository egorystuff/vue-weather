export enum IconName {
  LOGO_ICON = 'logoIcon',
  CHANGE_THEME = 'changeTheme',
  SUN = 'sun',
  RAIN = 'rain',
  SMALL_RAIN = 'small_rain',
  SMALL_RAIN_SUN = 'small_rain_sun',
  MAINLY_CLOUDY = 'mainly_cloudy',
  CLOSE = 'close'
}

export enum IndicatorsType {
  TEMP = 'temp',
  PRESSURE = 'pressure',
  PREC = 'precipitation',
  WIND = 'wind'
}

export interface ItemType {
  iconId: IndicatorsType
  name: string
  value: string
  boxView?: string
}

export interface DaysType {
  day: string
  day_info: string
  icon_id: IconName
  temp_day: string
  temp_night: string
  info: string
}
