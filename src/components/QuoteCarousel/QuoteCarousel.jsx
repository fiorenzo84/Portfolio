/* eslint-disable react/no-unescaped-entities */
import "./quotecarousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function QuoteCarousel() {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    const quotes = [
        { text: "La meilleure façon de prédire l'avenir est de le créer.", author: "Alan Kay" },
        { text: "La simplicité est la sophistication ultime.", author: "Léonard de Vinci" },
        { text: "La technologie est meilleure quand elle rassemble les gens.", author: "Matt Mullenweg" },
        // Ajoutez d'autres citations si nécessaire
    ];

    return (
        <Slider {...settings} className="my-slider">
            {quotes.map((quote, index) => (
                <div key={index}>
                    <p>"{quote.text}"</p>
                    <small>- {quote.author}</small>
                </div>
            ))}
        </Slider>
    );
}