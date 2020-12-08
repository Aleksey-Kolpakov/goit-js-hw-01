let credits = 23580;
const pricePerDroid = 3000;
const amount = prompt('Введите количество ремонтных дроидов, которые желаете заказать');
if (amount === null || Number.isNaN(Number(amount))) {
    console.log('Для заказа дроидов Вам нужно ввести число');

} else {
    const totalPrice = pricePerDroid * amount;
    if (credits < totalPrice) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits = credits - totalPrice;
        console.log(`Вы купили ${amount} единиц дроидов, на счету осталось ${credits} кредитов.`);
    }
}