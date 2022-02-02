const main = document.querySelector('.main');
const cardContainer = document.querySelector('.cardContainer');
const buttonContainer = document.querySelector('.buttonContainer');
const shuffleBtn = document.getElementById('#shuffle')
const sortBtn = document.getElementById('#sort')


let arr = [1,2,3,4,5,6,7,8,9]
let sorted = true;

function shuffleArray(arr){
    let currIndex = arr.length, randomIndex;
    let shuffledArray = [...arr]

    while(currIndex != 0){
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex--;

        [shuffledArray[currIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currIndex]];
    }

    return shuffledArray;
}

// console.log(shuffleArray(arr))

function generateRandomColor(){
    let colors = ['#333333','#6f98a8','#72c3dc']
    let color = colors[Math.floor(Math.random() * colors.length)]

    return color
}

function createCard(num){
    let div = document.createElement('div'),
    span = document.createElement('span')
    span.textContent = num

    div.classList.add('card')
    div.style.backgroundColor = generateRandomColor()
    div.appendChild(span)

    return div;
    
}

function renderArray(arr){

    cardContainer.innerHTML = '';

    arr.forEach((num)=>{
        cardContainer.appendChild(createCard(num))
    })
}

function sortArray(){
    sorted=true;
    return arr.sort();
}

shuffleBtn.addEventListener('click', ()=>{
    sorted = false;
    renderArray(shuffleArray(arr));
})

sortBtn.addEventListener('click', ()=>{
    if(sorted){
        alert('Already Sorted!')
        return;
    }
    renderArray(sortArray(arr));
})

renderArray(arr)