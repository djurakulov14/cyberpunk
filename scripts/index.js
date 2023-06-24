const dropZone = document.getElementById('dropZone');

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
  console.log('Загруженный файл:', file.name);
}