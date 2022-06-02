import {NextPage} from "next";
import RocketsList from "@components/RocketsList/RocketsList";
import Layout from "@components/Layout/Layout";

const Launches: NextPage<{launches: object[]}> = ({launches}) => (
    <Layout>
        <RocketsList heading="Launches" launches={launches}/>
    </Layout>
)


Launches.getInitialProps = async () => {
    let data = await fetch(`https://api.spacexdata.com/v3/launches?limit=30`)
    let launches = await data.json();

    return {launches}
}


export default Launches