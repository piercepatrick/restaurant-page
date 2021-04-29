function loadContactContent() {
    // create a div Element, add appropriate content, add styles, append it to welcome-content
    const radioContent = document.createElement('div')
    radioContent.className = 'tab__content'

    const contenth4 = document.createElement('h4')
    contenth4.textContent = 'Contact Information'

    
    radioContent.appendChild(contenth4)

    const contactTab = document.getElementById('contact-tab')
    contactTab.appendChild(radioContent)
}

function deleteContactContent() {
    
}

export { loadContactContent, deleteContactContent }