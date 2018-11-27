document.addEventListener('DOMContentLoaded', function(){
    let parent = document.getElementsByTagName('main')[0];
    let burgerButton = document.createElement('div');
    let nav = document.getElementsByTagName('nav')[0];

    burgerButton.classList.add('burger');

    for(let i = 3; i > 0; i--) {
        burgerButton.appendChild(document.createElement('div'))
    }

    nav.insertBefore(burgerButton, nav.childNodes[0]);

    function toggleClass(element, className){
        if (element.classList.contains(className)){
            element.classList.remove(className);
        }else {
            element.classList.add(className);
        }
    }

    burgerButton.addEventListener('click', function(){toggleClass(nav,'navOpen')});

});