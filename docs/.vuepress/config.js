module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/',
    dest: 'public',
    configureWebpack: {
        resolve: {
            alias: {
            '@alias': 'path/to/some/dir'
            }
        }
    }
}
