export default function useTheme() {
  // const theme = useState<string | null>('light', () => null)
  const theme = ref('light')

  onMounted(() => {
    theme.value = localStorage.getItem('theme')
  })

  const setTheme = (value: string) => {
    theme.value = value
    localStorage.setItem('theme', theme.value)
    applyTheme()
  }

  function applyTheme() {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      document.documentElement.classList.remove('dark')
    }
  }

  function getTheme() {
    return localStorage.getItem('theme')
  }

  return {
    theme,
    setTheme,
    getTheme,
  }
}