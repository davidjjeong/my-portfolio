import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import { SendForm } from '../../components/Buttons';

export default function ContactForm () {
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
        <div className="flex flex-row lg:flex-col justify-around lg:items-center">
            <div className="flex flex-col ml-[5vw] lg:ml-0 mt-24 lg:mt-16">
                <h1 className="text-6xl lg:text-center">
                    Get in <span class="text-[#3F00FF]">Touch</span>
                </h1>
                <p className="description text-[1.025rem] mt-8 pl-1 lg:pl-0 w-[30rem] leading-loose
                            lg:text-center">
                    If you have any questions, or simply anything you want to discuss,{" "}
                    feel free to shoot me a message. {<br />} I will be more than happy{" "}
                    to hear <span class="text-[#3F00FF] fw-500">:{")"}</span>
                </p>
                <div className="input-icons mt-5 lg:hidden">
                    <i className="input-icon"><FiPhoneCall size={32} color="#3F00FF" /></i>
                    <div className="contact-text">
                        <h1 className="text-xl fw-500">Call Me</h1>
                        <p className="description text-[#737373] text-sm mt-2">+1 (919) 884-1075</p>
                    </div>
                </div>
                <div className="input-icons mt-5 lg:hidden">
                    <i className="input-icon"><AiOutlineMail size={32} color="#3F00FF" /></i>
                    <div className="contact-text">
                        <h1 className="text-xl fw-500">Email</h1>
                        <p className="description text-[#737373] text-sm mt-2">jaewoong.jeong@duke.edu</p>
                    </div>
                </div>
                <div className="input-icons mt-5 lg:hidden">
                    <i className="input-icon"><ImLocation size={32} color="#3F00FF" /></i>
                    <div className="contact-text">
                        <h1 className="text-xl fw-500">Location</h1>
                        <p className="description text-[#737373] text-sm mt-2">Durham, NC 27708, US</p>
                    </div>
                </div>
            </div>
            <form method="POST" action="https://www.formbackend.com/f/a64bb81fece8d9bd" onSubmit={submitForm}
                className="bg-white border-t-8 border-[#3F00FF] rounded-lg shadow-lg px-10 py-10 
                            flex flex-col w-1/3 lg:w-[50vw] md:w-[70vw] space-y-5 mt-24 mb-24 lg:mb-16
                            lg:mt-8 mr-[5vw] lg:mr-0"
            >
                <h1 className="text-3xl mb-5">
                    Let's <span class="text-[#FFBF00]">Talk</span>
                </h1>
                <div className="input-icons">
                    <i class="input-icon"><AiOutlineUser size={25} color='#3F00FF' /></i>
                    <input type="text" name="name" value={formData.name}
                        class="bg-[#FAFAFA] border-2 rounded-lg py-3 px-4 
                            focus:outline-none focus:ring-2 focus:ring-[#3F00FF] 
                            w-full input-icon-field"
                        placeholder="Your Name" required onChange={handleInput}
                    />
                </div>

                <div className="input-icons">
                    <i class="input-icon"><AiOutlineMail size={25} color="#3F00FF" /></i>
                    <input type="email" name="email" value={formData.email}
                        class="bg-[#FAFAFA] border-2 rounded-lg py-3 px-4 
                            focus:outline-none focus:ring-2 focus:ring-[#3F00FF]
                            w-full input-icon-field"
                        placeholder="Email Address" required onChange={handleInput}
                    />
                </div>

                <textarea name="message" value={formData.message}
                    class="bg-[#FAFAFA] border-2 rounded-lg py-3 px-4 
                        focus:outline-none focus:ring-2 focus:ring-[#3F00FF]"
                    placeholder="Type Message" required onChange={handleInput}
                />

                <SendForm className="button form-button" />
                { formSuccess ?
                    <div>
                        <div className="loader" />
                        <div className="check" />
                    </div>
                    :
                    <></>
                }
            </form>
        </div>
    );
}