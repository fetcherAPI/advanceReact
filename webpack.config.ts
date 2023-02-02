import path from 'path';
import webpack from "webpack";
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildPaths, IBuildEnv } from './config/build/type/types';




export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html")
  }
  
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 4001
  
  const config: webpack.Configuration  = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })


  return config
}

