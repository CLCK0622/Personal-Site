function init_mode() {
    if ('theme' in localStorage) {
        if (localStorage.theme === 'dark') {
            document.getElementById("darkmode").setAttribute("on", true)
            document.getElementById("darkmode").checked = true
        }
    }
    if (localStorage.theme === 'light' || (!('theme' in  localStorage))) {
        document.getElementById("html").classList.remove('dark')
    } else {
        document.getElementById("html").classList.add('dark')
    }
}

function change_mode() {
    if (localStorage.theme === 'light' || !('theme' in  localStorage)) {
        localStorage.theme = 'dark'
        document.getElementById("darkmode").setAttribute("on", true)
    } else {
        localStorage.theme = 'light'
        document.getElementById("darkmode").setAttribute("on", false)
    }
    if (localStorage.theme === 'light' || (!('theme' in  localStorage))) {
        document.getElementById("html").classList.remove('dark')
    } else {
        document.getElementById("html").classList.add('dark')
    }
}