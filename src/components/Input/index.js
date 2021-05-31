import React, {useState} from "react";

export default function Input({onSendMessage}) {
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
        <div className='message-input'>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={text}
                    type='text'
                    placeholder='Enter your message and press ENTER'
                    autoFocus={true}
                />
                <button>Send</button>
            </form>
        </div>
    );
}

