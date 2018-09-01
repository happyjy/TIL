# HOW 
> 1. LIST UP WONDER 
> 2. STUDY
> 3. DATE STUDY LIST

# INDEX 
> WEB  
Network  
Algorithm  
JavaScript  
FW  
etc 

---
---

# Web
* shadow_dom
  - ref : https://developers.google.com/web/fundamentals/web-components/shadowdom
  - ref : https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/#toc-introduction
* 브라우저 동작 방법(렌더링 되는 과정)
  - 참고자료 : https://d2.naver.com/helloworld/59361
* actual DOM vs Virtual DOM  
  - https://github.com/joshua1988/vuejs-seminar/blob/master/slides/vuejs-intermediate.pdf

# Network

# Algorithm
* (20180828) ~~duplication Compare with O(n), O(n²)~~
* (20180828) ~~no duple & convert object_array_string type~~

# JavaScript
* (20180831) 15 things you need to know be master in JS array
  - 일하면서 배열 자료형을 다루다 응용적인 내용을 더 알고 싶었는데 여기 몇개 배울게 있는것 같음
  - ref http://thatjsdude.com/jsConcepts/concepts/array.html#push_multiple
* (20180829) ~~SETTING OBJ KEY WITH CONTANT, VARIABLE~~
* documents.createElement 생성 과정을 알 필요가 있겠음 
* synchronous(setTimeout, setInterval)
* server-side rendering &(react, vue)
* ajax & server connection 

# FW
* 폴리머 재사용 컴포넌트 만들어 보기
  - ref : https://www.codeproject.com/Articles/992257/Polymer-for-reusable-web-components
* Vue 기준으로 AngularJs, react, polymer 비교 
  - ref : https://rubygarage.org/blog/best-javascript-frameworks-for-front-end

# etc
* (20180831) [중요***]50 Dev tool tips and tricks: Become an expert front end developer
  - https://www.youtube.com/watch?time_continue=1&v=oYvtsHu6GmY
* 리눅스 명령어
* git, Sourcetree 원리
* gulp.js, webpack 원리
* manifest, service-worker




*single asterisks*  
_single underscores_  
**double asterisks**  
__double underscores__  
<u>underline++</u>  
~~cancelline~~  

---

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = 'AAA';
  return a;
}
```

```bash
$ vim ./~zshrc
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting. 
But let's throw in a tag.
```

---
| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 **자신**을 기준으로 배치 |
`absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
`fixed` | **브라우저 창**을 기준으로 배치 |

