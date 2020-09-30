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
            resolve(console.log(letter));
        }, msec);
    });
}

getLetter('a', 1000)
    .then(() => getLetter('b', 1000))
    .then(() => getLetter('c', 1000))
    .then(() => getLetter('d', 1000));

