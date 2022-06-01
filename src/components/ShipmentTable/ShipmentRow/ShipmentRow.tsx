import {FunctionComponent} from "react";
import Text from "@components/Text/Text";
import styles from "./ShipmentRow.module.scss"

interface ShipmentRowI<T> {
    label: string
    data: T
}

type ArrayShipData = object[] | string[] | string | number | boolean | null

const ShipmentRow: FunctionComponent<ShipmentRowI<ArrayShipData>> = ({label, data}) => {
    console.log(data)

    return (
        <div>
            {
                typeof data === "boolean" ?
                        (
                            <div className={styles.shipmentRow}>
                                <Text type="text3_medium">{label}</Text>
                                <Text color="sun">{data ? "Active" : "Not Active"}</Text>
                            </div>

                        )
                        : Array.isArray(data) ?
                        (
                            <div className={styles.shipmentRow}>
                                <Text type="text3_medium">{label}</Text>
                                <ol className={styles.shipmentList}>
                                    {data.map(entry => {
                                        if (typeof entry === "string") {
                                            return (
                                                <li key={entry}>
                                                    <Text color="sun">{entry}</Text>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li key={entry.name}>
                                                    <Text customClass={styles.mission} color="sun">{entry.name}</Text>
                                                    <Text color="mars_light">{entry.flight}</Text>
                                                </li>
                                            )
                                        }
                                    })}
                                </ol>
                            </div>
                        )
                        :
                        (
                            <div className={styles.shipmentRow}>
                                <Text type="text3_medium">{label}</Text>
                                <Text color="sun">{data}</Text>
                            </div>
                        )

            }
        </div>
    )
}

export default ShipmentRow