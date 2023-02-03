import { TBuildOptions } from './type/types';
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: TBuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoadres = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' :  MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
            modules: true,
        }
      },
      "sass-loader",
    ],

  };

  return [typescriptLoadres, styleLoaders];
};
