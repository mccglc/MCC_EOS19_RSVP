// URL PARAMS

var urlParams = new URLSearchParams(window.location.search);

if(urlParams.has('name')){

}

// ANIMATIONS

function animateCSS(element, animationName, callback) {
    const node = document.getElementById(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function solid(element){
  const node = document.getElementById(element)
  node.classList.remove('hidden')
}

function transparent(element){
  const node = document.getElementById(element)
  node.classList.add('hidden')
}



animateCSS("hasParam", "bounceInUp", solid("hasParam"));
