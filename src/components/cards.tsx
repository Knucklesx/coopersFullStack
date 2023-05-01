import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Card {
	id: number;
	title: string;
	description: string;
	image: string;
}

interface CardCarouselProps {
	cards: Card[];
}

export default function CardCarousel({ cards }: CardCarouselProps) {
	const sets = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...sets}>
			{cards.map((card) => (
				<div key={card.id} className="px-4">
					<div className="rounded-lg shadow-lg overflow-hidden bg-white">
						<div className="relative w-full h-48">
							<Image
								src={card.image}
								alt={card.title}
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="px-6 py-4">
							<button className="h-3/5 w-2/5 rounded-full border border-gray-500 px-3 py-1 text-slate-300 hover:bg-gray-500 hover:text-gray-100 text-sm pd-22">{card.title}</button>
							<p className="text-gray-700 text-base">{card.description}</p>
							<a
								href="#"
								className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-500 rounded-lg hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300"
							>
								read more
							</a>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
}
