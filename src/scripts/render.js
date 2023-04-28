function createHeader(tittle, image) {
    const divTag = document.querySelector('.header-user__container > div');

    const figureTag = document.createElement('figure');
    const imageProfileTag = document.createElement('img');
    const userNameTag = document.createElement('h1');
    const changeUserButtonTag = document.createElement('button');
    
    divTag.innerHTML = '';
    changeUserButtonTag.classList = 'button__default button__home';

    userNameTag.innerText = tittle;
    imageProfileTag.src = image;
    imageProfileTag.alt = `Imagem de Perfil do Github do Usuario ${tittle}`;
    changeUserButtonTag.innerText = 'Trocar de usuário';

    figureTag.append(imageProfileTag, userNameTag);
    divTag.append(figureTag, changeUserButtonTag);

    return divTag;
}

function createRepositoriesCards(arraylist) {
    const liTag = document.createElement('li');
    const tittleTag = document.createElement('h2');
    const descriptionTag = document.createElement('p');
    const repositoryButton = document.createElement('button');

    repositoryButton.classList.add('button__secondary');

    tittleTag.innerText = arraylist.name;
    descriptionTag.innerText = arraylist.description.substring(0, 115) + '...';
    repositoryButton.innerText = 'Repositório';

    liTag.append(tittleTag, descriptionTag, repositoryButton);
    return liTag
}

export function renderHeaderProfile() {
    const mainHeader = document.querySelector('.header-user__container');
    const userNameTittle = localStorage.getItem('userTittle');
    const userImageProfile = localStorage.getItem('userImage');

    const headerProfile = createHeader(userNameTittle, userImageProfile);
    mainHeader.appendChild(headerProfile);
}

export function renderRepositories() {
    const ulCard = document.querySelector('.main-user__container > ul');
    const respositoriesList = JSON.parse(localStorage.getItem('respositoryList'));
    
    ulCard.innerHTML = '';
    respositoriesList.forEach(repository => {
        let liCard = createRepositoriesCards(repository);
        ulCard.appendChild(liCard);
    });
};

