export type RouteInform = {
    title : string,
    url : string,
    Sub? : RouteInform[],
}

export const routes : RouteInform[] = [
    {
        title : 'Blog Home',
        url : '/'
    },
    {
        title : 'About Me',
        url : '/about/'
    },
    {
        title : 'Posts',
        url : 'Sub Link',
        Sub : [
            {
                title: 'React/Next',
                url : '/posts/react'
            },
            {
                title: 'Web3',
                url : '/posts/web3'
            },
        ]
    },
]