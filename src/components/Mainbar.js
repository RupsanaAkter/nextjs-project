import Image from 'next/image';
import React from 'react';

const Mainbar = () => {
    return (
        <div>
            <h1>This is main bar</h1>
            <Image src='/images/flower.jfif' width={200} height={200} alt=''></Image>
        </div>
    );
};

export default Mainbar;