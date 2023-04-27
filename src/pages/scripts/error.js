export const handleNewSearch = () => {
    const button = document.querySelector('.button__home');

    button.addEventListener('click', () => {
        window.localStorage.clear();
        window.location.replace('../../index.html');
    })
}

handleNewSearch();