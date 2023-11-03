import { useState } from 'react';

import Image from 'next/image';

import styles from './ContactMe.module.css';

export default function ContactMe(){
    const [formData, setFormData] = useState({ //placeholder to temporarily store form values
        name: "",
        email: "",
        message: ""
    });

    const [formSuccess, setFormSuccess] = useState(false);

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({ //updates state representing form data
            ...prevState,
            [fieldName]: fieldValue
        }))
    }

    const submitForm = (e) => {
        e.preventDefault() //prevents page from refreshing

        const formURL = e.target.action
        const data = new FormData()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })

        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
                'accept': 'application/json', //we want FormBackEnd to return `json`, not the full HTML page
            },
        }).then(() => {
            setFormData({
                name: "",
                email: "",
                message: ""
            })

            setFormSuccess(true);

            setTimeout(() => {
                setFormSuccess(false);
            }, 4500)
        })
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.leftCol}>
                <Image src="/AI-generated-coder.png" width={1080} height={1080} />
            </div>
            <div className={styles.rightCol}>
                <h1 className={styles.formHeader}>
                    Let's <span className="text-[#3F00FF]">Talk</span>
                </h1>
                <p className={styles.formDescription}>
                    If you have any questions, or simply anything you want to{" "}
                    discuss, feel free to shoot me a message. I will be happy{" "}
                    to hear <span class="text-[#3F00FF] fw-500">:{")"}</span>
                </p>
                <form method="POST" action="https://www.formbackend.com/f/a64bb81fece8d9bd" onSubmit={submitForm}>
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name}
                        placeholder="David Jeong" onChange={handleInput} required />
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" value={formData.email}
                        placeholder="jj336@duke.edu" onChange={handleInput} required />
                    <label for="message">Type Message</label>
                    <textarea rows="3" placeholder="I'd love a compliment :)" id="message" name="message"
                        value={formData.message} onChange={handleInput} required />
                    <button type="submit" id="submit" name="submit" class={styles.sendBtn}>Send</button>
                </form>
            </div>
        </div>
    );
}