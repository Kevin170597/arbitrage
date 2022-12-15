import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { AuthContextInterface } from '../../models';
import { Coin } from '../';
import './Dashboard.css';

export const Dashboard = () => {
    const { logout } = useAuthContext() as AuthContextInterface;

    const handleLogout = () => {
        logout();
    }

    return (
        <div className='Dashboard'>
            <Routes>
                <Route path='/' element={<Coin />} />
            </Routes>
        </div>
    )
};