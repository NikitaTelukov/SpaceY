import {NextPage} from "next";
import ShipmentTable from "@components/ShipmentTable/ShipmentTable";
import Layout from "@components/Layout/Layout";

const Ship: NextPage<{ [key: string]: any }> = ({ship}) => (
    <Layout>
        <ShipmentTable ship={ship} />
    </Layout>
)

Ship.getInitialProps = async ({query}) => {
    let data = await fetch(`https://api.spacexdata.com/v3/ships/${query.id}`)
    let ship = await data.json();

    return {ship}
}

export default Ship