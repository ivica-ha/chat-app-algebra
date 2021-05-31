import React, {useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {SketchPicker} from 'react-color';
import {setLocalStorage} from "../../functions";

const Home = () => {
    const {addToast, removeAllToasts} = useToasts();
    const [userColor, setUserColor] = useState('green');
    const [userName, setUserName] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const setUserInfo = () => {
        if (userName === '') return addToast('Please, fill in username', {appearance: 'error'});
        setLocalStorage('userName', userName)
        setLocalStorage('userColor', userColor)
        removeAllToasts()
        window.location.href = '/chat';
    }

    return (
        <div className='user-init'>
            <div className='user-setup'>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    autoFocus={true}
                    type='text'
                />
                <span onClick={() => setShowColorPicker(!showColorPicker)}>color</span>
                {showColorPicker && <SketchPicker
                    color={userColor}
                    onChangeComplete={(color) => setUserColor(color.hex)}
                />}
                <button onClick={setUserInfo}>Set name</button>
            </div>
            <div className='user-preview'>
                <span>{userName}</span>
                <span style={{background: userColor, width: 40, height: 40, display: 'inline-block'}}/>
            </div>
        </div>
    );
};

export default Home;