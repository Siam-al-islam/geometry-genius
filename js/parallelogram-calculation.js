function calculateParallelogramArea() {
    const parallelogramBaseInput = document.getElementById('parallelogram-base').value;
    const parallelogramHeightInput = document.getElementById('parallelogram-height').value;
    const base = parseFloat(parallelogramBaseInput);
    const height = parseFloat(parallelogramHeightInput);
    const result = base * height;
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = result;
}