import { contactTab } from './home.js'
//const contactTab = document.getElementById('contact-tab')

function loadContactContent() {
    const contactContent = document.createElement('div')
    contactContent.className = 'tab__content'
    contactContent.id = 'contact-content'

    const contenth4 = document.createElement('h4')
    contenth4.textContent = 'Contact Information'

    
    contactContent.appendChild(contenth4)

    contactTab.appendChild(contactContent)
}

function deleteContactContent() {
    let contactContent = document.getElementById('contact-content')
    contactTab.removeChild(contactContent)
}

export { loadContactContent, deleteContactContent }