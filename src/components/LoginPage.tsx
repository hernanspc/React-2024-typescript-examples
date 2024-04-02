import { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {

    const authStatus = useAuthStore(state => state.status);
    const user = useAuthStore(state => state.user);

    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);



    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    }, [])

    if (authStatus === 'checking') {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            {(authStatus == 'auhenticated') ?
                <div> Autenticado como {JSON.stringify(user, null, 2)}</div>
                : <div> No autenticado  </div>
            }
            {
                (authStatus == 'auhenticated') ? (
                    <button onClick={logout}>Logout</button>
                ) :
                    (
                        <button onClick={() => login('hernanpormachi@gmail.com', 'password123')} >Login</button>
                    )
            }
        </div>
    )
}


