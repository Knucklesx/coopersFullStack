import { Card, Metric, Text } from "@tremor/react";
import { useState } from "react";

// export default function TodoList() {
//   const [tasks, setTasks] = useState<string[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<string[]>([]);
//   const [newTask, setNewTask] = useState("");

//   const addTask = (e) => {
//     e.preventDefault();
//     setTasks([...tasks, newTask]);
//     setNewTask("");
//   }

//   const clearTask = () => {
//     setTasks([]);
//   }

//   const removeTask = (task_index: number) => {
//     setTasks(tasks.filter((_, index) => index !== task_index));
//   }

//   const completeTask = (task_index: number) => {
//     const task = tasks[task_index];
//     setTasks(tasks.filter((_, index) => index !== task_index));
//     setCompletedTasks([...completedTasks, task]);
//   }

//   return(
//     <div className="bg-white p-4 rounded-md shadow-md">
//       <form action="">
//         <input type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//        />
//        <button type="submit" onClick={addTask}/>
//         <button type="button" onClick={clearTask}>
//           Limpar todas as tarefas
//         </button>
//       </form>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button type="button" onClick={() => removeTask(index)}>
//               Remover
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default function TodoList() {
	const [tasks, setTasks] = useState<string[]>([]);
	const [completedTasks, setCompletedTasks] = useState<string[]>([]);
	const [newTask, setNewTask] = useState("");

	// function addTaskHandler() {
  const addTaskHandler = (e) => {
    e.preventDefault();
		setTasks([...tasks, newTask]);
		setNewTask("");
	}

//   const addTask = (e) => {
//     e.preventDefault();
//     setTasks([...tasks, newTask]);
//     setNewTask("");
//   }


	function clearTasksHandler() {
		setTasks([]);
    setCompletedTasks([]);
	}

	function removeTaskHandler(taskIndex: number) {
		setTasks(tasks.filter((_, index) => index !== taskIndex));
	}

	function completeTaskHandler(taskIndex: number) {
		const taskToComplete = tasks[taskIndex];
		setTasks(tasks.filter((_, index) => index !== taskIndex));
		setCompletedTasks([...completedTasks, taskToComplete]);
	}

	return (
		<div className="flex max-w-7xl flex-row items-stretch justify-around border-2 border-green-500 m-auto w-1/2">
			{/* <div>
 					<Card className="grid place-items-center h-auto border-solid border-2 border-slate-500 w-fit shadow-md ">
						<Metric className="text-5xl  w-auto">To-do</Metric>
						<Text className="text-lg mt-6">Take a breath.</Text>
						<Text className="text-lg">Start doing.</Text>
						<TodoList />

					</Card>
 				</div> */}
			<div>
				<h2>Lista de Tarefas:</h2>
				{tasks.map((task, index) => (
					<div key={index}>
						<input
							type="checkbox"
							onChange={() => completeTaskHandler(index)}
						/>
						<span>{task}</span>
						<button type="button" onClick={() => removeTaskHandler(index)}>
							X
						</button>
					</div>
				))}
			</div>
      <form>
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
          className="border-2 border-green-500 bg-white text-black"
				/>
				<button type="submit" onClick={addTaskHandler} />
				<button type="button" onClick={clearTasksHandler}>
					Limpar
				</button>
			</form>
			<div>
				<h2>Lista de Tarefas Completas:</h2>
				{completedTasks.map((task, index) => (
					<div key={index}>
						<span>{task}</span>
					</div>
				))}
			</div>
		</div>
	);
}


// <div className="flex max-w-7xl flex-row items-stretch justify-around border-2 border-green-500 m-auto w-1/2">
// 				<div>
// 					<Card className="grid place-items-center h-auto border-solid border-2 border-slate-500 w-fit shadow-md ">
// 						<Metric className="text-5xl  w-auto">To-do</Metric>
// 						<Text className="text-lg mt-6">Take a breath.</Text>
// 						<Text className="text-lg">Start doing.</Text>
// 						<TodoList />

// 					</Card>
// 				</div>

// 				<div>
// 					<Card className="grid place-items-center h-auto border-solid border-2 border-rose-500 w-fit">
// 						<Metric className="text-5xl underline underline-offset-8 decoration-green-500 decoration-3">
// 							Done
// 						</Metric>
// 						<Text className="text-lg mt-6">Congratulions!</Text>
// 						<Text className="text-lg">You have done 5 tasks</Text>
// 					</Card>
// 				</div>
// 			</div>