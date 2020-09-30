const getLetter = (letter, msec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(letter));
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
