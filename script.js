var theme_link = document.getElementById("theme-link");
document.getElementById("theme-switcher").addEventListener("click", function(){
	let light = "style.css";
	let dark = "style_dark.css";
	var currTheme = theme_link.getAttribute("href");
    var theme = "";
    if(currTheme == light){
   	 currTheme = dark;
    }else{    
   	 currTheme = light;
    }
    theme_link.setAttribute("href", currTheme);
    Save(theme);
});