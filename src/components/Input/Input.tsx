import {FunctionComponent} from "react";
import {InputI} from "../../interfaces";
import Text from "@components/Text/Text";
import styles from "./Input.module.scss"

const Input:FunctionComponent<InputI> = ({onChange, value, label, type}) => {
    const inputId = "input_" + label;

    return (
        <div>
            {
                type === "checkbox" ?
                    <>
                        <label className={styles.labelCheckBox} htmlFor={inputId}>
                            <Text type="texto1">{label}</Text>
                            <input
                                className={styles.inputCheckBox}
                                type="checkbox"
                                name={inputId}
                                onChange={onChange}
                            />
                            <span className={styles.checkmark}></span>

                        </label>
                    </> :
                    <>
                        <label htmlFor={inputId}><Text type="texto1">{label}</Text></label>
                        <input
                            value={value}
                            className={styles.inputText}
                            type="text"
                            name={inputId}
                            onChange={onChange}
                        />
                    </>
            }
        </div>
    )
}

export default Input