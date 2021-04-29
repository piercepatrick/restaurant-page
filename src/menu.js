import { menuTab } from './home.js'

function loadMenuContent() {
    const menuContent = document.createElement('div')
    menuContent.className = 'tab__content'
    menuContent.id = 'menu-content'

    const contenth4 = document.createElement('h4')
    contenth4.textContent = 'Menu Information'

    
    const contentP = document.createElement('p')
    contentP.textContent = 'Burgers, Pizza, Wings, AND ICE CREAM!'

    
    menuContent.appendChild(contenth4)
    menuContent.appendChild(contentP)
    
    menuTab.appendChild(menuContent)
}

function deleteMenuContent() {
    let menuContent = document.getElementById('menu-content')
    menuTab.removeChild(menuContent)
}

export { loadMenuContent, deleteMenuContent }