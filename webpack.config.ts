import 'webpack-dev-server'

import path from 'path'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration, WebpackPluginInstance } from 'webpack'

const isDevelopment = process.env.NODE_ENV !== 'production'

const copyPluginPatterns: CopyPlugin.ObjectPattern[] = [
	{
		from: 'public/images',
		to: 'images'
	}
]
if (!isDevelopment) {
	copyPluginPatterns.push({
		from: 'public/CNAME'
	})
}

const plugins: WebpackPluginInstance[] = [
	new ForkTsCheckerWebpackPlugin({
		async: false,
		eslint: {
			files: './src/**/*'
		}
	}),
	new HtmlWebpackPlugin({
		template: 'public/index.html',
		favicon: 'public/favicon.ico'
	}),
	new CircularDependencyPlugin({
		exclude: /a\.js|node_modules/,
		include: /src/,
		failOnError: true,
		allowAsyncCycles: false,
		cwd: process.cwd()
	}),
	new CopyPlugin({
		patterns: copyPluginPatterns
	})
]
if (isDevelopment) {
	plugins.push(new ReactRefreshWebpackPlugin())
}

const config: Configuration = {
	mode: isDevelopment ? 'development' : 'production',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript'
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		modules: [
			'node_modules',
			path.resolve(__dirname + '/src')
		],
		alias: {
			src: path.resolve(__dirname + '/src')
		}
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		static: path.join(__dirname, 'build'),
		historyApiFallback: true,
		port: 4000,
		open: true,
		hot: true
	},
	plugins
}

export default config