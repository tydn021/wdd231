const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('org-name'));
console.log(myInfo.get('timestamp'));
console.log(myInfo.get('membership-level'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));


document.querySelector('#results').innerHTML = `
<p>Member: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Business: ${myInfo.get('org-name')}</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your Email: ${myInfo.get('email')}</p>
<p>Your Membership Level: ${myInfo.get('membership-level')}</p>
<p>${myInfo.get('timestamp')}</p>
`;

