const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// usaremos fast refresh para conseguirmos alterar e salvar o codigo, refletindo no nosso browser sem perder
//o estado dos componentes.


const isDevelopment = process.env.NODE_ENV != 'production';
module.exports = {
    //usando o metodo development, ele processara o webpack de forma mais rapida.
    mode: isDevelopment ? 'development' : 'production',
    // usamos o  eval-source-map para podermos ler o codigo que esta presente dentro do bundle, de forma mais apropriada.
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    // quando usamos o __dirname, ele vai pegar o diretorio onde está o arquivo com a instrução
    // de path
    entry: path.resolve(__dirname, 'src', 'index.tsx'),

    // agora declaramos  qual arquivo gerar com webpack. que e o bundle.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'

    },

    // podemos também usar o webpack para observar as alteracoes que implementamos no código
    // e automaticamente  efetuar a alteracao no bundle.
    devServer: {
        static: path.resolve(__dirname, 'public')

    },
    //criar a instrucao resolve declara quais formatos serão lidos.


    resolve: {
        extensions: ['.js', '.jsx','.ts', '.tsx']


    },
    //aqui declaramos como a nossa aplicacao se comportara lidando com determinado
    //arquivo.

    // com este plugin injetamos no nosso html o nosso arquivo bundle.js em babel.
    plugins: [
        // se estiver em desenvolvimento, ira executar a segunda parte que e o refresh webpack.
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
        // aqui usamos filter para remover o false caso o if do isDevelopment retornar false, removendo o possivel erro no codigo.
    ].filter(Boolean),
    module: {
        rules: [{
            //quando importar arquivo .jsx, converter com o babel-loader.
            test: /\.(j|t)sx$/,
            exclude: /node_modules/,
            // e entao aplicar o react-refresh em nosso babel.
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        isDevelopment && require.resolve('react-refresh/babel')
                    ].filter(Boolean)
                }
            },
        },
        // criamos a regra para ler arquivos SCSS com o style
        //loader, e o css loader. Estamos usando SASS com CSS.
        {

            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
        ]

    }
}