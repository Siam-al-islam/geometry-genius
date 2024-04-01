function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base').value;
    const triangleHeightInput = document.getElementById('triangle-height').value;
    const base = parseFloat(triangleBaseInput);
    const height = parseFloat(triangleHeightInput)
    const calculateArea = 0.5 * base * height;
    const triangleSection = document.getElementById('triangle-sec');
    const result = document.createElement('p');
    result.innerText = calculateArea;
    triangleSection.appendChild(result)
    console.log(calculateArea);
}
