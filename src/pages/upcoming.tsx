import {NextPage} from "next";
import RocketsList from "@components/RocketsList/RocketsList";
import fetch from "node-fetch";

const Upcoming: NextPage<{launches: object[]}> = ({launches}) => (
    <RocketsList heading="Upcoming" launches={launches} upcoming={true}/>
)

Upcoming.getInitialProps = async () => {
    let data = await fetch(`https://api.spacexdata.com/v3/launches/upcoming?limit=30`)
    let launches = await data.json();

    return {launches}
}


export default Upcoming