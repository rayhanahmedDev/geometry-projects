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
    // get the output area
    const outputArea = document.getElementById('output-area');
    outputArea.innerText = area 
}
    // mission rectangle 
    function calculateRectangleArea(){
        // get the rectangle width
        const rectangleBase = document.getElementById('rectangle-width');
        const rectangleString = rectangleBase.value;
        const rectangleArea = parseFloat(rectangleString)
        // get the rectangle height
        const rectangleHeight = document.getElementById('rectangle-height');
        const rectangleHeightString = rectangleHeight.value;
        const rectangleHeightArea = parseFloat(rectangleHeightString)
        // get the calculate rectangle area
        const rectangleCalculate = rectangleArea * rectangleHeightArea;
        // get the area output rectangle 
        const rectangleOutput = document.getElementById('output-rectangle');
        rectangleOutput.innerText = rectangleCalculate;
    }

    // do not repect dublicate name
    function calculateParallelogramArea(){
        // get the base value
       const base = setValueField('parallelogram-base')
    //    get the height value
       const height = setValueField('parallelogram-height')
    //    calculate parallelogram
      const area = base * height;
    //   set the area text
    const element = setElementText('output-parallelogram',area)
    }
    // get ellipse card
    function calculateEllipseArea(){
        const majorRedis = setValueField('Ellipse-major');
        const minorRedis = setValueField('Ellipse-minor');
        const ellipseCalculate = 3.14 * majorRedis * minorRedis;
        const ellipseArea = setElementText('output-Ellipse',ellipseCalculate) 
    }
    // set the input field function
    function setValueField(fieldId){
        const inputValue = document.getElementById(fieldId);
        const valueString = inputValue.value;
        const value = parseFloat(valueString);
        return value;
    }
    // set the innerText
    function setElementText(elementId,area){
        const elementText = document.getElementById(elementId)
        elementText.innerText = area;
    } 