window.onscroll = function() {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300){
        taskbar.style.position = "fixed";
        taskbar.style.top = 0;
        taskbar.style.width = "163.32px" ;
        taskbar.style.marginTop = "30px" ;
        taskbar.style.transition = "all 0.2s linear" ;
    } else {
        taskbar.style.position = "static";
        taskbar.style.marginTop = 0 ;
        taskbar.style.transition = "all 0.2s linear" ;
    }
}