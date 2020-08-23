function fn2254() {
    let txt = ``;
    for (let i = 2; i < 11; i++) {
        txt += i + ` `;
    }
    alert(txt);
}

function fn2255() {
    let i = 0;
    while (i < 3)
    {
        alert( `number ${i}!` );
        i++;
    }
}

function fn2256() {
    let player1Int = 0, player2Int=0;
    while (true)
    {
        player1Int = validator(1);
        if(player1Int!=undefined)
            break;
    }
    while (true)
    {
        player2Int = validator(2);
        if(player2Int!=undefined)
        {
            if (player2Int == player1Int)
            {
                alert(`ทายถูก!`);
                break;
            }
            else if (player2Int > player1Int)
            {
                alert(`เลขที่ผู้เล่น 2 ทาย มากกว่า เลขของผู้เล่น 1`);
            }
            else
            {
                alert(`เลขที่ผู้เล่น 2 ทาย น้อยกว่า เลขของผู้เล่น 1`);
            }
        }
    }
}
function validator(player) {
    let input = prompt(`ผู้เล่น ${player} กรุณาใส่เลข 1 - 100`);
    if (input == `` || input == null)
    {
        alert(`ไม่ใส่ข้อมูล`);
        return;
    }
    let n = Number(input);
    if ((n<1) || (n>100) || !Number.isInteger(n))
    {
        alert(`ใส่เลขไม่ถูกต้อง`);
        return;
    }
    else
        return n;
}