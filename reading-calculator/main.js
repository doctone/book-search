// find a way to get information about page numbers of books
// calculate days to read if 10 pages a day etc

function getPagesPerDay() {
    event.preventDefault();
    const today = new Date();
    const deadline = new Date(document.getElementById("date").value);
    const msPerDay = 24 * 60 * 60 * 1000;
    let daysLeft = (deadline.getTime() - today.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft)
    if (Number.isNaN(daysLeft)){
        document.getElementById("displayText").innerHTML = "Please enter a valid date."
    } else if (daysLeft < 0) {
        document.getElementById("displayText").innerHTML = "A date in the future, wise guy.."
    }
    else {
        document.getElementById("displayText").innerHTML = `That's <em>${daysLeft}</em> days away.`}
}

