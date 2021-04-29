const LoadContents = ()  => {
    const content = document.querySelector('#content')

    const welcomeContent = document.createElement('div')
    welcomeContent.setAttribute('id','welcome-content')

    const welcomeH1 = document.createElement('h1')
    welcomeH1.textContent = 'Welcome to my Restaurant!'
    
    const welcomeImg = document.createElement('img')
    welcomeImg.setAttribute('id','welcome-image')
    welcomeImg.setAttribute('src','Nightshade_2019_Frank-Lee_2018-12-14-NightShade-117.jpg')
    
    const welcomeP = document.createElement('p')
    welcomeP.textContent = 'The perfect restaurant for every occasion.: The best restaurant, no matter your mood or craving. \
                            We specialize in the highest-quality steaks, seafood, vegetables, appetizers, salads, and desserts on the market. \
                            Join our mission to create perfection and let us show you what it feels like.'
    
    welcomeContent.appendChild(welcomeH1)
    welcomeContent.appendChild(welcomeImg)
    welcomeContent.appendChild(welcomeP)
    
    content.appendChild(welcomeContent)

    const tabs = document.createElement('div')
    tabs.className = 'tabs'

    const contactTab = document.createElement('div')
    contactTab.setAttribute('class','tab')
    contactTab.setAttribute('id','contact-tab')

    const radioInput = document.createElement('input')
    radioInput.setAttribute('type','radio')
    radioInput.setAttribute('name','tabgroup')
    radioInput.setAttribute('id','tab-1')
    //radioInput.checked = true

    const radioLabel = document.createElement('label')
    radioLabel.setAttribute('for','tab-1')
    radioLabel.textContent = 'Contact'



    const menuTab = document.createElement('div')
    menuTab.setAttribute('class','tab')

    const menuInput = document.createElement('input')
    menuInput.setAttribute('type','radio')
    menuInput.setAttribute('name','tabgroup')
    menuInput.setAttribute('id','tab-2')


    const menuLabel = document.createElement('label')
    menuLabel.setAttribute('for','tab-2')
    menuLabel.textContent = 'Menu!'


    content.appendChild(tabs)
    tabs.appendChild(contactTab)
    contactTab.appendChild(radioInput)
    contactTab.appendChild(radioLabel)
    tabs.appendChild(menuTab)
    menuTab.appendChild(menuInput)
    menuTab.appendChild(menuLabel)


    const radioContent = document.createElement('div')
    radioContent.className = 'tab__content'

    const contenth4 = document.createElement('h4')
    contenth4.textContent = 'Contact Information'

    


}

export { LoadContents }