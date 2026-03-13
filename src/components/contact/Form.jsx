import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

import {
    FormContainer,
    FormTitle,
    Input,
    TextArea,
    ErrorMessage,
    SubmitButton,
    StyledForm
}
from './contactstyled'

function Form() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object( {
            name: Yup.string()
                .required("El nombre es obligatorio")
                .min(3,"Debe tener al menos 3 caracteres"),
            email: Yup.string()
                .email("Debe ser un correo válido")
                .required("El correo es obligatorio"),
            message: Yup.string()
                .required("El mensaje es obligatorio")
                .min(10,"El mensaje debe tener al menos 10 caracteres"),
        }),
        onSubmit: (values, {resetForm}) => {
            emailjs
                .send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    values,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                .then(
                    (response) => {
                        Swal.fire({
                            icon: 'success',
                            title: '¡Éxito!',
                            text: 'Formulario enviado con éxito',
                            confirmButtonColor: '#3085d6',
                        });
                        resetForm();
                    },
                    (error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Hubo un error al enviar el formulario. Intenta nuevamente.',
                            confirmButtonColor: '#3085d6',
                        });
                    }
                )
        },
    })

    return (
        <>
            <FormContainer>
                <FormTitle>Contáctame</FormTitle>
                <StyledForm onSubmit={formik.handleSubmit}>
                    <Input
                        type= "text"
                        name= "name"
                        placeholder= "Nombre"
                        onChange= {formik.handleChange}
                        onBlur= {formik.handleBlur}
                        value= {formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <ErrorMessage>{formik.errors.name}</ErrorMessage>
                    ): null}
                    <Input
                        type= "email"
                        name= "email"
                        placeholder= "Email"
                        onChange= {formik.handleChange}
                        onBlur= {formik.handleBlur}
                        value= {formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <ErrorMessage>{formik.errors.email}</ErrorMessage>
                    ) : null} 
                    <TextArea
                        name= "message"
                        placeholder= "Mensaje"
                        rows= "5"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <ErrorMessage>{formik.errors.message}</ErrorMessage>
                    ) : null}
                    <SubmitButton type='submit'>Enviar</SubmitButton>
                </StyledForm>
            </FormContainer>
        </>
    )
}

export default Form
