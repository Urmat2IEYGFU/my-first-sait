
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#0056b3';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#007bff';
    });
});