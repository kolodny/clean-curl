clean-curl
===

Clean up curl commands so you can copy them from devtool and put into a github issue

[Right click a resource in Network tab and "Copy as Curl"](https://twitter.com/chromiumdev/status/317183238026186752) then run it through this clean-curl:


```bash
$ clean-curl 'https://www.npmjs.com/' -H 'Pragma: no-cache' -H "yolo: 123" -H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en-US,en;q=0.8,st;q=0.6' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36' -H 'Accept: */*' -H 'Referer: https://www.npmjs.com/package/minimist' -H 'Connection: keep-alive' -H 'Cache-Control: no-cache' -A 123

#outputs
curl https://www.npmjs.com/ -H yolo: 123 -A 123
```
