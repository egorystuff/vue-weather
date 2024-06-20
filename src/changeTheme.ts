import { ref, type Ref } from 'vue'

export const theme: Ref<string> = ref('light')

export const storage = {
  setItem: (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item))
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name)
    if (item) {
      return JSON.parse(item)
    }
  }
}

export const changeTheme = (): void => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  storage.setItem('theme', theme.value)
}
