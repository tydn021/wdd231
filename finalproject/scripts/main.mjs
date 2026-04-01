import {getHouseData, displayHouses} from './housefetch.mjs';

const houses = await getHouseData();

displayHouses(houses);