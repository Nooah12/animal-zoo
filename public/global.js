const showSideMenu = () => {
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'flex'
}
const hideSideMenu= () => {
    const sidemenu = document.querySelector('.sidemenu')
    sidemenu.style.display = 'none'
}

const getAnimalName = () => {
    const url = window.location.pathname;
    const matches = url.match(/\/([^/]+)$/);
    if (matches && matches.length > 1) {
        return matches[1];
    } else {
        return null;
    }
};

document.addEventListener('DOMContentLoaded', function() { 
    const animalName = getAnimalName();
    document.querySelectorAll('.sidebar-animal').forEach(item => { 
        if (item.classList.contains(animalName)) {
            item.classList.add("active");
            const anchor = item.querySelector('a');
            const pathSegments = window.location.pathname.split('/');
            const baseUrl = pathSegments.length > 2 && ['birds', 'mammals', 'reptiles'].includes(pathSegments[1]) ? `/${pathSegments[1]}/` : '/';
            anchor.href = baseUrl;
        } else {
            item.classList.remove("active");
        }
    });
});