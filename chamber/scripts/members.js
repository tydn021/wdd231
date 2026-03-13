const dataSource = "data/members.json";

let allMembers = [];

async function getMemberData() {
    const response = await fetch(dataSource);
    const data = await response.json();
    allMembers = data.members;
    
    displayMemberGrid(allMembers);
}

const displayMemberGrid = (members) => {
    const cards = document.querySelector('#cards');
    members.forEach((member) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');

        
        logo.setAttribute('src', member.imgurl);
        logo.setAttribute('alt', `logo of ${member.companyname}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', '440');
        address.textContent = `${member.companyaddress}`;
        phone.textContent = `${member.phonenum}`;
        url.textContent = `${member.url}`;
        

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        

        cards.appendChild(card);
    });
}

const displayMemberTable = (members) => {
    const memberTable = document.querySelector('#cards');
    let table = document.createElement("table");
    members.forEach((member) => {
        let row = document.createElement("tr");
        let companyName = document.createElement("td");
        let address = document.createElement("td");
        let phoneNumber = document.createElement("td");
        let url = document.createElement("td");
        let memberLevel = document.createElement("td");

        companyName.textContent = `${member.companyname}`;
        address.textContent = `${member.companyaddress}`;
        phoneNumber.textContent = `${member.phonenum}`;
        url.textContent = `${member.url}`;
        memberLevel.textContent = `${member.memberlevel}`;

        row.appendChild(companyName);
        row.appendChild(address);
        row.appendChild(phoneNumber);
        row.appendChild(url);
        row.appendChild(memberLevel);

        table.appendChild(row);

        memberTable.appendChild(table);
    });
}

const gridLink = document.querySelector("#grid");

gridLink.addEventListener("click", (event)=> {
	event.preventDefault();

	document.querySelector("#cards").innerHTML = "";

	displayMemberGrid(allMembers);
})

const tableLink = document.querySelector("#table");

tableLink.addEventListener("click", (event)=> {
	event.preventDefault();

	document.querySelector("#cards").innerHTML = "";

	displayMemberTable(allMembers);
})


getMemberData();