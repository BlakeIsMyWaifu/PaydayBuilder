import 'webpack-dev-server'

import path from 'path'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { Configuration, Plugin } from 'webpack'

const isDevelopment = process.env.NODE_ENV !== 'production'

const plugins: Plugin[] = [
	new ForkTsCheckerWebpackPlugin({
		async: false,
		eslint: {
			files: './src/**/*'
		}
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
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devServer: {
		static: path.join(__dirname, 'build'),
		compress: true,
		port: 4000,
		hot: true
	},
	plugins
}

export default config