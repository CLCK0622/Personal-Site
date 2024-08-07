function change_mode() {
    if (localStorage.theme === 'light' || !('theme' in  localStorage)) {
        localStorage.theme = 'dark'
    } else {
        localStorage.theme = 'light'
    }
    if (localStorage.theme === 'light' || (!('theme' in  localStorage))) {
        document.getElementById("html").classList.remove('dark')
    } else {
        document.getElementById("html").classList.add('dark')
    }
}

  // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'