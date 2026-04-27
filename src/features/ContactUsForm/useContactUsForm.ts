import { useForm } from 'react-hook-form'

type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message?: string;
}

export default function useContactUsForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ mode: 'onChange' })

    const onSubmit = (data: FormData) => {
        console.log(data) // Здесь функции для отправки данных
        reset()
    }
    return { register, handleSubmit, errors, onSubmit }
}