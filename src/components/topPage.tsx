import { Card, Text } from "@tremor/react";
import Header from "./header";

export default function Front() {
	return (
		<main>
			<Card className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8 border-5 border-red-500">
				<Text>Coopers</Text>
			</Card>
			<Card>
				<button
					type="submit"
					onClick={() => console.log("oi")}
					className="border-black bg-black text-white hover:bg-white hover:text-black flex h-10 px-5 m-2 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
				>
					<p>entrar</p>
				</button>
			</Card>
		</main>
	);
}
			{/* <div>
				<Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
					<Col numColSpan={1} numColSpanLg={2}>
						<Card>
							<Text>Title</Text>
							<Metric>KPI 1</Metric>
						</Card>
					</Col>
					{/* <Card>
					<button
          type="submit"
          onClick={() => console.log("oi")}
          className="border-black bg-black text-white hover:bg-white hover:text-black flex h-10 px-5 m-2 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
					>
          <p>entrar</p>
					</button>
				</Card>
				</Grid>
			</div> */}