import {FunctionComponent} from "react";
import TicketForm from "@components/TicketForm/TicketForm";
import styles from "./TicketFormSection.module.scss"
import Image from "next/image";

const TicketFormSection:FunctionComponent = ()=> {
    return (
        <div className={styles.ticketFormSection} id="ticket-form">
            <TicketForm />
            <Image src="/images/big-rocket.svg" width={546} height={981} alt="Rocket Image"/>
        </div>
    )
}

export default TicketFormSection