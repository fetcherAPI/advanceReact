import { Interface } from "readline"

export type TBuildMode = 'development' | 'production'
export interface IBuildPaths {
    entry: string,
    build: string,
    html: string,
}

export type TBuildOptions = {
    mode: TBuildMode,
    paths: IBuildPaths,
    isDev: boolean,
    port: number
}

export interface IBuildEnv {
    mode: TBuildMode,
    port: number
}