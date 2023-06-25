const dropZone = document.getElementById('dropZone');
const image = document.querySelector('.bg1')
const form = document.forms.sale

let screenshoot;
// Предотвращаем стандартное поведение перетаскивания (открытие файла в браузере)
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
});

// Обрабатываем событие броска файла в зону
dropZone.addEventListener('drop', (event) => {
  event.preventDefault();

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    handleFileUpload(files[0]);
  }
});

// Обработка загрузки файла
function handleFileUpload(file) {
  // Здесь вы можете выполнить необходимые операции с загруженным файлом
  dropZone.innerText = `Загруженный файл: ${file.name}`
  
  screenshoot = file
  
  dropZone.style.borderColor = "yellow"
}


form.onsubmit = (event) => {
  event.preventDefault()

  let data = {
    screenshoot: screenshoot
  }

  if(!screenshoot){
    dropZone.style.borderColor = "red"
    return;
  }

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    data[key] = value
  })


  console.log(data);
}

let num = 1

setInterval(() => {
  image.style.backgroundImage = `url(../images/bg${num}.png)`
  num++
  if(num > 3){
    num = 1
  }
}, 3000)