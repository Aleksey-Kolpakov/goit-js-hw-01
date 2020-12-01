let country = prompt('Введите название страны в котрую желаете оформить доставку');
let price;
if (country === null) {
    console.log('Вы отменили рассчет доставки');
    
} else {
    

    switch (country.toLowerCase()) {
     
        case 'Китай'.toLowerCase():
            country = 'Китай';
            price = 100;
            break;

        case 'Чили'.toLowerCase():
            country = 'Чили';
            price = 250;
            break;

        case 'Австралия'.toLowerCase():
            country = 'Австралия';
            price = 170;
            break;
    
        case 'Индия'.toLowerCase():
            country = 'Индия';
            price = 80;
            break;
    
        case 'Ямайка'.toLowerCase():
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
