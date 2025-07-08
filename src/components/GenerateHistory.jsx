import {GENERATE_DATA} from '../constants'
import { QRCodeSVG } from "qrcode.react";

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    
    return (
        <div>
            {data.map((text) => (
                <p key={text}>{text}<span style={{padding: '5px'}}><QRCodeSVG value={text} size={100}/></span></p>
            ))}
        </div>
    );
};