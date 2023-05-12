// Creo array con oggetti al suo interno
const team = [
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & Ceo',
        'photo' : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'photo' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'photo' : 'walter-gordon-office-manager.jpg'
    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'photo' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'photo' : 'scott-estrada-developer.jpg'
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'photo' : 'barbara-ramos-graphic-designer.jpg'
    }
]

// Genero variabile collegata a id container nel DOM
const elContainer = document.getElementById('container');


// Ciclo l'array con for
for(let i = 0; i < team.length; i++){
    const teamIesimo = team[i];
 
    // Creato elemento div classe col-4 e lo appendo a elContainer
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-4');
    elContainer.append(colDiv);

    // Creato elemento div classe card e lo appendo a div col-4
    const newCard = document.createElement('div');
    newCard.classList.add('cards');
    colDiv.append(newCard);

    // Creato elemento div per innerHTML immagine oggetto, lo appendo a div cards
    const imgCard = document.createElement('div');
    newCard.append(imgCard);
    imgCard.innerHTML = `<img src="img/${teamIesimo.photo}">`;

    // Creato elemento h5 per nome oggetto e appendo a div cards
    const newElementName = document.createElement('h5');
    newCard.append(newElementName);
    newElementName.append(teamIesimo.name);

    // Creato elemento div per ruolo oggetto e appendo a div cards
    const newElementRole = document.createElement('div');
    newCard.append(newElementRole);
    newElementRole.append(teamIesimo.role);

}
    