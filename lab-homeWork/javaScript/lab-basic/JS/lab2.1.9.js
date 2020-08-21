function fn2195() {
    let username = prompt(`Please enter username:`, `Admin`);
    if (username == `` || username == null) {
        alert(`ยกเลิก`);
    }
    else if (username != `Admin`) {
        alert(`ผมไม่รู้จักคุณ`);
    }
    else {
        let password = prompt(`Please enter password:`);
        if (password == `` || password == null) {
            alert(`ยกเลิก`);
        }
        else if (password == `codecamp#5`) {
            alert(`ยินดีต้อนรับ`);
        }
        else {
            alert(`รหัสผ่านผิด`);
        }
    }
}