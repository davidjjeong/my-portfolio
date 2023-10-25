import * as React from 'react';
import { AiOutlineSend, AiOutlineSearch } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

export const ContactMe = () => {
    return (
        <button type="button" class="button" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <span>Contact Me</span>
                <div className='icon'>
                    <AiOutlineSend size={20}/>
                </div>
            </div>
        </button>
    );
}

export const SendForm = ({className}) => {
    return (
        <button type="submit" class={className} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <span>Send</span>
                <div className='icon'>
                    <AiOutlineSend size={20}/>
                </div>
            </div>
        </button>
    );
}

export const Explore = () => {
    return (
        <button type="button" class="explore-button" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <span>Explore</span>
                <div className='icon'>
                    <BsSearch size={20} />
                </div>
            </div>
        </button>
    );
}