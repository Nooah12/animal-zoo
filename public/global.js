const showSideMenu = () => {
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'flex'
}
const hideSideMenu= () => {
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function() { 
    document.querySelectorAll('.sidebar-animal').forEach(item => { 
        item.addEventListener('click', event => {
            const clickedSpecies = event.target.textContent;
            const targetlnfo = document.querySelector(`.animals-container.${clickedSpecies}`); 
            if (targetlnfo) { 
                document. querySelectorAll('.animals-container').forEach(info => {
                    info. style.display = 'none' ; 
                });
                targetlnfo.style.display = targetlnfo.style.display  === 'block' ? 'none' : 'block' ; 
                //document . querySelector('.welcome-message' ) .classList.add('hidden' );
            }
        });
    });
}); 