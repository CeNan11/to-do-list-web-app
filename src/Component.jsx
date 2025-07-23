import { useState, useEffect } from "react"; 
import {FaArrowUp, FaArrowDown, FaTrash} from 'react-icons/fa';

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
                <div className="text-white text-center mb-10">
                    <h1 className="font-dancing text-8xl text-white">To do List Checker</h1>
                    <p className="text-gray-100 font-sans">Organize task in a vibrant way</p>
                </div>
                {/*Container for the task*/}
                <div className="text-white mt-10 font-inter text-center">
                    <input
                        type="text"
                        value={task}
                        onChange={handleEventChange}
                        placeholder="Enter task"
                        className="text-black border-b border-white px-4 py-2 focus:outline-none rounded-lg"
                    />
                    <button onClick={addTask} className="m-3">Add</button>
                    <div className="mt-4 space-y-2 w-full m-w-md flex items-center">
                        <ul>
                           {newTask.map((task, index) => (
                            <li key={index}
                                className="flex items-center justify-between text-white w-full bg-white/10 rounded-lg mt-3 mb-2 py-4 px-2"
                            >
                                <span className="font-inter flex-1 pr-4 truncate">{task}</span>
                                <div className="flex gap-3">
                                    <button><FaArrowUp/></button>
                                    <button><FaArrowDown/></button>
                                    <button><FaTrash/></button>
                                </div>
                                </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
}

export default Component;