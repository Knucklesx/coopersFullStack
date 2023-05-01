"use client";
import styles from "./header.module.css";
import { Button, Card, Col, Divider, Grid, Metric, Text } from "@tremor/react";
import CardCarousel from "./cards";
import ContactForm from "./message";
import TodoList from "./todolist/todoList";

//src="https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15866.jpg?w=2000"

const cards = [
	{
		id: 1,
		image:
			"https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15866.jpg?w=2000",
		title: "function",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum gravida odio.",
	},
	{
		id: 2,
		image:
			"https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15866.jpg?w=2000",
		title: "function",
		description:
			"Duis malesuada nibh vel lorem facilisis, vitae sagittis nulla ultrices.",
	},
	{
		id: 3,
		image:
			"https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15866.jpg?w=2000",
		title: "function",
		description:
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
	},
	{
		id: 4,
		image:
			"https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15866.jpg?w=2000",
		title: "function",
		description:
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
	},
	{
		id: 5,
		image:
			"https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15866.jpg?w=2000",
		title: "function",
		description:
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
	},
];

export default function Header() {
	return (
		<header className="relative w-full bg-white py-6">
			<div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256"
					className="cursor-pointer flex-start"
				>
					<path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
				</svg>
				<div className="flex-row space-x-4 md:flex">
					<button
						type="submit"
						onClick={() => console.log("oi")}
						className="border-black bg-black text-white hover:bg-white hover:text-black flex h-10 px-5 m-2 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
					>
						<p>entrar</p>
					</button>
				</div>
			</div>
			<div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8 border-solid border-2 border-sky-500">
				<Card className="ml-8 my-8 border-solid border-2 border-rose-500">
					<h1 className="text-6xl font-bold">Organize</h1>
					<Text className="text-5xl text-green-500 font-thin">
						your daily jobs
					</Text>
					<div className="mt-8">
						<Text className="text-md">The only way to get things done</Text>
					</div>
					<div>
						<button
							type="submit"
							onClick={() => console.log("oi")}
							className="h-12 px-20 mt-8 m-2 text-lg text-white transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-800"
						>
							<p>Go to To-do list</p>
						</button>
					</div>
				</Card>
				<Card className="ml-8 my-8 border-solid border-2 border-rose-500">
					<Metric>Organize</Metric>
					<Text>your daily jobs</Text>
				</Card>
			</div>
			<div className="grid place-items-center h-auto">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256"
				>
					<path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
				</svg>
			</div>
			{/* <div className="relative w-full bg-white py-6 style.triangle " id='midPage'> */}
			<div className="h-72 mb-36">


			<div className={`${styles.skew}  h-full`}>
				{/* <div className={styles.skew}>
          <p></p>
        </div>
        <div> */}
				<div className="grid place-items-center h-auto border-solid border-2 border-rose-500 text-white">
				{/* <Card className={styles.skew}> */}
					<Metric className="text-5xl underline underline-offset-8 decoration-green-500 decoration-3  text-white">
						To-do list
					</Metric>
					<Text className="text-lg mt-6">
						Drag and drop to set your main priorities, check
					</Text>
					<Text className="text-lg">when done and create what's new.</Text>
				</div>

				{/* </div> */}
			</div>
			</div>
			<div className="flex max-w-7xl flex-row items-stretch justify-around border-2 border-green-500 m-auto w-1/2">
				<div>
					<Card className="grid place-items-center h-auto border-solid border-2 border-slate-500 w-fit shadow-md ">
						<Metric className="text-5xl  w-auto">To-do</Metric>
						<Text className="text-lg mt-6">Take a breath.</Text>
						<Text className="text-lg">Start doing.</Text>
						<TodoList />

					</Card>
				</div>

				<div>
					<Card className="grid place-items-center h-auto border-solid border-2 border-rose-500 w-fit">
						<Metric className="text-5xl underline underline-offset-8 decoration-green-500 decoration-3">
							Done
						</Metric>
						<Text className="text-lg mt-6">Congratulions!</Text>
						<Text className="text-lg">You have done 5 tasks</Text>
					</Card>
				</div>
			</div>
			{/* Carrossel */}

			<div className="bg-white mt-12">

				<Card className="border-green-500 w-9/12 ml-24 bg-green-500 overflow-visible h-[35vh] rounded-md">

						
					<Metric className="text-5xl pt-12 pl-12 font-bold text-white">good things</Metric>

					</Card>
					<div className="-mt-40 mb-10 ml-36 w-4/5 h-auto">

						
					<CardCarousel cards={cards} />



					</div>
					</div>
			
			
			
			{/* Mensagem */}
			<div className='border-solid border-red-500 mx-auto w-3/5 bg-slate-50'>

			<ContactForm />
			</div>

			{/* Foot */}
			<div className="bg-white absolute">
					<button className="text-green-500">

					</button>
				</div>
			<div className="bg-black flex max-w-7xl flex-row items-stretch justify-around border-2 border-green-500">

				<div>
					<Card className="grid place-items-center h-auto border-solid border-2 border-rose-500 w-fit bg-inherit">
						<Text className="text-xl mt-6 text-white white w-auto">Need help?</Text>
						<Text className="text-xl text-white mt-2">cooper@cooper.prod</Text>

					</Card>
					<Card className="bg-green-500">
					<Text className="text-xl mt-6 text-green-500 white w-auto">.</Text>

					</Card>
				</div>
			</div>
		</header>
	);
}
