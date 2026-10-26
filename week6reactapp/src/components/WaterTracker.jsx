import { useState, useEffect } from "react";
import ProgressCard from "./ProgressCard";

function WaterTracker() {
    const [glasses, setGlasses] = useState(0);
    const [goal, setGoal] = useState(8);
    const [goalInput, setGoalInput] = useState("")

   function handleSubmit(e) {
  e.preventDefault();

  if (goalInput.trim() === "") {
    alert("Please Set A Goal");
    return;
  }

  if (Number(goalInput) <= 0 || !Number.isInteger(Number(goalInput))) {
    alert("Please enter a number greater than 0");
    return;
  }

  setGoal(Number(goalInput));
  setGoalInput("");
}

    useEffect(() => {
    document.title = `💧 ${glasses} / ${goal}`
}, [glasses, goal])


    return (
        <div className="water-tracker">

            <h2>💦 Water Tracker 💦</h2>

            <ProgressCard glasses={glasses} goal={goal} />

        <div className="buttons"> 

        <button onClick = {() => setGlasses(Math.max(0, glasses - 1))}>
            -1 Glass
        </button>

        <button onClick = {() => setGlasses(glasses + 1)}>
            +1 Glass
        </button>

        <button onClick = {() => setGlasses(0)}>
            Reset Intake
        </button>
        </div>

         <form onSubmit={handleSubmit}>
        <input 
        type="number" 
        min={1}
        value={goalInput} 
        placeholder="Enter a Goal" 
        onChange={(e) => setGoalInput(e.target.value)} 
        />

<button type="submit">Set New Goal!</button>
        </form>
        
        {glasses >= goal ? (
            <h3>Goal Reached 🎉!!</h3>
        ):(
            <h3>{goal - glasses} left to go!</h3>
        
        )}
        </div>
    );
}

export default WaterTracker;