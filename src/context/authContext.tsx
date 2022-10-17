import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';

interface Children {
    children: ReactNode
}

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}: Children) => {
    const [isAuth, setAuth] = useState(window.localStorage.getItem('AUTH') ?? false);

    const login = useCallback((name: string, password: string) => {
        const auth = async () => {
            try {
                const user = await fetch(`${process.env.REACT_APP_API}/users/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify({ name, password })
                });
                const res = await user.json();
                if (res.error) throw res.error;
                //console.log(res);
                window.localStorage.setItem('AUTH', '1');
                setAuth(true);
            } catch (error) { console.log(error); }
        }
        auth();
    }, []);

    const logout = useCallback(() => {
        const out = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/users/logout`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', },
                });
                const res = await response.json();
                if (res.error) throw res.error;
                //console.log(res);
                window.localStorage.removeItem('AUTH');
                setAuth(false);
            } catch (error) { console.log(error); }
        }
        out();
    }, []);

    const value = useMemo(() => ({ login, logout, isAuth }), [login, logout, isAuth]);

    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext); 