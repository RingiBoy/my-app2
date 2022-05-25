import React from 'react';

const Car = ({car:{id,model,year,price}}) => {
    return (
        <div>
            {id},{model},{year},{price}
        </div>
    );
};

export default Car;