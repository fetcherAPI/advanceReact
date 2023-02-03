import { buildDevServer } from './buildDevServer';
import webpack from 'webpack'
import path from 'path'
import { buildResolvers } from './buildResolvers';
import { buildPlugin } from './buildPlugin';
import { buildLoaders } from './buildLoaders';
import { TBuildOptions, IBuildPaths } from './type/types';

export const buildWebpackConfig = (options: TBuildOptions):webpack.Configuration => {

    const {mode, paths, isDev} = options

    return {
        mode,
        entry: paths.entry,
        module: {
          rules: buildLoaders(options)
        },
        resolve:  buildResolvers(),
        output: {
          filename: "[name].[contenthash].js",
          path: paths.build,
          clean: true,
        },
        plugins: buildPlugin(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer:  isDev ? buildDevServer(options) : undefined
    }
}