import { useState, useEffect } from "react"; 

function Component(){
    const [task,setTask] = useState("");
    const [newTask, setNewTask] = useState([]);

    function handleEventChange(e){
        setTask(e.target.value);
    }
    function addTask(){
        if(task.trim() === "") return;
        setNewTask([...newTask, task])
        setTask("");
    }
        return(
            //Main Container here
            <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="font-dancing text-6xl text-white">To do List Checker</h1>
                    <p className="text-gray-100 font-sans">Organize task in a vibrant way</p>
                </div>
                {/*Container for the task*/}
                <div className="text-white font-inter">
                    <input
                        type="text"
                        value={task}
                        onChange={handleEventChange}
                        placeholder="Enter task"
                        className="text-black"
                    />
                    <button onClick={addTask}>Add</button>
                    <div>
                        <ul>
                           {newTask.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
}

export default Component;