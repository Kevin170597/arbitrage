import { useAuthContext } from '../../context/authContext';
import { AuthContextInterface } from '../../models';

export const Dashboard = () => {
    const { logout } = useAuthContext() as AuthContextInterface;

    const handleLogout = () => {
        logout();
    }

    return (
        <div className='Dashboard'>
            Dashboard
            <button onClick={handleLogout}>logout</button>
        </div>
    )
};