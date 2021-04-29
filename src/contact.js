import { contactTab } from './home.js'

function loadContactContent() {
    const contactContent = document.createElement('div')
    contactContent.className = 'tab__content'
    contactContent.id = 'contact-content'

    const contenth4 = document.createElement('h4')
    contenth4.textContent = 'Contact Information'

    const contentP = document.createElement('p')
    contentP.textContent =  "Phone : 111-111-1111 \
                            Call for Takeout"


    contactContent.appendChild(contenth4)
    contactContent.appendChild(contentP)

    contactTab.appendChild(contactContent)
}

function deleteContactContent() {
    let contactContent = document.getElementById('contact-content')
    contactTab.removeChild(contactContent)
}

export { loadContactContent, deleteContactContent }