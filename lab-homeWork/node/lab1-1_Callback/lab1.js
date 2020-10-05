setTimeout(() => {
    console.log('a');
    setTimeout(() => {
        console.log('b');
        setTimeout(() => {
            console.log('c');
            setTimeout(() => {
                console.log('d');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// ใช้ setTimeout เพื่อให้ console.log(‘a’) เมื่อเวลาผ่านไป 1 วินาที
// (ต่อจากข้อ 1) เมื่อ console.log(‘a’) เสร็จ ให้ทำการ console.log(‘b’) เมื่อเวลาผ่านไป 1 วินาที
// (ต่อจากข้อ 2) เมื่อ console.log(‘b’) เสร็จ ให้ทำการ console.log(‘c’) เมื่อเวลาผ่านไป 1 วินาที
// (ต่อจากข้อ 3) เมื่อ console.log(‘c’) เสร็จ ให้ทำการ console.log(‘d’) เมื่อเวลาผ่านไป 1 วินาที