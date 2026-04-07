const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('address'));
console.log(myInfo.get('timestamp'));
console.log(myInfo.get('tour-level'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));


document.querySelector('#results').innerHTML = `
<p><b>Member</b>: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p><b>Business</b>: ${myInfo.get('address')}</p>
<p><b>Your Phone</b>: ${myInfo.get('phone')}</p>
<p><b>Your Email</b>: ${myInfo.get('email')}</p>
<p><b>Your Tour Length</b>: ${myInfo.get('tour-level')}</p>
<p>${myInfo.get('timestamp')}</p>
`;

