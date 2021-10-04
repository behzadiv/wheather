import moon from "../data/moon.svg"
import sun from "../data/sun.svg"
import "./DarkMode.css"
const DarkMode = () => {
    
    const body = document.body;
    const darkTheme = "dark"
    const lightTheme = "light"
    let theme 
    let clickedClass= "clicked"
    if (localStorage){
        theme = localStorage.getItem("theme")
        //console.log(theme);
    }
    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme)
    }else{
        body.classList.add(lightTheme)
    }
    const switchTheme=(e)=>{
        console.log(e.target.classList);
        if(theme === darkTheme){
            body.classList.replace(lightTheme,darkTheme)
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme","light")
            theme = lightTheme
        }else{
            body.classList.replace(darkTheme,lightTheme)
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme","dark")
            theme = darkTheme
        }
        console.log(theme);
    }
    return ( 
    
        <button onClick={(e)=>switchTheme(e)} 
        className={theme==="dark"? clickedClass:""}
        id="darkMode" 
       
        ></button>
     );
}
 
export default DarkMode;