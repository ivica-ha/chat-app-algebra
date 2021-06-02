import React, {useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {SketchPicker} from 'react-color';
import {setSessionStorage} from "../../functions";
import './style.css';
import colorPicker from '../../images/pipette.svg'

const Home = () => {
    const {addToast, removeAllToasts} = useToasts();
    const [userColor, setUserColor] = useState('green');
    const [userName, setUserName] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const setUserInfo = () => {
        if (userName === '') return addToast('Please, fill in username', {appearance: 'error', autoDismiss: true});
        setSessionStorage('userName', userName)
        setSessionStorage('userColor', userColor)
        removeAllToasts()
        window.location.href = '/chat';
    }

    return (
        <div className='user-init d-flex align-items-center justify-content-center flex-direction-column'>
            <div>
                <h2>Create user</h2>
            </div>
            <div className='user-setup d-flex align-items-center p-relative'>
                <span className='selected-user-color' style={{background: userColor}}/>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='Type in username...'
                    autoFocus={true}
                    type='text'
                />
                <span className='color-picker' onClick={() => setShowColorPicker(!showColorPicker)}> <img
                    src={colorPicker} alt='color-picker'/></span>
                {showColorPicker && <SketchPicker
                    color={userColor}
                    onChangeComplete={(color) => setUserColor(color.hex)}
                />}
            </div>
            <button
                className='create-user'
                disabled={userName.length === 0}
                onClick={setUserInfo}
            >
                Create user
            </button>
            <p className='divider-text'>or</p>
            <button onClick={() => window.location.href = '/chat'}>Randomize settings</button>
        </div>
    );
};

export default Home;