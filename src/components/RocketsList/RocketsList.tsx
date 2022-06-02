import {FunctionComponent, useEffect, useState} from "react";
import Text from "@components/Text/Text";
import styles from "./RocketList.module.scss"
import RocketCard from "@components/RocketsList/RocketCard/RocketCard";

interface RocketListI {
    heading: string
    launches: {[key: string]: any}[]
    upcoming?: boolean
}

const RocketsList: FunctionComponent<RocketListI> = ({heading, launches, upcoming}) => {
    const [currentLaunches, setCurrentLaunches] = useState<RocketListI["launches"]>(launches)
    const [isFetching, setFetching] = useState(false)
    const [offset, setOffset] = useState(30)
    const [length, setLength] = useState(60)
    console.log(launches)
    const handleScroll = () => {
        if (
            Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight
            || isFetching
        )
            return;
        if(length < 110) {
            setFetching(true);
        }
    };

    const fetchData = async () => {
        let data = await fetch(`https://api.spacexdata.com/v3/launches?limit=30&offset=${offset}`)
        let launches = await data.json();
        setCurrentLaunches(prevLaunches => (
            [
                ...prevLaunches,
                ...launches
            ]
        ))

        setOffset(prevOffset=> prevOffset + 30)
        setLength(prevLength => prevLength + 30 >= 110 ? 110 : prevLength + 30)
    }

    useEffect(()=> {
        if (isFetching && length <=110) {
            fetchData()
            setFetching(false)
        }
    }, [isFetching])

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <section>
            <Text customClass={styles.heading} type="heading2">{heading}</Text>
            <div className={styles.rocketList}>
                {currentLaunches?.map((launch, index) => (
                    <RocketCard
                        id={launch.flight_number}
                        key={launch.flight_number + index}
                        mission_name={launch.mission_name}
                        rocket={launch.rocket}
                        launch_date_local={launch.launch_date_local}
                        upcoming={upcoming}
                        site_name_long={launch.launch_site.site_name_long}
                    />
                ))}
            </div>
        </section>
    )
}

export default RocketsList