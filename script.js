let activeItem = null;
let activeContainer = null;

const dragStart = function (e) {
    activeItem = e.target;
    activeContainer = e.target.parentNode;
    e.dataTransfer.setData('text/plain', ''); // Para permitir a detecção de soltar
};

const dragEnter = function (e) {
    e.preventDefault();
    if (e.target.classList.contains('aste')) {
        e.target.classList.add('hovered');
    }
};

const dragLeave = function (e) {
    if (e.target.classList.contains('aste')) {
        e.target.classList.remove('hovered');
    }
};

const dragOver = function (e) {
    e.preventDefault();
};

const dragDrop = function (e) {
    e.preventDefault();
    e.target.classList.remove('hovered');
    if (e.target.classList.contains('aste')) {
        e.target.appendChild(activeItem);
    }
};

const dragEnd = function () {
    activeItem = null;
    activeContainer = null;
};

const items = document.querySelectorAll('.aste img');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

const containers = document.querySelectorAll('.aste');

containers.forEach(container => {
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', dragDrop);
});

