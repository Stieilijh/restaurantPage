import '../css/navBar.css'
export default function createNavBar(){
    const navBar = document.createElement("ul")
    navBar.id="navBar"
    
    const homeButton = document.createElement("li")
    const homeDiv =document.createElement('div')
    homeDiv.textContent="Home"
    homeButton.appendChild(homeDiv)
    homeButton.id='home'
    navBar.appendChild(homeButton)  

    const menuButton = document.createElement("li")
    const menuDiv =document.createElement('div')
    menuDiv.textContent="Menu"
    menuButton.appendChild(menuDiv)
    menuButton.id='menu'
    navBar.appendChild(menuButton)

    const aboutButton = document.createElement("li")
    const aboutDiv =document.createElement('div')
    aboutDiv.textContent="About"
    aboutButton.appendChild(aboutDiv)
    aboutButton.id='about'
    navBar.appendChild(aboutButton)

    return navBar
}
