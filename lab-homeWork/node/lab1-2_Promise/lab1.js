//Promise hell

new Promise((resolve) =>
    setTimeout(() => {
        resolve(console.log('a'));
    }, 1000)).then(() => {
        new Promise((resolve) =>
            setTimeout(() => {
                resolve(console.log('b'));
            }, 1000)).then(() => {
                new Promise((resolve) =>
                    setTimeout(() => {
                        resolve(console.log('c'));
                    }, 1000)).then(() => {
                        new Promise((resolve) =>
                            setTimeout(() => {
                                resolve(console.log('d'));
                            }, 1000));
                    });
            });
    });

//Fixing Promise hell, but got .then nested issues

const getLetter = (letter, msec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(letter);
            resolve();      //เหมือน return
            //reject('it's error');     //return เมื่อ error
        }, msec);
    });
}

getLetter('a', 1000)
    .then(() => getLetter('b', 1000))
    .then(() => getLetter('c', 1000))
    .then(() => getLetter('d', 1000))
    .catch((error) => console.log(error));

    
// ทำ ใช้ setTimeout เพื่อให้ console.log(input) เมื่อเวลาผ่านไป 1 วินาที เป็น Promise ที่ชื่อ function ว่า setTimeoutAndLog(input) แล้วลองเรียกใช้ดู
// ใช้ Promise จากข้อที่ 1 แล้วทำให้สามารถได้ผลลัพท์แบบเดียวกันกับ Lab ก่อนหน้า 
// ผ่านไป 1 วินาทีแล้ว console.log(‘a’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘b’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘c’)
// ผ่านไป 1 วินาทีแล้ว console.log(‘d’)