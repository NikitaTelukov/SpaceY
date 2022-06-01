import type { NextPage } from 'next'
import TopAstronautSection from "@components/TopAstronautSection/TopAstronautSection";
import InfoIcons from "@components/InfoIcons/InfoIcons";
import InfoSection from "@components/InfoSection/InfoSection";
import BottomFormSection from "@components/BottomFormSection/BottomFormSection";
import fetch from "node-fetch";
import {getShipsList} from "../redux/actions"
import { MyAppDispatch, useAppDispatch} from "./_app";

const Home: NextPage<{ships: object}> = ({ships}) => {
    const dispatch: MyAppDispatch = useAppDispatch()
    dispatch(getShipsList(ships))

    return (
        <>
            <TopAstronautSection />
            <InfoIcons />
            <InfoSection />
            <BottomFormSection />
        </>
    )
}

Home.getInitialProps = async () => {
    let data = await fetch('https://api.spacexdata.com/v3/ships')
    let ships = await data.json();

    return {ships}
}

export default Home