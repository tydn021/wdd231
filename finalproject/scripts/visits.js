const msInDay = 86400000;

let today = Date.now();

let lastVisit = localStorage.getItem("last-visit-date");

const visits = document.querySelector('#visits')

if(lastVisit === null) {

    visits.textContent = `Welcome! Take a look at the history of one of America's most iconic architectural styles!`;
}
else {
        let currentVisits = today - Number(lastVisit);

        if(currentVisits < msInDay) {
            visits.textContent = `You're back so soon! We're so glad! Maybe consider taking a tour of Carmel by the Sea!`;
        }
        else {
            let day = Math.floor(currentVisits / msInDay);

            if(day === 1){
                visits.textContent = `It's been one day since you've last visited! Are you interested i our tour`;
            }

            if(day > 1) {
                visits.textContent = `It's been ${day} days since you've last visited! Ify ou're this interested you should take our tour!`;
            }

            
        }
    };

localStorage.setItem("last-visit-date", today);

