export type RouteInform = {
    title: string,
    url: string,
    Sub?: Omit<RouteInform, 'Sub'>[],
}

export const routes: RouteInform[] = [
    {
        title: 'Blog Home',
        url: '/'
    },
    {
        title: 'About Me',
        url: '/about'
    },
    {
        title: 'Posts',
        url: '/posts',
        Sub: [
            {
                title: 'React/Next',
                url: '/posts/react'
            },
            {
                title: 'Web3',
                url: '/posts/web3'
            },
        ]
    },
    {
        title: 'Test',
        url: '/test',
    }
]