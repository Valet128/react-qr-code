import {Link} from "react-router-dom";
import s from "../css/Navigation.module.css"


export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Генерировать QrCode</Link>
            <Link to="/scan">Сканировать QrCode</Link>
            <Link to="/generateHistory">История генерирования</Link>
            <Link to="/scanHistory">История сканирования</Link>
        </nav>
    );
};