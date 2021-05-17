const h4El = document.createElement("h4");
const date = new Date().toDateString();
h4El.innerHTML = date;
console.log(date);
document.body.append(h4El);
