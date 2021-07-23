module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': __dirname + "/src"
            }
        },
        entry: {
            app: './src/main.js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/app.scss";
                `
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: process.env.NODE_ENV === "development"?process.env.VUE_APP_DEV_PROXY:process.env.BASE_URL,
                changeOrigin: true
            }
        }
    }
};