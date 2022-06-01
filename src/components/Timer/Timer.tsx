import {FunctionComponent} from "react";
import Text from "@components/Text/Text";
import styles from "@components/RocketsList/RocketList.module.scss";
import CountDown from "@components/CountDown/CountDown";

const Timer:FunctionComponent<{date: string, site: string}> = ({date, site}) => {
    const launchDate = new Date(date)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[launchDate.getUTCDay()].substring(0, 3),
          month = months[launchDate.getUTCMonth()].substring(0, 3),
          year = launchDate.getUTCFullYear(),
          time = `${launchDate.getUTCHours()}:${launchDate.getUTCMinutes()}:00`,
          dateString = `${day} ${month} ${launchDate.getDate()}, ${year} at ${time}`

    return (
        <div className={styles.timerWrapper}>
            <Text customClass={`${styles.launches} ${styles.timerLaunch}`} color="saturn">LAUNCH DATE</Text>
            <Text>{dateString}</Text>

            <Text customClass={`${styles.launches} ${styles.timerLaunch}`} color="saturn">LAUNCH SITE</Text>
                <Text>{site}</Text>

            <Text customClass={`${styles.launches} ${styles.timerLaunch}`} color="saturn">COUNT DOWN</Text>

            <CountDown
                date={date}
            />
        </div>
    )
}

export default Timer