const counter = document.querySelectorAll('.counter');

counter.forEach((counter) => {
    counter.innerHTML = '0';
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerHTML
        const increment = target /100
        
        if ( c < target ) {
            counter.innerText = `${Math.ceil( c + increment )}`

            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
})  