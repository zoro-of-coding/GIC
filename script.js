const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const eventDates = {
    "1-25": "Recycle Campaign",
    "4-22": "Earth Day"
};
const daysContainer = document.getElementById("daysContainer");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let date = new Date();

function renderCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${monthNames[month]} ${year}`;

    daysContainer.innerHTML = "";
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty");
        daysContainer.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;

        const eventKey = `${month + 1}-${day}`;
        if (eventDates[eventKey]) {
            dayDiv.classList.add("event");
            dayDiv.title = eventDates[eventKey];
        }

        daysContainer.appendChild(dayDiv);
    }
}

prevMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
