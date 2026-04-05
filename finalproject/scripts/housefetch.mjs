const houseData = "data/houses.json";

export async function getHouseData() {
    try 
    {const response = await fetch(houseData);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      return data.houses; }
     else {
        throw Error(await response.text());
     }
  } 
  catch (error) {
      console.log(error);
  }
}

export const displayHouses = (houses) => {
    const cards = document.querySelector('#cards');
    houses.forEach((house, index) => {
        let card = document.createElement("section");
        let portrait = document.createElement("img");
        let houseName = document.createElement('h3');
        let year = document.createElement('p');
        let arch = document.createElement('p');
        let desc = document.createElement('p');

        if(index === 0){
            portrait.setAttribute('fetchpriority', 'high')
        }
        else{
            portrait.setAttribute('loading', 'lazy');
        };

        portrait.setAttribute('src', house.img);
        portrait.setAttribute('alt', `Portrait of ${house.name}`);
        portrait.setAttribute('height', '440');
        houseName.textContent = `${house.name}`;
        year.textContent = `Year Completed: ${house.yeardone}`;
        arch.textContent = `Architect: ${house.architect}`;
        desc.textContent = `${house.description}`;

        card.appendChild(portrait);
        card.appendChild(houseName);
        card.appendChild(year);
        card.appendChild(arch);
        card.appendChild(desc);

        cards.appendChild(card);
    })
}