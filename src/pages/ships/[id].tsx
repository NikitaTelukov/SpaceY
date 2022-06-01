import {NextPage} from "next";
import fetch from "node-fetch";
import ShipmentTable from "@components/ShipmentTable/ShipmentTable";

const Ship: NextPage<{ [key: string]: any }> = ({ship}) => (
    <ShipmentTable ship={ship} />
)

Ship.getInitialProps = async ({query}) => {
    let data = await fetch(`https://api.spacexdata.com/v3/ships/${query.id}`)
    let ship = await data.json();

    return {ship}
}

export default Ship