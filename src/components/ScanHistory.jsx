import { SCAN_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div>
            {data.map((text) => (
                <p key={text}>{text}<span style={{padding: '5px'}}><QRCodeSVG value={text} size={100}/></span></p>
            ))}
        </div>
    );
};