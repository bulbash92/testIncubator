let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let arr = [
    {name: 'nik',
    age: 12},
    {name: 'mike', 
    age: 18},
    {name: 'djonni',
    age: 15}
];
// клики сразу с задержкой
searchButton.addEventListener('click', (event)=> {
    
    if(searchInput.value == 'google') {
    setTimeout(()=> alert('Yandex круче.Но это не точно'), 3000);
    } else  {
    setTimeout(()=> alert(searchInput.value), 3000);
    };
    for(i = 0; i<arr.length; i++) {
        setTimeout(() => alert(arr[i].name), 3000);
        if(i===0) break
    }
})

let superSum =  function(one, two)  {
    sum = one + two;
    
    return sum;
}
console.log(superSum(1, 4))

//поиск максимального и минимального числа массива
let numbers = [5, 34, 55, 65, 2,202, 4, 11];
let min = numbers[0];
let max;
function findMax(arr) {
    for (i = 0; i< arr.length; i++) {
        for(j=1; j<arr.length; j++) {
            if(arr[i] < min) {
                min = arr[i];
            } else if (arr[i]<arr[j]) {
                max = arr[j];
            }
        }
        
        
    } return 'макc элемент: ' + max + ' мин элем: '+min;
}
findMax(numbers);


//меняем местами 
let a = 44;
let b = 5;
[a, b] = [b, a];
console.log(a, b);

