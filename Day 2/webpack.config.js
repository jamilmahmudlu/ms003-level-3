import * as path from 'path';
import { fileURLToPath } from 'url';

// const path = require('path');


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const config = {
  entry: ["@babel/polyfill",'./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  mode:"production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    port: 3200,
    static: {
        directory: path.join(__dirname, 'public'),
      },
  }
};

export default config;