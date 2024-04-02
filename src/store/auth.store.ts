import { create } from 'zustand';

interface AuthState {
    status: 'auhenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    };
    login: (email: string, password: string) => void;
    logout: () => void;


}

export const useAuthStore = create<AuthState>()((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: (email: string, password: string) => {
        set({
            status: 'auhenticated',
            token: 'abc123',
            user: {
                email: email,
                name: 'Jhon',
            }
        });
    },
    logout: () => {
        set({
            status: 'unauthenticated',
            token: undefined,
            user: undefined,
        })
    },
})
);  