function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width').value;
    const rectangleHeightInput = document.getElementById('rectangle-length').value;
    const width = parseFloat(rectangleWidthInput);
    const height = parseFloat(rectangleHeightInput);
    const result = width * height;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = result;
}