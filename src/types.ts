export enum IconName {
  LOGO_ICON = 'logoIcon',
  CHANGE_THEME = 'changeTheme',
  SUN = 'sun'
}

export enum IndicatorsType {
  TEMP = 'temp',
  PRESSURE = 'pressure',
  PREC = 'precipitation',
  WIND = 'wind'
}

export interface Item {
  iconId: IndicatorsType
  name: string
  value: string
}
