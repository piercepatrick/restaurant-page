const menuTab = document.getElementById('menu-tab')

function loadMenuContent() {
    const menuContent = document.createElement('div')
    menuContent.className = 'tab__content'
    menuContent.id = 'menu-content'

    const contenth4 = document.createElement('h4')
    contenth4.textContent = 'Menu Information'

    
    menuContent.appendChild(contenth4)

    
    menuTab.appendChild(menuContent)
}

function deleteMenuContent() {
    menuContent = document.getElementById('menu-content')
    menuTab.removeChild(menuContent)
}

export { loadMenuContent, deleteMenuContent }