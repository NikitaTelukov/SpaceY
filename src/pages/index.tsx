import type { NextPage } from 'next'
import TopAstronautSection from "@components/TopAstronautSection/TopAstronautSection";
import InfoIcons from "@components/InfoIcons/InfoIcons";
import InfoSection from "@components/InfoSection/InfoSection";
import BottomFormSection from "@components/BottomFormSection/BottomFormSection";
import {getShipsList} from "../redux/actions"
import { MyAppDispatch, useAppDispatch} from "./_app";
import Layout from "@components/Layout/Layout";

const Home: NextPage<{ships: object}> = ({ships}) => {
    const dispatch: MyAppDispatch = useAppDispatch()
    dispatch(getShipsList(ships))

    return (
        <Layout>
            <TopAstronautSection />
            <InfoIcons />
            <InfoSection />
            <BottomFormSection />
        </Layout>
    )
}

Home.getInitialProps = async () => {
    let data = await fetch('https://api.spacexdata.com/v3/ships')
    let ships = await data.json();

    return {ships}
}

export default Home