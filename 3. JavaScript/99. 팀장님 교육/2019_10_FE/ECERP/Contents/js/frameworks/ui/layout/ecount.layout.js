ecount.layout = class {
  constructor(options){
    this.options = options;
    this.itemList = [];
  }
};

ecount.layout.form = class extends ecount.layout {
  constructor(options){
    super(options);
  }

  add(control){
    this.itemList.push(control);
  }

  render(){
    $("body").append(this.getTemplate());
    
  }
  
  getTemplate(){
    this.$el = $("<table></table>");
    this.itemList.forEach(item => {
      const $tr = $("<tr/>");
      const $td_item = $(`<td>${item.getTitle()}</td>`);
      const $td_child = $(`<td/>`);
      item.render($td_child);

      $tr.append($td_item);
      $tr.append($td_child);
      this.$el.append($tr);
    })
    $("body").append(this.$el);
    // return this.itemList.map(item => {
    //   return ``
    // })
  }
};