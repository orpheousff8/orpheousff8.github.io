function fn651() {
    if ("0") {
        alert('Hello Codecamp #5');
    }
}
function fn652() {
    let myName = prompt("ชื่อของคุณคือ", "Saracha");

    if (myName == 'Saracha')
        alert('เก่งมาก');
    else
        alert('คุณไม่รู้จักชื่อฉัน');
}
function fn653() {
    let myScore = Number(prompt("คะแนนของคุณคือ"));

    if (myScore >= 80)
        alert('A');
    else if (myScore >= 70)
        alert('B');
    else if (myScore >= 60)
        alert('C');
    else if (myScore >= 50)
        alert('D');
    else
        alert('F');
}
function fn654() {
    let age = prompt('How old are you?');
    let price = (age < 18) ? 2000 : 3500;
    alert(price);
}