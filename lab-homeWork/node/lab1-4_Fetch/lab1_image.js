const getImage = async () => {
    try {
        const response = await fetch(`https://mdn.github.io/fetch-examples/basic-fetch/`);
        const data = await response.blob();
        console.dir(data);
    } catch (err) {
        console.log(err);
    }
}