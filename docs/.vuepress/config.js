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
    },
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-xxx'))
        }
    }
}