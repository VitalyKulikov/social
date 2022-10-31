import React from 'react';
import head from './Header.module.css';

const Header = () => {
    return <header className={head.header}>
        <div className={head.menu}>
            <a>About</a>
            <a>Job</a>
            <a>Contact</a>
        </div>
        <div className={head.botoom}>
            <botoom>Log out</botoom>
        </div>
    </header>
}

    export default Header;