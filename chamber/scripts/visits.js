const msInDay = 86400000;

let today = Date.now();

let lastVisit = localStorage.getItem("last-visit-date");

const visits = document.querySelector('#visits')

if(lastVisit === null) {

    visits.textContent = `Welcome! We hope you enjoy visiting this website!`;
}
else {
        let currentVisits = today - Number(lastVisit);

        if(currentVisits < msInDay) {
            visits.textContent = `You're back so soon! We're so glad!`;
        }
        else {
            let day = Math.floor(currentVisits / msInDay);

            if(day === 1){
                visits.textContent = `It's been one day since you've last visited!`;
            }

            if(day > 1) {
                visits.textContent = `It's been ${day} days since you've last visited!!`;
            }

            
        }
    };

localStorage.setItem("last-visit-date", today);

