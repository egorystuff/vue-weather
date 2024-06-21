export enum IconName {
  LOGO_ICON = 'logoIcon',
  CHANGE_THEME = 'changeTheme',
  CLOSE = 'close',
  SEARCH = 'search'
}

export enum IndicatorsType {
  TEMP = 'temp',
  PRESSURE = 'pressure',
  PREC = 'precipitation',
  WIND = 'wind'
}

export enum WeatherIconsType {
  SUN = 'sun',
  MOSTLYSUN = 'mostlysun',
  MOSTLYCLOUDY = 'mostlycloudy',
  CLOUDY = 'cloudy',
  FOG = 'fog',
  RAIN = 'rain',
  STORMS = 'storms',
  SLEET = 'sleet',
  FLURRIES = 'flurries',
  SNOW = 'snow'
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
  icon_id: WeatherIconsType
  temp_day: string
  temp_night: string
  info: string
}
