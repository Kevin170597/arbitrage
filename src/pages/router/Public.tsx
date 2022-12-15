import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { AuthContextInterface } from '../../models';

export const Public = () => {
    const { isAuth } = useAuthContext() as AuthContextInterface;

    if (!isAuth) return <Navigate to='/dashboard'/>

    return <div><Outlet /></div>;
};