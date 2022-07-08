let firstSentence = document.getElementById("First-sentence")
firstSentence.textContent = 'EBONY BEAUTY'
let FirstPara = document.getElementById("First-para")
FirstPara.innerText = 'God made Variety of things and he made this things differently.  Your beauty is something money cant buy. They say beauty lays in the eye of the beholder'
function btn() {
    alert( prompt('type your name')+ ' '+ 'thank you , site is still underconstruction')
}
let para= document.getElementById("para-under-section-1a")
para.textContent = 'Lots of questions have been asked on how can you make money off yourself, Your beauty and all that. Little wonder lots of people have asked how could they enter thethe modelling space.  it csn be argued that beauty is subjective but in objective terms people understand what beauty, cute etc, means'
let year = new Date();
let foot = document.getElementById("footer")
foot.innerHTML = '<p>COPYRIGHT &copy :ADEYENI DEARBORN ' + year.getFullYear() + '</p>'
const timeAndDate = document.getElementById('timeAndDate')
const forDate = document.getElementById("forDate")
/**
* @param {Date} date
*/

function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12; // boolean value . if its true, its AM
    return `${hours12.toString().padStart(2,"0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}
/**
* @param {Date} date
*/
function formatDate(date) {
    const DAYS = ['Sunday' , 'Monday' , 'Tuesday ' , 'Wednesday ', 'Thursday' ,  ' Friday', 'Saturday '];
    const Months = ['January', ' February', 'March', 'April ', 'May ' , 'June ' ,  'July' , 'August ' , 'September' , 'October' , 'November' , 'December'];
    return `${DAYS[date.getDay()]}, ${Months[date.getMonth()]}, ${date.getFullYear()}`;
}
setInterval(() => {
   const now = new Date() ;
   timeAndDate.textContent = formatTime(now)
   forDate.textContent = formatDate(now)
}, 200);