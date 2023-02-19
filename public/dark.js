try {
  if (localStorage.global === '{"theme":"dark"}' || (!('global' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
  } else {
    document.documentElement.classList.remove('dark')
  }
} catch (_) {}