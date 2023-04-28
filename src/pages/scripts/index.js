import { userProfileInfo, userRepositoriesInfo } from '../../scripts/requests.js';

const handleSearchUser = () => {
    const button = document.querySelector('.form__user > button');
    const input = document.querySelector('.form__user > input');
    let userInput = '';
    
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        userInput = '';
        userInput = input.value;

        localStorage.setItem('userName', userInput.trim());
        await userProfileInfo();
        await userRepositoriesInfo();
    });
};

handleSearchUser();