let input;
let total = 0;
// console.log(typeof total);
while (true) {
    input = prompt('Введите число, для суммирования Отмена- остановит процесс');
    if (input!==null) {
        total += Number(input);
    } else {
        alert(`Общая сумма чисел равна ${total}`);
        break;
        
    }
}