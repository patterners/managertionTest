

declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }


  export interface HttpInfo {
    code: number,
    messgae: string,
    data?: HttpType
  }
  export enum HttpType {
    object,
    Array
  }
  export function parse(urlStr: string): Url;
}
declare module "LoginForm" {
  export interface LoginForm {
    user_name: string,
    user_pwd: string
  }
}
declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  // export let sep: string;
}