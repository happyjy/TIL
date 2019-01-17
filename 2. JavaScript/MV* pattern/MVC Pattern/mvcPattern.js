//모델
const List = class{
  constructor(id, title){
    this.id = id;
    this.todo = [];
    this.title = title;
    List.instances.add(this);
  }
};
List.instances = new Set();

const Model = class{}
const List_list_model = class extends Model{
  //메소드 스타일로 통일
  getData(){return [...List.instances];}
};
const List_new_model = class extends Model{
  add(title){new List(Date.now() + '' + Math.random(), title);}
};

//뷰
const View = class{
  static newEl(name){return document.createElement(name);}
  constructor(controller){this.controller = controller;}
};
const List_list_view = class extends View{
  constructor(...arg){super(...arg);}
  render(model){
    const section = View.newEl('section');
    //목록리스트도 h3로 표시추가
    section.innerHTML = '<h3>목록리스트</h3>';
    section.appendChild(model.reduce((ul, v)=>{
      const li = View.newEl('li');
      li.innerHTML = v.title;
      li.addEventListener('click', _=>this.controller.click(v.id));
      ul.appendChild(li);
      return ul;
    }, View.newEl('ul')));
    const btn = View.newEl('button');
    btn.innerHTML = "+새 목록";
    btn.addEventListener('click', _=>this.controller.newList());
    section.appendChild(btn);
    return section;
  }
};
const List_new_view = class extends View{
  constructor(...arg){super(...arg);}
  render(model){
    const section = View.newEl('section');
    section.innerHTML = `<h3>새 목록추가</h3>
      <input type="text" placeholder="목록명을 입력하세요"/>
      <button>추가하기</button>
      <div style="color:red">${model.valiError || ''}</div>`;
    section.querySelector('button').addEventListener(
      'click',
      e=>this.controller.add(e.target.previousElementSibling.value)
    );
    return section;
  }
};
//컨트롤러
const Controller = class{
  constructor(router, data){
    this.router = router;
    this.data = data;
  }
  //라우트 방식을 일관성 있게 경로와 데이터로 나눔
  route(path, data){this.router.route(path, data);}
 
  //result속성에 대해 보다 강력하게 전개함
  get result(){
    //result를 읽을 때 설정한 적이 없으면 예외가 발생함
    if(!this._result) throw "result undefined";
    return this._result;
  }
  set result(v){this._result = v;}
};
const List_list = class extends Controller{
  constructor(...arg){
    super(...arg);
    const view = new List_list_view(this);
    const model = new List_list_model();
    this.result = view.render(model.getData());
  }
  //라우트 방식을 일관성 있게 경로와 데이터로 나눔
  click(id){this.route("list_view",{id});}
  newList(){this.route("list_new");}
};
const List_new = class extends Controller{
  constructor(...arg){
    super(...arg);
    const view = new List_new_view(this);
    this.result = view.render(this.data || {});
  }
  add(title){
    if(title){
      const model = new List_new_model();
      model.add(title);
      this.route('list_list');
    }else{
      //라우트 방식을 일관성 있게 경로와 데이터로 나눔
      this.route('list_new", {valiError:"목록명 좀 제대로..."}');
    }
  }
};
//라우터
const Router = class{
  constructor(stage){
    this.stage = stage;
    this.router = new Map();
  }
  add(target, controller){
    this.router.set(target, data=>new controller(this, data).result);
  }
  //경로와 별도로 데이터를 받아들임
  route(path, data){
    this.stage.innerHTML = '<h2>To-do</h2>';
    this.stage.appendChild(this.router.get(path)(data));
  }
};
const router = new Router(document.getElementById('stage'));
router.add('list_list', List_list);
router.add('list_new', List_new);
router.route('list_list');
