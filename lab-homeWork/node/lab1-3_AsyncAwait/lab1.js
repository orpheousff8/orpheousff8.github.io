const getLetter = (letter, msec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(letter);
            resolve();      //เหมือน return
            //reject('it's error');     //return เมื่อ error
        }, msec);
    });
}

const getResult = async () => {
    try {
        await getLetter('a', 1000);
        await getLetter('b', 1000);
        await getLetter('c', 1000);
        await getLetter('d', 1000);
    }
    catch (err) {
        console.log(err);
    }
}

getResult();

//IIFE

(async () => {
    try {
        await getLetter('a', 1000);
        await getLetter('b', 1000);
        await getLetter('c', 1000);
        await getLetter('d', 1000);
    }
    catch (err) {
        console.log(err);
    }
}) ();


// ใช้ async/await แล้วทำให้สามารถได้ผลลัพท์แบบด้านล่าง
// ผ่านไป 1 วินาทีแล้ว console.log(‘a’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘b’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘c’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘d’)