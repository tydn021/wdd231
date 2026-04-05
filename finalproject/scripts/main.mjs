import {getHouseData, displayHouses} from './housefetch.mjs';

const houses = await getHouseData();

const allLink = document.querySelector("#all");

allLink.addEventListener("click", (event)=> {
	event.preventDefault();

	document.querySelector(".res-grid").innerHTML = "";

	displayHouses(houses);
})

const cseLink = document.querySelector("#old");

cseLink.addEventListener("click", (event)=> {
	event.preventDefault();

    document.querySelector(".res-grid").innerHTML = "";

    const oldHouses = houses.filter(house => {
        return house.yeardone < 1980;
    })

    displayHouses(oldHouses);
})

const wddLink = document.querySelector("#new");

wddLink.addEventListener("click", (event)=> {
	event.preventDefault();

    document.querySelector(".res-grid").innerHTML = "";

    const newHouses = houses.filter(house => {
        return house.yeardone >= 1980;
    })

    displayHouses(newHouses);
})

displayHouses(houses);