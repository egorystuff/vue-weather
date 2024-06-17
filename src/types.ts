export enum IconName {
  LOGO_ICON = 'logoIcon',
  CHANGE_THEME = 'changeTheme',
  SUN = 'sun'
}

export enum Indicators {
  TEMP = 'temp',
  PRESSURE = 'pressure',
  PREC = 'precipitation',
  WIND = 'wind'
}

export interface Item {
  iconId: string
  name: string
  value: string
}
