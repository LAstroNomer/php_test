// Массив с путями к изображениям
const images1 = [
    'images/image_28.jpg',
    'images/image_27.jpg',
    'images/image_26.jpg',
    'images/image_25.jpg',
    'images/image_24.jpg',
    'images/image_23.jpg',
    'images/image_22.jpg',
    'images/image_21.jpg',
    'images/image_20.jpg',
    'images/image_19.jpg',
    'images/image_18.jpg',
    'images/image_17.jpg',
    'images/image_16.jpg',
];


const images2 = [
    'images/image_28.jpg',
    'images/image_27.jpg',
    'images/image_26.jpg',
    'images/image_25.jpg',
    'images/image_24.jpg',
    'images/image_23.jpg',
    'images/image_22.jpg',
    'images/image_21.jpg',
    'images/image_20.jpg',
    'images/image_19.jpg',
    'images/image_18.jpg',
    'images/image_17.jpg',
    'images/image_16.jpg',
];

const images3 = [
    'images/image_28.jpg',
    'images/image_27.jpg',
    'images/image_26.jpg',
    'images/image_25.jpg',
    'images/image_24.jpg',
    'images/image_23.jpg',
    'images/image_22.jpg',
    'images/image_21.jpg',
    'images/image_20.jpg',
    'images/image_19.jpg',
    'images/image_18.jpg',
    'images/image_17.jpg',
    'images/image_16.jpg',
];

const imageLabels = [
    '28',
    '27',
    '26',
    '25',
    '24',
    '23',
    '22',
    '21',
    '20',
    '19',
    '18',
    '17',
    '16',
    '15',
];

// Получаем элементы из DOM
const slider = document.getElementById('image-slider');
const displayedImage1 = document.getElementById('displayed-image');
const displayedImage2 = document.getElementById('displayed-image-2');
const displayedImage3 = document.getElementById('displayed-image-3');
const imageLabel = document.getElementById('image-label');
// Устанавливаем начальное изображение
displayedImage1.src = images1[0];
displayedImage2.src = images2[0];
displayedImage3.src = images3[0];
imageLabel.textContent = imageLabels[0];
// Обработчик события для ползунка
slider.addEventListener('input', function() {
    const index = slider.value; // Получаем значение ползунка
    displayedImage1.src = images1[index]; // Меняем изображение
    displayedImage2.src = images2[index]; // Меняем изображение
    displayedImage3.src = images3[index]; // Меняем изображение
    imageLabel.textContent = imageLabels[index]; // Меняем текст над ползунком
});