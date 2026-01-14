document.getElementsByName('addCount')[0].onclick = function () {
    let counterElement = document.getElementById('Counter');
    let currentCount = parseInt(counterElement.innerText);
    counterElement.innerText = currentCount + 1;
};

function animateButton() {
    var button = document.getElementById('addButton');
    button.classList.add('animate');

    setTimeout(function () {
        button.classList.remove('animate');
    }, 300);
}

document.getElementById('addButton').addEventListener("click", animateButton);

document.getElementById('skills').innerHTML = skills.map(skill => '<li>' + skill + '</li>').join('');