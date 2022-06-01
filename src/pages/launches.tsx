import {NextPage} from "next";
import RocketsList from "@components/RocketsList/RocketsList";
import fetch from "node-fetch";

const Launches: NextPage<{launches: object[]}> = ({launches}) => (
    <RocketsList heading="Launches" launches={launches}/>
)


Launches.getInitialProps = async () => {
    let data = await fetch(`https://api.spacexdata.com/v3/launches?limit=30`)
    let launches = await data.json();

    return {launches}
}


export default Launches