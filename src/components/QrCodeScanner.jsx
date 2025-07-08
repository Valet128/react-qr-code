import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from '../css/QrCodeScanner.module.css'

import { SCAN_DATA } from '../constants.js';

export const QrCodeScanner = () => {
    const [value, setValue] = useState('')
    const scanHandler = (result) => {
        setValue(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
            );
    };
    const settings = {
        finder: false,
    };

    const stylesSettings = {
        container: {width: 350, height: 350}
    };

    return (
        <div className={s.container}>
            <Scanner 
            allowMultiple={true} 
            onScan={scanHandler}
            components={settings}
            styles={stylesSettings}
            
            />
            <div>{value}</div>
        </div>
        
    );
};