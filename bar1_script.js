// Массив с путями к изображениям
let pageTitle = document.title;


let images1f_start = '../test/' + pageTitle +'/' + pageTitle +'_'
let images1f_end = '.jpg'

let images2f_start = '../test/' + pageTitle +'/' + pageTitle +'_'
let images2f_end = '_r.jpg'


let loadedFiles = new Map(); // Храним загруженные файлы
let isLoading = false;

// Ленивая загрузка файлов по требованию
async function loadFile(position) {
    if (loadedFiles.has(position)) {
        return loadedFiles.get(position);
    }

    try {
        const response = await fetch(position);
        if (!response.ok) throw new Error(`Файл position не найден`);
        
        const text1 = await response.text();
        const lines = text1.split('\n');
        const contentWithoutFirstLines = lines.slice(5).join('\n');
        
        const text = contentWithoutFirstLines;
        loadedFiles.set(position, text);
        return text;
    } catch (error) {
        console.error(`Ошибка загрузки файла:` + position, error);
        return `Ошибка загрузки файла ${position}.txt`;
    }
}






//const imageLabels =  //[28, 27, 26, 25, 24, 23, 22, 21, 20, 19,18,17,16,15,14,13,12,11,10]; 

const imageLabels = [0.00 , 0.10 ,0.18 , 0.27, 0.37 ,0.50,0.62,0.74,0.87,1.00,1.26, 1.49 ,1.74,2.01,2.24,2.48,3.02,3.53,3.98, 
4.49,5.04,5.49,5.97, 7.05,8.07,8.99,9.99,15.13,20.00
];

// Получаем элементы из DOM
const slider = document.getElementById('image-slider');
const displayedImage1f = document.getElementById('displayed-fimage-1');
const displayedImage2f = document.getElementById('displayed-fimage-2');

const imageLabel = document.getElementById('image-label');
// Устанавливаем начальное изображение
displayedImage1f.src = images1f_start +'28' + images1f_end;
displayedImage2f.src = images2f_start +'28' + images2f_end;
let position = '../2d_results/'+pageTitle+'_28.dat'
loadFile(position).then(content => {
    console.log(content); // "Содержимое файла"
    document.getElementById('textOutput').textContent = content;
});
let position1 = '../2d_results_mass/'+pageTitle+'_28.dat'

loadFile(position1).then(content => {
    console.log(content); // "Содержимое файла"
    document.getElementById('textOutput1').textContent = content;
});

imageLabel.textContent = imageLabels[0];
// Обработчик события для ползунка
slider.addEventListener('input', function() {
    const index = slider.value; // Получаем значение ползунка
    displayedImage1f.src = images1f_start + String(28 - index) + images1f_end; // Меняем изображение
    displayedImage2f.src = images2f_start + String(28 - index) + images2f_end;// Меняем изображение
    imageLabel.textContent = imageLabels[index]; // Меняем текст над ползунком

    let position = '../2d_results/'+pageTitle+'_'+String(28 - index) + '.dat'

    
    loadFile(position).then(content => {
        console.log(content); // "Содержимое файла"
        document.getElementById('textOutput').textContent = content;
    });
    let position1 = '../2d_results_mass/'+pageTitle+'_'+String(28 - index) + '.dat'

    loadFile(position1).then(content => {
        console.log(content); // "Содержимое файла"
        document.getElementById('textOutput1').textContent = content;
    });
});





