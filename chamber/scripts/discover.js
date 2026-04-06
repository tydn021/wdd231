import {places} from "../data/places.mjs"

console.log(places);

const showAll = document.querySelector('#allplaces');

function displayPlaces(places) {

    let fragment = document.createDocumentFragment();

    places.forEach((item, index) => {
        const placeCard = document.createElement('div');
        const img = document.createElement('img');   

        if(index === 0){
            img.setAttribute('fetchpriority', 'high')
        }
        else{
            img.setAttribute('loading', 'lazy');
        };
        img.src = `images/${item.photo_url}`;
        img.alt = item.name;
        img.setAttribute('width', '400');
        img.setAttribute('height', '300');
        img.classList.add('hover');

        placeCard.appendChild(img);

        const title = document.createElement('h2');
        title.innerText = item.name;

        placeCard.appendChild(title);

        const placeAddress = document.createElement('address');
        placeAddress.innerText = item.address;
        
        placeCard.appendChild(placeAddress);

        const desc = document.createElement('p');
        desc.innerText = item.description;

        placeCard.appendChild(desc);

        fragment.appendChild(placeCard);
    });

    showAll.appendChild(fragment);
}

displayPlaces(places);