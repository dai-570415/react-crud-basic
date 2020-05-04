import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <React.Fragment>
            <h1>React × Firebase App</h1>
            <nav className="nav">
                <Link to="/">Top</Link>
                <Link to="/users/create">ユーザー登録</Link>
            </nav>
        </React.Fragment>
    );
}

export default Header;