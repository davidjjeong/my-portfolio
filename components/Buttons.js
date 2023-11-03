import * as React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

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