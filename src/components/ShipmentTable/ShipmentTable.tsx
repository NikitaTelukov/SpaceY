import {FunctionComponent} from "react";
import ShipmentRow from "@components/ShipmentTable/ShipmentRow/ShipmentRow";
import Link from "next/link";
import Image from "next/image";
import styles from "./ShipmentTable.module.scss"
import Text from "@components/Text/Text";

interface ShipmentI {
    ship: {
        ship_id: number
        ship_name: string
        active: boolean
        home_port: string
        missions: object[]
        roles: string[]
        url: string
        image: string
    }
}

const ShipmentTable: FunctionComponent<ShipmentI> = ({ship}) =>{
    const {ship_id, ship_name, active, home_port, missions, roles, url, image} = ship

    return (
        <div className={styles.shipmentTable}>
            <Text type="heading1" customClass={styles.shipmentHeading}>Shipment Information</Text>

            {
                url ? (
                    <Link href={url}>
                        <a>
                            <Image
                                src={image || 'https://via.placeholder.com/345x353.png?text=Placeholderx'}
                                width={350}
                                height={300}
                                alt={ship.ship_name}
                            />
                        </a>
                    </Link>
                )

                    :
                    (
                        <Image
                            src={image || 'https://via.placeholder.com/345x353.png?text=Placeholderx'}
                            width={350}
                            height={300}
                            alt={ship.ship_name}
                        />
                    )
            }

            <ShipmentRow label="Ship ID:" data={ship_id} />
            <ShipmentRow label="Ship Name:" data={ship_name} />
            <ShipmentRow label="Active:" data={active} />
            <ShipmentRow label="Home Port:" data={home_port} />
            <ShipmentRow label="Missions:" data={missions} />
            <ShipmentRow label="Roles:" data={roles} />
        </div>
    )
}

export default ShipmentTable