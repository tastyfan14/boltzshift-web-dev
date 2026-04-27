import PrimarySection from '@components/UI/Sections/PrimarySection'
import clsx from 'clsx'
import cls from './ContactUs.module.scss'
import ContactUsForm from '@components/UI/Forms/ContactUsForm'

export default function ContactUs() {
    return (
        <PrimarySection id='contact' variant={clsx(cls['contact'])}>
            <h1 className={clsx(cls['contact__title'])}>CONTACT US</h1>
            <p className={clsx(cls['contact__desc'])}>Consign offers a number of pricing plans to help you find one that fits your business needs best</p>
            <div className={clsx(cls['contact__overview'])}>
                <ContactUsForm />
                <iframe className={clsx(cls['contact__overview--map'])} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29207.973183819737!2d89.6702672!3d23.7831337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe6b000c5072bf%3A0x2c72845513237f05!2z4Kam4KeL4Kak4Kay4Ka-IOCmruCmvuCmmuCmvuCmsuCmvyAo4Kaa4KeH4Kau4KeN4Kas4Ka-4KawKQ!5e0!3m2!1sru!2sru!4v1777145509128!5m2!1sru!2sru" width="1240" height="652" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </PrimarySection>
    )
}