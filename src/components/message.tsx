import { Card } from "@tremor/react";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ name, phone, message, email });
		{
			/* axios */
		}
	};

	return (
		<div className="shadow-lg bg-slate-60 my-24 border-solid border-0 border-sky-500">
			<Image
				src="https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15866.jpg?w=2000"
				alt="Picture of the author"
				width={500}
				height={500}
        className="object-none w-36 h-36 rounded-full custom-position mx-auto"
			/>

			<form
				onSubmit={handleSubmit}
				className="max-w-md mx-auto border-5 border-solid border-rose-500"
			>
				<div className="mb-4">
					<label htmlFor="name" className="block text-black mb-2">
						Your name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
            placeholder="type your name here..."
						className="bg-white border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex max-w-7xl flex-row items-stretch justify-around border-2 border-green-500">
					<div className="grid mb-4">
						<label htmlFor="phone" className="text-gray-700 mb-2">
            E-mail*
							
						</label>
            <input
							type="text"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
              placeholder="example@example.com"
							className="bg-white border-black appearance-none border rounded w-fits py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>

					</div>
					<div className="grid mb-4">
						<label htmlFor="email" className=" text-gray-700 mb-2">
              Phone*
						</label>
            <input
							type="tel"
							id="phone"
							name="phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
              placeholder="( ) ____-____"
							className="bg-white border-black appearance-none border rounded w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>

					</div>
				</div>
				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-gray-700 mb-2"
					>
						Message*
					</label>
					<textarea
						id="message"
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						className="bg-white border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						rows={5}
            placeholder="Type what you want to say to us"
					/>
				</div>
				<button
					type="submit"
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-10"
				>
					SEND NOW
				</button>
			</form>
		</div>
	);
}
