import { LoadContents } from './home.js'
import { loadContactContent, deleteContactContent } from './contact.js'


let displaying = 'none'
LoadContents()

const contactRadio = document.getElementById('tab-1')
contactRadio.addEventListener("click", displayContact)

const menuRadio = document.getElementById('tab-2')
menuRadio.addEventListener('click', displayMenu)

function displayContact() {
        if (displaying == 'none') {
            loadContactContent()
        }
        else if (displaying == 'menu') {
            deleteMenuContent()
            loadContactContent()
        }
        displaying = 'contact'
}

function displayMenu() {
    if (displaying == 'none') {
        loadMenuContent()
    }
    else if (displaying == 'contact') {
        deleteContactContent
        loadMenuContent()
    }
    displaying = 'menu'
}