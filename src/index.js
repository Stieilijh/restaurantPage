import createLogo from "./components/logo"
import createNavBar from "./components/navBar"


document.querySelector('body').style='margin:0;'

const fullContent=document.querySelector('#content')
//Top content
const topCont = document.createElement('div')
topCont.id="topCont"
topCont.style.display="flex"
topCont.style.justifyContent="flex-start"
topCont.style.gap="10%"
topCont.style.backgroundColor="Blue"
fullContent.appendChild(topCont)
topCont.appendChild(createLogo())
topCont.appendChild(createNavBar())

