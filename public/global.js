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

/*const updateLink = (animalName) => {
    const link = document.querySelector(`.sidebar-animal.${animalName}`);

}*/

document.addEventListener('DOMContentLoaded', function() { 
    const animalName = getAnimalName();
    console.log("text"+ animalName);
    document.querySelectorAll('.sidebar-animal').forEach(item => { 
        if (item.classList.contains(animalName)) {
            item.classList.add("active");
            const anchor = item.querySelector('a');
            anchor.href = "/";
   //         updateLink(animalName);
        } else {
            item.classList.remove("active");
        }
    });
});

let activeAnimal = null;

const displayAnimalSummary = (clickedSpecies) => {
    console.log("You clicked on " + clickedSpecies);
    fetch(`/animals/${clickedSpecies}?welcome=animal`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(animalData => {

        })
        .catch(error => {
            console.error('Error fetching animal data:', error);
        });
};