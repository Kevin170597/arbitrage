import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { AuthContextInterface } from '../../models';

export const Private = () => {
    const { isAuth } = useAuthContext() as AuthContextInterface;

    if (isAuth) return <Navigate to='/login'/>

    return <div><Outlet /></div>;
};