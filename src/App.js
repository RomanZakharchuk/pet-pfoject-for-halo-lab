import style from './App.module.scss';
import { Layout } from "./pages/Layout";
import { useSelector } from "react-redux";

const App = () => {
    const positionFixed = useSelector( state => state.position?.screenPosition );

    return (
        <div className={`${style.app} ${positionFixed && style.fixed}`}>
            <Layout />
        </div>
    );
}

export { App };
