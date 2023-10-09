export type RouteInform = {
    title: string,
    path: string,
    order?: number,
    Sub?: Omit<RouteInform, 'Sub'>[],
}

export const routes: RouteInform[] = [
    {
        title: 'Blog Home',
        path: '/'
    },
    {
        title: 'About Me',
        path: '/about'
    },
    {
        title: 'Posts',
        path: '/posts',
    },
]