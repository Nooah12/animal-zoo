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
            <div class="animals-container">
            <div class="animals">
                <p><img src="${animalData.image}"></p>
                <p><span>Name: </span>${animalData.name}</p>
                <p><span>Lifespan: </span>${animalData.lifespan}</p>
                <p><span>Group: </span>${animalData.group}</p>
                <p><span>Food: </span>${animalData.food}</p>
                <p><span>Description: </span>${animalData.description}</p>
                <p><span>Height: </span>${animalData.height}</p>
                <p><span>Weight: </span>${animalData.weight}</p>
                <p><span>Habitat: </span>${animalData.habitat}</p>
                <p><span>Summary: </span>${animalData.summary}</p>
            </div>
            </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching animal data:', error);
        });
};