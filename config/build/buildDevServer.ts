import { Configuration as DevServerConfigurations } from 'webpack-dev-server';
import { TBuildOptions } from './type/types';

export const buildDevServer = (options: TBuildOptions): DevServerConfigurations => {
    const {port} = options
    return {
        port,
        open: true
    }
}