import {renderHeaderProfile, renderRepositories} from '../../scripts/render.js';
import {handleNewSearch} from './error.js';

const handleProjectPage = () => {
    const buttons = document.querySelectorAll('.button__secondary');
    const respositoriesList = JSON.parse(localStorage.getItem('respositoryList'));

    respositoriesList.forEach(repository => {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                open(repository.url, '_blank');
            });
        });
    });
};

const handleEmptyRepository = () => {
    const list = document.querySelector('.main-user__container > ul');
    const emptyRepository = document.querySelector('.empty__projects');

    if(list.innerHTML === '') {
        emptyRepository.style.display = 'flex';
    } else {
        emptyRepository.style.display = 'none';
    };
};

renderHeaderProfile();
renderRepositories();
handleNewSearch();
handleProjectPage();
handleEmptyRepository();