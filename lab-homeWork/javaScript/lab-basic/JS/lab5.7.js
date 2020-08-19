document.getElementById('ans1').innerHTML += String(5 > 4);
document.getElementById('ans2').innerHTML += String(`apple` > `pineapple`);
document.getElementById('ans3').innerHTML += String(`2` > `12`);
document.getElementById('ans4').innerHTML += String(undefined == null);
document.getElementById('ans5').innerHTML += String(undefined === null);
document.getElementById('ans6').innerHTML += String(`bee` < `be`);
document.getElementById('ans7').innerHTML += String(`bee` > `Bee`);
document.getElementById('ans8').innerHTML += String(`Bee` < `be`);

let spans = document.getElementsByTagName('span');
    for (var i = 0; i < spans.length; i++) {
        let span = spans[i];
        if (span.textContent == 'true') {
            span.style.color = 'green';
        }
        if (span.textContent == 'false') {
            span.style.color = 'red';
        }
    } 