
# jQuery를 크롬 개발자 도구에서 사용할 수 있는 방법


```
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();
```