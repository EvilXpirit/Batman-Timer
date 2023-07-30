const endDate = "29 july 2023 12:00:00 PM" //const is used for variable declaration and endDate is a variable
// const endDate2 = new Date('29 june 2022 10:25 PM')

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = {} => {
        
// }

// creating a function using traditional way
// we will use date object of java.... this is used to make time stamp of dates from 1970 to the current date or desired date
function clock() {
    const end = new Date(endDate) // end variable will show the end date that we have given
    const now = new Date()  // now variable will show the current date
    // const days = endDate2.getDate()
    // console.log(days)
    // console.log(end);
    // console.log(now);
    const diff = (end - now) / 1000; // calculate difference and convert it to sec from mili sec
    if (diff < 0) return; // if timer reaches zero then it will not go in minus and be stuck on 0
    // console.log(diff)
    inputs[0].value = Math.floor(diff / 3600 /24); // diff will be converted to hours after dividing with 3600 and then days after with 24
    inputs[1].value = Math.floor((diff / 3600) % 24);  // remaider with 24 will give the left over hours
    inputs[2].value = Math.floor((diff / 60) % 60);  // remaider with 60 will give the left over minutes
    inputs[3].value = Math.floor(diff % 60);
    // this will convert diff to hours, mins and sec and place it in the value indexes
}   

//initial call
clock()

setInterval(
    () => {
        clock()
    },
    1000
)

/**
 * 1 day = 24 hours
 * 1 hr = 60 mins
 * 60 mins = 3600 sec
 * 1 sec = 1000 minisec
 */