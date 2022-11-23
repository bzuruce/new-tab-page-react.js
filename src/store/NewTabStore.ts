export interface NewTabStore {
    userName: string;
    userTodo: string;
    urlName: string;
    urlLink: string;
    setUserName: (userName: string) => void;
    setUserTodo: (userTodo: string) => void;
    setUrlName: (urlName: string) => void;
    setUrlLink: (urlLink: string) => void;
}