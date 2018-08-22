# 2 div on smae line
>  key : display:line;

## display property
> layout에 가장 중요한 속성  
대부분 기본 elements는 'block' or 'inline'  
block ele = block-level ele/ inline = inline ele

* block  
 : div는 block-level ele의 기준이다  
 : block 속성 ele - form, header, footer, section

* inline  
 : inline 속성 ele -span, a


## 예
> duv룰 같은 라인에 두고 싶을때
```
<html lang="en">
<head>
  <title>Document</title>
  <style>
    #block_container
    {
        text-align:center;
    }
    #bloc1, #bloc2
    {
        display:inline;
        border: 1px solid blue;
    }
  </style>
</head>
<body>
  <div id="block_container">
    <div id="bloc1">div 1</div>  
    <div id="bloc2">div 2</div>
  </div>
</body>
</html>

```



### 참고
http://learnlayout.com/display.html