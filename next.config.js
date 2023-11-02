/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_DB : "mongodb+srv://kobakjook:GFLo20a2nMHizdBt@blog.ugyqkqb.mongodb.net/",
        MONGO_OPTION: "?retryWrites=true&w=majority",
    },
}

module.exports = nextConfig
