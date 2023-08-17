function calculateTriangleArea(){
    // get the base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleValueString = triangleBase.value;
    const triangleArea = parseFloat(triangleValueString)
    // get the height value
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeight.value;
    const heightArea = parseFloat(triangleHeightValue)
    // get the calculate base and height
    const area = 0.5 * triangleArea * heightArea;
    console.log(area)
    
}