import '../css/navBar.css'
export default function createNavBar(){
    const navBar = document.createElement("ul")
    navBar.id="navBar"
    
    const homeButton = document.createElement("li")
    homeButton.textContent="Home"
    homeButton.id='home'
    navBar.appendChild(homeButton)  

    const menuButton = document.createElement("li")
    menuButton.textContent="Menu"
    menuButton.id='menu'
    navBar.appendChild(menuButton)

    const aboutButton = document.createElement("li")
    aboutButton.textContent="About"
    aboutButton.id='about'
    navBar.appendChild(aboutButton)

    return navBar
}
