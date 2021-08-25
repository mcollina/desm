export default urlDirname;
declare function urlDirname(url: string): string;
declare function urlJoin(url: string, ...str: string[]): string;
export { urlJoin as join, urlDirname as dirname };
