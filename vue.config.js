const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/client/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': __dirname + '/src',
        '@client': __dirname + '/src/client',
        '@shared': __dirname + '/src/shared',
      },
    },
    entry: {
      app: './src/client/main.ts',
    },
  },
})

console.log('dir: ', process.cwd())
