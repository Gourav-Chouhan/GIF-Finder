let gifiAPI = "https://api.giphy.com/v1/gifs/search?api_key=c0BENqqI5NSyrufRLp6LYVEZLc6Bki0T&q=&limit=1&offset=0&rating=g&lang=en";

async function getGif(n) {
    const response = await fetch(gifiAPI);
    const s = await response.json()
    console.log(s.data)
    for (let i = 0; i < n; i++) {
        let img = document.createElement('img');
        img.src = s.data[i].images.preview_gif.url;
        img.width = 300;
        img.height = 200;
        img.style.margin = 20;
        img.style.borderWidth = 5;
        document.body.appendChild(img)
    }
}

function change() {
    let images = document.getElementsByTagName('img');
    for (let i = images.length - 1; i >= 0; i--) {
        images[i].remove();
    }
    let input = document.getElementById("input").value;
    input = (input) ? input : "doraemon";
    let numOfImage = document.getElementById("numOfImage").value;
    numOfImage = (numOfImage) ? numOfImage : 5;
    gifiAPI = `https://api.giphy.com/v1/gifs/search?api_key=c0BENqqI5NSyrufRLp6LYVEZLc6Bki0T&q=${input}&limit=${numOfImage}&offset=0&rating=g&lang=en`
    getGif(numOfImage);
}

window.onload = () => {
    if (window.innerWidth < 600) {
        document.getElementById('search').style.flexDirection = "column";
    } else {
        document.getElementById('search').style.flexDirection = "row";

    }
}

window.onresize = () => {
    if (window.innerWidth < 600) {
        document.getElementById('search').style.flexDirection = "column";
        document.getElementById('search').style.justifyContent = "center";
    } else {
        document.getElementById('search').style.flexDirection = "row";
        document.getElementById('search').style.justifyContent = "center";
    }
}