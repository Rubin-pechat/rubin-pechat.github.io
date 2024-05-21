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
var select = document.getElementById("material-selector");
var text = document.getElementById("name");
var current_text = text.getText();
if(select.getAttribute("value")==1){
    current_text = "works";
}