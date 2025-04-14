import React from 'react';

const Links = ({route}) => {
    return (
        <div>
            <i className='mr-10 px-4 hover:bg-amber-500'>
                    <a href={route.path}>{route.name}</a>
                </i>
        </div>
    );
};

export default Links;