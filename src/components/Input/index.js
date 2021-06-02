import React, {useState} from "react";
import './style.css'

const Input = ({onSendMessage}) => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setText('')
        onSendMessage(text)
    }

    return (
        <div className="container">
            <div className='message-input'>
                <form className='d-flex justify-content-between' onSubmit={onSubmit}>
                    <input
                        onChange={onChange}
                        value={text}
                        type='text'
                        placeholder='Type your message...'
                        autoFocus={true}
                    />
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Input;