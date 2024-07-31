var form = document.getElementById('form');
const progress = document.getElementById('progress');
const fileName = document.getElementById('file').value.split("\\");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    if (fileName.length > 0) {
        xhr.upload.addEventListener("progress", progressHandler);
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(formData);
    }
})

function progressHandler(event) {
    var percent = (event.loaded / event.total) * 100;
    console.log(percent);
    progress.value = Math.round(percent);
}
