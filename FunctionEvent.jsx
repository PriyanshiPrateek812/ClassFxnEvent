import React, { useState } from 'react';

const Header = () => {
    const [user, setUser] = useState('Guest')
    
    // function onClickHandler() {
    //     setUser('John')
    // }

    const onClickHandler = () => {
        setUser('John')
    }

    return (
        <div>
            <h1>Welcome { user }</h1>
            <button onClick={onClickHandler}>Login</button>
        </div>
    )

}
export default Header;
