var arrProductWith = [{
    source: "./C1.png",
    name: "Móc khóa cái ôm",
    size: null,
    price: "95,000 đ"
}, {
    source: "./C2.png",
    name: "Sổ tay bìa gỗ",
    size: "Kích thước M",
    price: "345,000 đ"
}, {
    source: "./C3.png",
    name: "Móc khóa",
    size: "Kích thước M",
    price: "125,000 đ"
}]

var arrProducSeen = [{
    source: "./S1.png",
    name: "Sổ tay bìa gỗ",
    size: "Kích thước M",
    price: "345,000 đ"
}, {
    source: "./S2.png",
    name: "Sổ tay bìa gỗ",
    size: "Kích thước M",
    price: "345,000 đ"
}, {
    source: "./S3.png",
    name: "Sổ tay bìa gỗ",
    size: "Kích thước M",
    price: "345,000 đ"
}, {
    source: "./S4.png",
    name: "Sổ tay bìa gỗ",
    size: "Kích thước M",
    price: "345,000 đ"
}]

var resultButton = (input) => {
    if (input == true)
        document.getElementById("inputCouter").value = parseInt(document.getElementById("inputCouter").value) + 1;
    else
        document.getElementById("inputCouter").value = parseInt(document.getElementById("inputCouter").value) - 1;
}


var addStore = (type = 1) => {
    if (type == 1)
        document.getElementById("Store").textContent = parseInt(document.getElementById("Store").textContent) + 1;
    else
        document.getElementById("Store").textContent = parseInt(document.getElementById("Store").textContent) + parseInt(document.getElementById("inputCouter").value);
}




var swapImg = (index) => {
    item1 = document.getElementById("img" + index).src;
    item2 = document.getElementById("imgMain").src;
    document.getElementById("imgMain").src = item1;
    document.getElementById("img" + index).src = item2;
}

//var exchangeProduct = (type, button) => {
//type :1
// if (type == 1) {
//     if (button == true) {
//         item = arrProductWith.shift();
//         arrProductWith.push(item);
//     } else {
//         item = arrProductWith.pop();
//         arrProductWith.unshift(item);
//     }
//     loadProduct(type, arrProductWith);
// } else { //type :2
//     if (button == true) {
//         item = arrProducSeen.shift();
//         arrProducSeen.push(item);
//     } else {
//         item = arrProducSeen.pop();
//         arrProducSeen.unshift(item);
//     }
//     loadProduct(type, arrProducSeen);
// }

//}
var exchangeProduct = (id, button) => {
    item = document.getElementById(id);
    if (button == true) {
        let removed = item.removeChild(item.firstElementChild);
        item.appendChild(removed);
    } else {
        let removed = item.removeChild(item.lastElementChild);
        item.insertBefore(removed, item.firstElementChild);
    }
}

function loadProduct(type, arr) {
    let i = 0;
    arr.forEach(element => {
        for (let key in element) {
            if (key == "source")
                document.getElementById((type + key + i).toString()).src = element[key];
            else
                document.getElementById((type + key + i).toString()).textContent = element[key];
        }
        i++;
    });
}

var loadData = () => {
    loadProduct(1, arrProductWith);
    loadProduct(2, arrProducSeen);
}


const slideWith = document.querySelector('#slide');
//Buttons
const preWith = document.querySelector('#pre');
const nexWith = document.querySelector('#next');

//Counter
let counter = 0;
const size = 410;
let len = 3;


preWith.addEventListener('click', () => {
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


});
nexWith.addEventListener('click', () => {
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

slideWith.addEventListener('transitionend', () => {
    console.log(counter);
    if (counter < 0) {
        slide.style.transition = "none";
        counter = len - 1;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (counter >= len) {
        slide.style.transition = "none";
        counter = 0;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

//SEEN

const slideS = document.querySelector('#slideSeen');
//Buttons
const prevS = document.querySelector('#prevSeen');
const nextS = document.querySelector('#nextSeen');

//Counter
let counterS = 0;
const sizeS = 300;
let lenS = 4;


prevS.addEventListener('click', () => {
    slideS.style.transition = "transform 0.4s ease-in-out";
    counterS--;
    slideS.style.transform = 'translateX(' + (-sizeS * counterS) + 'px)';


});
nextS.addEventListener('click', () => {
    slideS.style.transition = "transform 0.4s ease-in-out";
    counterS++;
    slideS.style.transform = 'translateX(' + (-sizeS * counterS) + 'px)';

})

slideS.addEventListener('transitionend', () => {
    if (counterS < 0) {
        slideS.style.transition = "none";
        counterS = lenS - 1;
        slideS.style.transform = 'translateX(' + (-sizeS * counterS) + 'px)';
    }
    if (counterS >= lenS) {
        slideS.style.transition = "none";
        counterS = 0;
        slideS.style.transform = 'translateX(' + (-sizeS * counterS) + 'px)';
    }
})