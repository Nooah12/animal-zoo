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
    fetch(`/animals/${clickedSpecies}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(animalData => {
            const mainContent = document.querySelector('.main-content');
            mainContent.innerHTML = `
                <p>${animalData.image}</p>
                <p>${animalData.name}</p>
                <p>${animalData.lifespan}</p>
                <p>${animalData.group}</p>
                <p>${animalData.food}</p>
                <p>${animalData.description}</p>
                <p>${animalData.height}</p>
                <p>${animalData.weight}</p>
                <p>${animalData.habitat}</p>
                <p>${animalData.summary}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching animal data:', error);
        });
};