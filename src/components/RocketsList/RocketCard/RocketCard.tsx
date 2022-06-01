import {FunctionComponent} from "react";
import styles from "@components/RocketsList/RocketList.module.scss";
import Image from "next/image";
import Text from "@components/Text/Text";
import Timer from "@components/Timer/Timer";
import Link from "next/link";

interface RocketCardI {
    rocket: {
        rocket_name: string
    }
    mission_name: string
    launch_date_local: string
    upcoming: boolean
    site_name_long?: string
    id: number
}

const RocketCard: FunctionComponent<RocketCardI> = ({id, rocket, mission_name, launch_date_local, upcoming, site_name_long}) => {
    const dateObject = new Date(launch_date_local),
          rocketDate = `${dateObject.getUTCDate()}-${dateObject.getUTCMonth()}-${dateObject.getUTCFullYear()}`

    return (
        <div className={styles.rocketCardWrapper}>
            <div className={styles.rocketCard}>
                <Link href={upcoming ? `/upcoming/${id}` : `/launches/${id}`}>
                    <a>
                        <Image src="/images/rocket-launch.png" width={113} height={108} alt={rocket.rocket_name}/>
                    </a>
                </Link>
                <div className={styles.rocketText}>
                    <Text customClass={styles.launches} color="saturn">LAUNCH</Text>
                    <Text customClass={styles.name} type="heading3">{rocket.rocket_name}</Text>
                    <Text customClass={styles.code}>{mission_name}</Text>
                    <Text>{rocketDate}</Text>
                </div>
            </div>
            {upcoming && <Timer date={launch_date_local} site={site_name_long}/>}
        </div>
    )
}

export default RocketCard