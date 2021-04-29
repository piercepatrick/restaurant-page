import { LoadContents } from './home.js'
import { loadContactContent, deleteContactContent } from './contact.js'
import { loadMenuContent, deleteMenuContent } from './menu.js'

console.log('test1')
let displaying
displaying = 'none'
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
    console.log(displaying)
    if (displaying == 'none') {
        loadMenuContent()
    }
    else if (displaying == 'contact') {
        deleteContactContent()
        loadMenuContent()
    }
    displaying = 'menu'
}