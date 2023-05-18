let $themeModeBtn = document.getElementById('themeModeBtn');

$themeModeBtn.addEventListener('click', () => {
    document.body.classList.forEach(element => {
        if (element == "lightThemeBody") {
            document.body.classList.remove("lightThemeBody");
            document.body.classList.add("darkThemeBody");
            document.getElementById('btnPlayId').classList.remove('lightThemeBtn');
            document.getElementById('btnPlayId').classList.add('darkThemeBtn');
            $themeModeBtn.classList.remove("tmbDark");
            $themeModeBtn.classList.add("tmbLight");
            $themeModeBtn.style.backgroundColor = "#25232F"
            document.querySelector('.sunWhite').classList.toggle('sunWhite')
        }
    }); 
})