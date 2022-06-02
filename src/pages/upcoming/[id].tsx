import {NextPage} from "next";
import RocketCard from "@components/RocketsList/RocketCard/RocketCard";
import Text from "@components/Text/Text";
import styles from './Upcoming.module.scss'
import Layout from "@components/Layout/Layout";

const Upcoming: NextPage<{ [key: string]: any }> = ({launch}) => (
    <Layout>
        <Text customClass={styles.upcomingHeading} type="heading2">Upcoming</Text>

        <RocketCard
            id={launch.flight_number}
            mission_name={launch.mission_name}
            rocket={launch.rocket}
            launch_date_local={launch.launch_date_local}
            upcoming={true}
            site_name_long={launch.launch_site.site_name_long}
        />
    </Layout>
)

Upcoming.getInitialProps = async ({query}) => {
    let data = await fetch(`https://api.spacexdata.com/v3/launches/${query.id}`)
    let launch = await data.json();

    return {launch}
}

export default Upcoming