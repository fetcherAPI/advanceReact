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
      // Creates `style` nodes from JS strings
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
    options: {
      modules: true,
    },
  };

  return [typescriptLoadres, styleLoaders];
};
