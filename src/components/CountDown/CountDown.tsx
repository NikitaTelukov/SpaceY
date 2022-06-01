import {FunctionComponent, useEffect, useState} from "react";
import Text from "@components/Text/Text";
import styles from './CountDown.module.scss'

interface CountDownI {
    date: string
}

const CountDown: FunctionComponent<CountDownI> = ({ date}) => {
    const [currentDate, setCurrentDate] = useState(null)
    const [timeLoading, setTimeLoading] = useState(false)

    const calculateTimeLeft = () => {
        const launchDate = new Date(date)
        let difference =  +new Date() - +launchDate;

        const timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };

        setCurrentDate(timeLeft)
        setTimeLoading(true)
    }

    useEffect(()=> {
        calculateTimeLeft()
    }, [])

    useEffect(()=> {
       setTimeout(()=> {
           calculateTimeLeft()
       }, 1000)
    }, [currentDate])

    return (
        timeLoading &&
        <div className={styles.countWrapper}>
          <span className={styles.counter}><Text type="heading2">{currentDate.days}</Text></span>
          <span className={styles.dots}>:</span>

          <span className={styles.counter}><Text type="heading2">{currentDate.hours}</Text></span>
          <span className={styles.dots}>:</span>

          <span className={styles.counter}><Text type="heading2">{currentDate.minutes}</Text></span>
          <span className={styles.dots}>:</span>

          <span className={styles.counter}><Text type="heading2">{currentDate.seconds}</Text></span>
        </div>
    )
}

export default CountDown