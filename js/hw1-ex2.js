const ordered = prompt('Введите количество товаров, которые желаете заказать');
const total = 100;
const answer = ordered > total ? `на складе недостаточно твоаров! К заказу доступно ${total} единиц` : `Заказ оформлен, с вами свяжется менеджер`;
console.log(answer);

