const LoadContents = ()  => {
    const content = document.querySelector('#content')

    const welcomeContent = document.createElement('div')
    
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
}

export { LoadContents }