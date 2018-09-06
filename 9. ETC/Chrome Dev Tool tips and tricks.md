


1. elements(has event) > Elements tab > Event Listeners
> 이벤트가 있는 엘레멘트를 inspect 했을때 이벤트 유무에 따라서 Event Listeners tab에 데이터가 나오는지 안나오는지 확인 할 수 있다.

  

2. ?

3. Source Tab > Event Listener Breakpoints
> 선택한 elements의 event function에 Breakpoint를 건다.  
> 소스에서 function을 직접 찾아서 Breakpoint를 선택한 것이 아니기 때문에 원하는 function에 Breakpoint를 걸기 좋을 듯


4. getElementsListeners(ELEMENTS)
> 해당 elements의 EventListner를 조회
> elements를 selector를 통해서 가지고 온다.
> 

5. monitorEvents(ELEMENTS) / unmonitorEvents(ELEMENTS)  
5.1 monitorEvents(ELEMENTS, [EVENT SORTS])
> eg) monitorEvents(ele, ['click', 'mouseout'])

6. Elements tab > find 기능 > css query selector를 사용 찾기 가능
> eg) #name : id가 name인 elements가 노란색으로 블락된다.  
> eg) .btn : class가 btn인 elements가 노란색으로 블락된다.

7. Elements tab > Styles tab 
> 색상 css 일때 색상을 골라 볼 수 있다.  
> 브라우져에서 색상을 축출할 수 있다.  
> css를 수정할 수 있다. (수정을 되돌리고 싶을때 ctlr+x || command+x 사용  

8. Elements tab > Styles tab > .cls option
> 선택한 elements css를 체크 박스로 선택/해제 할 수 있다.  
> class 속성을 추가 할 수 있다.  

9. Elements tab > Styles tab > Filter search box 
> 입력한 css 속성들이 하이라이트 된다.

--- 
# console
10. console > clear edit window
> command + L

11. Elements tab > 마우스를 code 위에 올려 놓으면 화면에 해당하는 화면이 하이라이트 된다.  
document.body.contentEditable = true   
=> 브라우져에서 직접 content를 바꿀수 있다.  

13. Sources tab > debug