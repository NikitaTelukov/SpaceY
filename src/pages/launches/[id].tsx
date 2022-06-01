import {NextPage} from "next";
import fetch from "node-fetch";
import Image from "next/image";
import styles from "../../components/RocketsList/RocketList.module.scss"
import launchesStyles from './Launches.module.scss'
import Text from "@components/Text/Text";

const Launch: NextPage<{ [key: string]: any }> = ({launch}) => {
    console.log(launch)
    return (
        <section className={launchesStyles.container}>
            <div className={launchesStyles.imageWrapper}>
                <Image src="/images/rocket-launch.png" width={113} height={108} alt={launch.rocket_name}/>
            </div>

            <Text customClass={styles.launches} color="saturn">ROCKET</Text>
            <Text type="heading2">{launch.rocket.rocket_name} Launch</Text>

            <div className={`${styles.rocketCard} ${launchesStyles.detailsPod}`}>
                <div>
                    <Text customClass={styles.launches} color="saturn">LAUNCH DATE</Text>
                    <Text type="texto1">01-03-2019</Text>
                </div>
            </div>
            <div className={`${styles.rocketCard} ${launchesStyles.detailsPod}`}>
                <div>
                    <Text customClass={styles.launches} color="saturn">LAUNCH STATUS</Text>
                    <Text type="texto1">{launch.launch_success ? 'Successful' : 'Not successful'}</Text>
                </div>
            </div>
            <div className={`${styles.rocketCard} ${launchesStyles.detailsPod}`}>
                <div>
                    <Text customClass={styles.launches} color="saturn">ABOUT</Text>
                    <Text type="texto1">{launch.details}</Text>
                </div>
            </div>
            <div className={`${styles.rocketCard} ${launchesStyles.detailsPod}`}>
                <div>
                    <Text customClass={styles.launches} color="saturn">ROCKET SUMMARY</Text>
                    <Text type="texto1">{launch.rocket.rocket_name}</Text>
                </div>
            </div>
            <div className={`${styles.rocketCard} ${launchesStyles.detailsPod}`}>
                <div>
                    <Text customClass={styles.launches} color="saturn">FIRST STAGE</Text>
                    <Text type="texto1">{launch.rocket.first_stage.cores[0].core_serial}</Text>
                </div>
            </div>

            <Text customClass={`${styles.launches} ${launchesStyles.sneak}`} color="saturn">SNEAK PEEK</Text>
            <div className={launchesStyles.imageWrapper}>
                <Image src={launch.links.mission_patch} width={322} height={347 } alt={launch.rocket_name}/>
            </div>
        </section>
    )
}

Launch.getInitialProps = async ({query}) => {
    let data = await fetch(`https://api.spacexdata.com/v3/launches/${query.id}`)
    let launch = await data.json();

    return {launch}
}

export default Launch