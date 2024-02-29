const showSideMenu = () => {
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'flex'
}
const hideSideMenu= () => {
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'none'
}

const getAnimalName = () => {
    const url = window.location.href;
    const matches = url.match(/\/animals\/([^?]+)/);
    if (matches && matches.length > 1) {
        return matches[1];
    } else {
        return null;
    }
};

document.addEventListener('DOMContentLoaded', function() { 
    const animalName = getAnimalName();
    console.log("text"+ animalName);
    document.querySelectorAll('.sidebar-animal').forEach(item => { 
        if (item.classList.contains(animalName)) {
            item.classList.add("active");
            const anchor = item.querySelector('a');
            anchor.href = "/";
        } else {
            item.classList.remove("active");
        }
    });
});