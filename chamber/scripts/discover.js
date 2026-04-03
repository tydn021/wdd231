import {places} from "../data/places.mjs"

console.log(places);

const showAll = document.querySelector('#allplaces');

function displayPlaces(places) {
    places.forEach(item => {
        const placeCard = document.createElement('div');
        const img = document.createElement('img');   
        img.src = `images/${item.photo_url}`;
        img.alt = item.name;
        img.loading = 'lazy';

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

        showAll.appendChild(placeCard);
    });
}

displayPlaces(places);