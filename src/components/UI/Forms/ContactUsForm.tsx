import Input from '@components/UI/Input/Input'
import Button from '@components/UI/Button/Button'
import Textarea from '@components/UI/Textarea/Textarea'
import useContactUsForm from '@features/ContactUsForm/useContactUsForm'
import clsx from 'clsx'
import cls from '@components/sections/ContactUs/ContactUs.module.scss'

export default function ContactUsForm() {
    const { register, handleSubmit, errors, onSubmit } = useContactUsForm()
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={clsx(cls['contact__form'])}>
            <div className={clsx(cls['contact__form--fields'])}>
                <label className={clsx(cls['contact__form--field'])} aria-label='Your name' htmlFor='contact-field-name'>
                    <Input
                    id='contact-field-name'
                    variant='primary'
                    placeholder='Name'
                    {...register('name', {
                        required: 'Name is required',
                        minLength: {value: 2, message: 'Name must be at least 2 characters'},
                        maxLength: {value: 50, message: 'Name must be at most 50 characters'},
                    })}
                    data-error={!!errors.name}
                    />
                </label>

                <label className={clsx(cls['contact__form--field'])} aria-label='Your email' htmlFor='contact-field-email'>
                    <Input
                    id='contact-field-email'
                    variant='primary'
                    placeholder='Email'
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {value: /\S+@\S+\.\S+/, message: 'Name must contain only letters and spaces'},
                        minLength: {value: 3, message: 'Email must be at least 3 characters'},
                        maxLength: {value: 100, message: 'Email must be at most 100 characters'},
                    })}
                    data-error={!!errors.email}
                    />
                </label>

                <label className={clsx(cls['contact__form--field'])} aria-label='Your phone number' htmlFor='contact-field-phone-number'>
                    <Input
                    id='contact-field-phone-number'
                    variant='primary'
                    placeholder='Phone number'
                    {...register('phone', {
                        required: 'Phone is required',
                        pattern: {value: /^[0-9\s]*$/, message: 'Phone must contain only numbers and spaces'},
                        minLength: {value: 3, message: 'Phone number must be at least 3 characters'},
                        maxLength: {value: 40, message: 'Phone number must be at most 40 characters'},
                    })}
                    data-error={!!errors.phone}
                    />
                </label>

                <label className={clsx(cls['contact__form--field'])} aria-label='Your subject' htmlFor='contact-field-subject'>
                    <Input
                    id='contact-field-subject'
                    variant='primary'
                    placeholder='Subject (Question)'
                    {...register('subject', {
                        required: 'Subject is required',
                        minLength: {value: 5, message: 'Phone number must be at least 5 characters'},
                        maxLength: {value: 100, message: 'Phone number must be at most 100 characters'},
                    })}
                    data-error={!!errors.subject}
                    />
                </label>

                <label className={clsx(cls['contact__form--field'])} aria-label='Your message' htmlFor='contact-field-message'>
                    <Textarea
                    id='contact-field-message'
                    variant='primary'
                    placeholder='Message*'
                    rows={14}
                    {...register('message', {
                        required: 'Subject is required',
                        minLength: {value: 100, message: 'Phone number must be at least 100 characters'},
                        maxLength: {value: 2000, message: 'Phone number must be at most 2000 characters'},
                    })}
                    data-error={!!errors.message}
                    />
                </label>
            </div>

            <Button
            type='submit'
            variant='primary'
            title='Send'
            />
        </form>
    )
}