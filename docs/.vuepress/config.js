module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/dev/',
    configureWebpack: {
        resolve: {
            alias: {
            '@alias': 'path/to/some/dir'
            }
        }
    }
}