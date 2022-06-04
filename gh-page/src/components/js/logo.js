import Icon from "../images/logo.jpeg"
export default function createLogo(){
    const logo = document.createElement("div")
    logo.id="logo"
    const icon = new Image()
    icon.src= Icon
    logo.appendChild(icon)
    icon.style='max-width:auto;max-height:50px;'
    logo.style.marginLeft="10%"
    return logo
}