window.ecount = {
};

ecount.control = class {
  constructor(options) {
    this.options = options;
  }

  getTitle(){
    return this.options.id;
  }
  
  render($parent){
    $parent.append(this.getTemplate());
  }
}

ecount.control.input = class extends ecount.control {
  constructor(options) {
    console.log("### ecount.control.input: ", options);
    super(options);
  }

  // render($parent) {
  //   // console.log("### control.input render");
  //   // $("body").append(this.getTemplate());
  //   $parent.append(this.getTemplate());
  // }

  getTemplate() {
    return `<input type="text" id="${this.options.id}"
                name="${this.options.name}"
                value="${this.options.value}"/>`;
  }

  getTitle() {
    return this.options.id;
  }

  getValue() {

  }
  setValue() {

  }
  extract() {

  }
  reset() {

  }

}


ecount.control.radio = class extends ecount.control {
  constructor(options) {
    console.log("### ecount.control.radio: ", options);
    super(options);
  }

  // render($parent) {
  //   // console.log("### control.radio render");
  //   // $("body").append(this.getTemplate());
  //   $parent.append(this.getTemplate());

  // }

  getTemplate() {
    return this.options.items.map(item => {
      return `<input type="radio" id="${this.options.id}"
                  name="${this.options.name}"
                  value="${item.value}">${item.text}</input>`;
    }).join("");
  }

  getTitle() {
    return this.options.id;
  }

  getValue() {

  }
  setValue() {

  }
  extract() {

  }
  reset() {

  }
}