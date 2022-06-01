import {ChangeEvent, FunctionComponent, useState} from "react";
import Image from "next/image";
import Text from "@components/Text/Text";
import Input from "@components/Input/Input";
import styles from "./TicketForm.module.scss"
import Button from "@components/Button/Button";
import * as yup from 'yup'
import axios from "axios";

const TicketForm:FunctionComponent = () => {
    const [validationError, setValidationError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        agree: false
    })

    let schema = yup.object().shape({
        name: yup.string().required("Seu nome field is Required"),
        email: yup.string().email("Email must have correct format").required("E-mail Field is required"),
        telephone: yup.string().required("Telefone field is required").matches(new RegExp('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'), 'Wrong phone format'),
        agree: yup.boolean()
    });

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => ({
                ...currentData,
                name: e.target.value
                }
            )
        )
    }

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => ({
                    ...currentData,
                    email: e.target.value
                }
            )
        )
    }

    const handleTelephone = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => ({
                    ...currentData,
                    telephone: e.target.value
                }
            )
        )
    }

    const handleAgreement = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => ({
                    ...currentData,
                    agree: e.target.checked
                }
            )
        )
    }

    const request = data => {
        const options = {
            method: 'POST',
            url: 'https://spacey-9be06-default-rtdb.europe-west1.firebasedatabase.app/contacts.json',
            data: data
        };

        axios.request(options).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

        schema.validate(formData)
            .then(()=>{
                setValidationError('')
                setSuccessMessage('Form successfully submitted')
                request(formData)
                setFormData({
                    name: '',
                    email: '',
                    telephone: '',
                    agree: false
                })
            })
            .catch(e=> {
                setValidationError(e.errors)
            })
    }

    return (
        <form method="post" onSubmit={handleFormSubmit} className={styles.ticketFormWrapper}>
            <Image alt="Ticket" src="/images/ticket.svg" width={56} height={56}/>
            <Text customClass={styles.garantaText} type="heading2">Garanta sua vaga para a primeira viagem</Text>
            <Text customClass={styles.preenchaText} type="texto1">Preencha os campos abaixo para entrar na lista de espera</Text>
            <Input onChange={handleName} value={formData.name} type="text" label="Seu nome" />
            <Input onChange={handleEmail} value={formData.email} type="text" label="E-mail" />
            <Input onChange={handleTelephone} value={formData.telephone} type="text" label="Telefone" />
            <Input onChange={handleAgreement} type="checkbox" label="Concordo em receber comunicações" />
            <Button type="submit" color="mars" width="100%">Garantir minha vaga</Button>

            {validationError && (
                <Text customClass={styles.validationError} type="text2" color="mars_light">{validationError}</Text>
            )}

            {successMessage && (
                <Text customClass={styles.validationError} type="text2" color="earth">{successMessage}</Text>
            )}
        </form>
    )
}

export default TicketForm