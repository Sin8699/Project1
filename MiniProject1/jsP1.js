var resultButton = (input) => {
    if (input == true)
        document.getElementById("inputCouter").value = parseInt(document.getElementById("inputCouter").value) + 1;
    else
        document.getElementById("inputCouter").value = parseInt(document.getElementById("inputCouter").value) - 1;
    dkf;
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