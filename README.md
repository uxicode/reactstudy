## - React Route Study

1. npm install webpack webpack-dev-server --save-dev
2. touch webpack.config.js
<pre>
   <code>
        var path = require('path');
        var webpack = require('webpack');
        module.exports= {
            // 개발툴에서 소스 확인가능~
            devtool: '#inline-source-map',
            //개발 진입점 설정
            entry: path.join( __dirname , '/app/js/app.js'),
            // 최종 산출 파일 설정.
            output: {
                // 산출 파일 경로
                path: path.resolve( __dirname + 'public'),
                // 산출 파일 이름 지정
                filename: 'bundle.js'
            },
            // 가상 개발 서버 설정
            devServer:{
                // 컨텐츠 경로
                contentBase: './public',
                historyApiFallback: true,
                inline: true,
                port: 8090
            },
            resolve: {
                extensions: ['.js', '.jsx', '.json']
            },
            module: {
                rules: [
                    {
                        test: /\.json$/,
                        loader: 'json'
                    },
                    //바벨 로더 및 react 설정
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        //loader: 'babel-loader',
                        use:[
                            {
                                loader:'babel-loader',
                                options:{
                                    presets:['es2015', 'react']
                                }
                            }
                        ]
                    },
                    /* css 로드 */
                    {
                        test:/\.css$/,
                        use: ['style', 'css']
                        // loader:'style-loader!css-loader' // 이렇게 한줄로 해도 된다.
                        /*
                         아래같은 방법도 있으나 [path]___[name]__[local]___[hash:base64:5] 설정 등으로
                         문자변환땜시 개발자 도구에서 알아 먹기 힘들다. 실제 빌드시에 적용하자.

                         loaders: [
                         'style?sourceMap',
                         'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]
                         ]
                         */
                    },
                    /* Font-Awesome 폰트 없음 제거*/
                    { test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000' },
                    { test: /\.(ttf|eot)$/, loader: 'file-loader' }
                ]
            },
            plugins: [
                //압축 경량화
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                })
            ]
        };

   </code>
</pre>
3. create directory / create file

    app>js>app.js

    public>index.html / 아래는 index.html  내용이다. body태그 안에 구성시키면 된다.
    <pre>
       <code>
               <div id="root"></div>
               <script src="bundle.js"></script>
       </code>
    </pre>
4. npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
5. npm install style-loader css-loader --save
6. npm install react react-dom --save

