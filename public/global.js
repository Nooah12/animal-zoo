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
            document.querySelectorAll('.sidebar-animal').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
            const clickedSpecies = event.target.textContent;
            displayAnimalSummary(clickedSpecies);
        });
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