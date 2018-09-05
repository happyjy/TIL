


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