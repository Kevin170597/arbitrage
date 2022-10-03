import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { AuthContextInterface } from '../../models';

export const Login = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login } = useAuthContext() as AuthContextInterface;

    const handleLogin = (e: any) => {
        e.preventDefault();
        login(name, password);
    };

    return (
        <div className='Login'>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="name" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" />
                <button type="submit">Send</button>
            </form>
            <p>Don't you have an account?</p>
            <NavLink to='/register'>Register</NavLink>
        </div>
    )
};