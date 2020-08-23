for(i=1;i<25;i++)
{
    if(i==16)
        document.getElementById('topic').innerHTML += String(`<li>ไม่มีข้อนี้</li>`);
    else
        document.getElementById('topic').innerHTML += String(`
            <li>
                <img width="500px" src="./img/2.extra.${i}.JPG"><br>
                <button onclick="fn2extra${i}()">Click here</button>
            </li>`);
}

function fn2extra1 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        txt += `*`;
    }
    alert(txt);
}

function fn2extra2 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            txt += `*`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra3 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            txt += j+1;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra4 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            txt += i+1;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra5 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            txt += n-i;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra6 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    let x=0;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            txt += ++x;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra7 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    let x=n*n;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            txt += x--;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra8 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        txt += `${2*i}\n`
    }
    alert(txt);
}

function fn2extra9 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=1; i<=n; i++)
    {
        txt += `${2*i}\n`
    }
    alert(txt);
}

function fn2extra10 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=1; i<=n; i++)
    {
        for (j=1; j<=n; j++)
        {
            txt += i * j;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra11 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            if(i==j)
                txt+=`-`
            else
                txt += `*`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra12 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            if(j==(n-i-1))
                txt+=`-`
            else
                txt += `*`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra13 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<i+1; j++)
        {
            txt += `*`;
        }
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra14 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n-i; j++)
        {
            txt += `*`;
        }
        for (j=0; j<i; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra15 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<i+1; j++)
        {
            txt += `*`;
        }
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    for (i=n-2; i>-1; i--)
    {
        for (j=0; j<i+1; j++)
        {
            txt += `*`;
        }
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra17 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=n-1; i>-1; i--)
    {
        for (j=0; j<i; j++)
        {
            txt += `-`;
        }
        for (j=0; j<n-i; j++)
        {
            txt += `*`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra18 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=n-1; i>-1; i--)
    {
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        for (j=0; j<i+1; j++)
        {
            txt += `*`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra19 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=n-1; i>-1; i--)
    {
        for (j=0; j<i; j++)
        {
            txt += `-`;
        }
        for (j=0; j<n-i; j++)
        {
            txt += `*`;
        }
        txt += `\n`;
    }
    for (i=1; i<n; i++)
    {
        for (j=0; j<i; j++)
        {
            txt += `-`;
        }
        for (j=0; j<n-i; j++)
        {
            txt += `*`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra20 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    let k = 0;
    for (i=n-1; i>-1; i--)
    {
        for (j=0; j<i; j++)
        {
            txt += `-`;
        }
        for (j=0; j<n-i; j++)
        {
            txt += ++k;
        }
        txt += `\n`;
    }
    for (i=1; i<n; i++)
    {
        for (j=0; j<i; j++)
        {
            txt += `-`;
        }
        for (j=0; j<n-i; j++)
        {
            txt += ++k;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra21 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        for (j=0; j<2*i+1; j++)
        {
            txt += `*`;
        }
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra22 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=n; i>0; i--)
    {
        for (j=0; j<n-i; j++)
        {
            txt += `-`;
        }
        for (j=0; j<2*i-1; j++)
        {
            txt += `*`;
        }
        for (j=0; j<n-i; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra23 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        for (j=0; j<2*i+1; j++)
        {
            txt += `*`;
        }
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    for (i=n-1; i>0; i--)
    {
        for (j=0; j<n-i; j++)
        {
            txt += `-`;
        }
        for (j=0; j<2*i-1; j++)
        {
            txt += `*`;
        }
        for (j=0; j<n-i; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function fn2extra24 () 
{
    let n = validator();
    if (n < 0)
        return;
    let txt = ``;
    let k=0;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        for (j=0; j<2*i+1; j++)
        {
            txt += ++k;
        }
        for (j=0; j<n-i-1; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    for (i=n-1; i>0; i--)
    {
        for (j=0; j<n-i; j++)
        {
            txt += `-`;
        }
        for (j=0; j<2*i-1; j++)
        {
            txt += ++k;
        }
        for (j=0; j<n-i; j++)
        {
            txt += `-`;
        }
        txt += `\n`;
    }
    alert(txt);
}

function validator() {
    let input = prompt(`Enter n`);
    if (input == ``)
    {
        alert(`Error: ไม่ใส่จำนวน`);
        return -1;
    }
    if (input == null)
    {
        // alert(`ยกเลิก`);
        return -1;
    }
    let n = Number(input);
    if (!Number.isInteger(n))
    {
        alert(`Error: ไม่ใส่จำนวนเต็ม`);
        return -1;
    }
    return n;
}