import React from 'react';

const Navigation = ({items}) => (
    <nav className='navigation'>
        <ul>
            {
                items.map((item) => (
                    <li>{ item }</li>
                ))
            }
        </ul>
    </nav>
);

export default Navigation;
