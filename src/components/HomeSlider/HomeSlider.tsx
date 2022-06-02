import Slider from "react-slick"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeSlider.module.scss"
import {FunctionComponent, useEffect, useState} from "react";
import {getShipsList} from "../../redux/actions";
import {connect} from "react-redux";
import Link from "next/link";

interface HomeSliderI {
    ships: {
        ship_id: number
        image: string | null
        ship_name: string | null
        [key: string]: string | number | null
    }[]
}

const HomeSlider:FunctionComponent<HomeSliderI> = ({ ships}) => {
    console.log(ships)

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const slides = ships?.map(ship=> (
        <div key={ship.ship_id}>
            <Link href={`/ships/${ship.ship_id}`}>
                <a>
                    <div className={styles.slide}>
                        <Image
                            src={ship.image || 'https://via.placeholder.com/345x353.png?text=Placeholderx'}
                            width={345}
                            height={300}
                            alt={ship.ship_name}
                        />
                    </div>
                </a>
            </Link>
        </div>
    ))

    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                {slides}
            </Slider>
        </div>
    )
}

const mapStateToProps = state => ({
    ships: state.getShips.ships
})

export default connect(mapStateToProps, null)(HomeSlider)