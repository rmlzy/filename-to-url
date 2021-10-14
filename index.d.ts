/**
 Convert a filename to a valid URL.
 @example
 ```
 import { filenameToUrl } from 'filename-to-url';
 filenameToUrl("统计报告@李四.xls");
 //=> "统计报告李四.xls"
 ```
 */
export function filenameToUrl(string: string): string;
