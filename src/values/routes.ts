export type RouteInform = {
    id: string,
    path: string,
    order?: number,
    Sub?: Omit<RouteInform, 'Sub'>[],
}

export const routes: RouteInform[] = [
    {
        id: 'Blog Home',
        path: '/'
    },
    {
        id: 'About Me',
        path: '/about'
    },
    {
        id: 'Posts',
        path: '/posts',
    },
]