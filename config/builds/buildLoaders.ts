import {TBuildOptions} from './type/types';
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: TBuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoaders = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
            modules: {
              auto: ((resPath: string) => resPath.includes('.module.scss')),
              localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : "[hash:base64:5]"
            },

        }
      },
      "sass-loader",
    ],

  };

  return [typescriptLoaders, styleLoaders];
};
