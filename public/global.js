document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.side-bar-animal').forEach(item => {
        item.addEventListener('click', event => {
            const clickedSpecies = event.target.textContent;
            const targetInfo = document.querySelector(`.animal-info.${clickedSpecies}`);

            if (targetInfo) {
                document.querySelectorAll('.animal-info').forEach(info => {
                    info.style.display = 'none';
                });

                targetInfo.style.display = targetInfo.style.display === 'block' ? 'none' : 'block';
                //document.querySelector('.welcome-message').classList.add('hidden');
            }
        });
    });
});