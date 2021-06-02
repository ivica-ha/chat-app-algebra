import React, {useEffect, useRef} from 'react'
import './style.css'

const Messages = ({messages, currentMember}) => {

    const bottomDiv = useRef();
    useEffect(() => {
        bottomDiv.current.scrollIntoView();
    }, [messages.length]);


    const renderMessage = (message, index) => {
        const {member, text} = message;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ?
            "Messages-message currentMember" : "Messages-message";
        return (
            <li key={index} className={className}>
      <span
          className="avatar"
          style={{backgroundColor: member.clientData.color}}
      />
                <div className="Message-content">
                    <div className="username">
                        <b>{member.clientData.username}</b>
                    </div>
                    <div className="text">{text}</div>
                </div>
            </li>
        );
    }

    return (
        <div className='container messages'>
            <ul className="Messages-list d-flex flex-direction-column">
                {messages.map((m, index) => renderMessage(m, index))}
                <div ref={bottomDiv} />
            </ul>
        </div>
    );
}

export default Messages;