let country = prompt('Введите название страны в котрую желаете оформить доставку');
let price;
if (country === null) {
    console.log('Вы отменили рассчет доставки');

} else {


    switch (country.toLowerCase()) {

        case 'китай':
            country = 'Китай';
            price = 100;
            break;

        case 'чили':
            country = 'Чили';
            price = 250;
            break;

        case 'австралия':
            country = 'Австралия';
            price = 170;
            break;

        case 'индия':
            country = 'Индия';
            price = 80;
            break;

        case 'ямайка':
            country = 'Ямайка';
            price = 120;
            break;

        default:
            alert('В вашей стране доставка не доступна');
    }
    if (price !== undefined) {
        console.log(`Доставка в ${country} будет стоить ${price} кредитов `);
    }
}
