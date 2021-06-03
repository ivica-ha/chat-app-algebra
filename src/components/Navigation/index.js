import React, {useEffect, useState} from 'react';
import {getSessionStorage, removeSessionStorage, setSessionStorage} from "../../functions";
import './style.css'
import cogs from '../../images/settings-cogs.svg'
import logo from '../../images/chat-icon.svg'

const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [theme, setTheme] = useState(getSessionStorage('theme') || 'light');
    const [username, setUsername] = useState();

    useEffect(() => {
        setUsername(getSessionStorage('userName'))
    }, [username]);

    useEffect(() => {
        setSessionStorage('theme', theme)
        const classList = document.body.classList
        if (!classList.contains(theme)) {
            classList.add(theme)
            return () => document.body.classList.remove(theme)
        }
    }, [theme])

    const handleThemeChange = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const handleUnsubscribe = () => {
        window.location.href = '/';
        removeSessionStorage('userName')
        removeSessionStorage('userColor')
    }

    return (
        <div className='navigation'>
            <div className="container d-flex align-items-center justify-content-between p-relative">
                <div className='d-flex align-items-center logo'><img className='logo-image' src={logo} alt='logo'/>
                    <span>WeChat</span></div>
                <div className='d-flex align-items-center'>
                    {username}
                    <span className='menu-toggle' onClick={() => setShowMenu(!showMenu)}><img src={cogs} alt='cogs'/></span>
                    {showMenu && <ul className='menu-dropdown'>
                        <li onClick={handleThemeChange}>{theme === 'light' ? 'Dark' : 'Light'} mode</li>
                        {!!getSessionStorage('userName') && <li onClick={handleUnsubscribe}>Log out</li>}
                    </ul>}
                </div>
            </div>

        </div>
    );
};

export default Navigation;
