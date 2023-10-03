import React from 'react';
import Image from 'next/image';

const hero_unit = () => {
    return (
        <div>
            Hero hero
            <Image src={"/next.svg"} alt="immagine" width={300} height={300} /> {/* / è la folder public */}
        </div>
    );
};

export default hero_unit;