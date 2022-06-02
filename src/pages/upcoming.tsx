import {NextPage} from "next";
import RocketsList from "@components/RocketsList/RocketsList";
import Layout from "@components/Layout/Layout";

const Upcoming: NextPage<{launches: object[]}> = ({launches}) => {
    console.log(launches)
    return (
        <Layout>
            <RocketsList heading="Upcoming" launches={launches} upcoming={true}/>
        </Layout>
    )
}

Upcoming.getInitialProps = async () => {
    let data = await fetch(`https://api.spacexdata.com/v3/launches/upcoming?limit=30`)
    let launches = await data.json();

    return {launches}
}


export default Upcoming