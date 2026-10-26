import { useState } from "react";

function ColorPicker() {

const [color, changeColor] = useState("Green");
const [savedColors, addColor] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);

 function handleBoxClick() {
        changeColor(savedColors[currentIndex]);
            if (currentIndex < savedColors.length - 1) {
            setCurrentIndex(currentIndex + 1)
      }     else {
            setCurrentIndex(0)
      }}

return (
    <>
    
    <div className="color-controls">

    <input type="text" className="color-input" onChange={(event) => changeColor(event.target.value)}/>

    <button type="button" onClick={() => addColor([...savedColors, color])}>Save Color</button>

</div>

    <div className="color-box" 
    style={{backgroundColor: color}} 
    onClick={handleBoxClick}
    >
    </div>

    </>
)
}

export default ColorPicker 