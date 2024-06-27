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
  value: string | null
  boxView?: string
}

export interface DaysType {
  id?: number | undefined
  day?: string | undefined
  icon_id?: string | undefined
  temp_day?: number | undefined
  temp_night?: number | undefined
  info?: string | undefined
}
