const baseURL = 'https://api.github.com';

export const userRepositoriesInfo = async () => {
    const userValue = localStorage.getItem('userName');
    let infoRepository = {};

    const userRepository = await fetch(`${baseURL}/users/${userValue}/repos`, {
        method: 'GET'
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Não foi possível acessar a informação de repositórios');
        }
        return response.json();
    })
    .then(userRepository => {
        const repositoryMap = userRepository.map(repository => {
            infoRepository = {};
            if(repository.description === null) {
                return infoRepository = {
                    "name": repository.name, 
                    "description": "OBS: Este desenvolvedor ainda não postou uma descrição para este repositório", 
                    "url": repository.html_url
                };
            };
            return infoRepository = {
                "name": repository.name, 
                "description": repository.description, 
                "url": repository.html_url
            };
        });
        localStorage.setItem('respositoryList', JSON.stringify(repositoryMap));
        location.replace('./src/pages/profile.html'); 
    })
    .catch(error => {
        console.error(error);
    })

    return userRepository;
};

export const userProfileInfo = async () => {
    const userValue = localStorage.getItem('userName');

    const userProfile = await fetch(`${baseURL}/users/${userValue}`, {
        method: 'GET'
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Não foi possível acessar o usuário');
        }
        return response.json();
    })
    .then(user => {
        const userTittle = localStorage.setItem('userTittle', user.name);
        const userImage = localStorage.setItem('userImage', user.avatar_url);
    })
    .catch(error => {
        console.error(error);
        return location.replace('./src/pages/error.html');
    })

    return userProfile;
};