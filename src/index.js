import createLogo from "./components/logo"
import createNavBar from "./components/navBar"


document.querySelector('body').style='margin:0;'
const content=document.querySelector('#content')

content.appendChild(createLogo())
content.appendChild(createNavBar())

