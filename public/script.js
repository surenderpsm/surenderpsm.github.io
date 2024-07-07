$(document).ready(()=>{
    themeToggleBtn = $("#toggle-dark-mode")
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

    applyTheme = (theme)=>{
        if (theme === 'dark') {
            $('body').addClass('dark')
        }
        else{
            $('body').removeClass('dark')
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme)
    }
    else if (prefersColorScheme.matches){
        applyTheme('dark')
    }

    themeToggleBtn.click(()=>{
        $('#toggle-dark-mode > svg').toggleClass('rotate-180')
        $('body').toggleClass('dark')
        if ($('body').hasClass('dark')){
            localStorage.setItem('theme', 'dark')
        }
        else{
            localStorage.setItem('theme', 'light')
        }
    })

    prefersColorScheme.addEventListener('change', (e)=>{
        if(!localStorage.getItem('theme')){
            applyTheme(e.matches?'dark':'light')
        }
    })
})