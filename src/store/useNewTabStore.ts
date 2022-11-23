import { NewTabStore } from './NewTabStore';
import { devtools } from 'zustand/middleware'

import create from 'zustand';

export const useNewTabStore = create<NewTabStore>()(
    devtools(
        (set) => ({
            userName: '',
            userTodo: '',
            urlName: '',
            urlLink: '',
            setUserName: (userName: string) => set(() => ({ userName })),
            setUserTodo: (userTodo: string) => set(() => ({ userTodo })),
            setUrlName: (urlName: string) => set(() => ({ urlName })),
            setUrlLink: (urlLink: string) => set(() => ({ urlLink })),
        })
    )
)