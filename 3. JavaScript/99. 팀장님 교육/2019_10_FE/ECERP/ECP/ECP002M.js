ecount.page.factory("ecount.page", "ECP002M", {
  onInitHeader: function (){

  },
  onInitContents: function (){
    const input = new ecount.control.input({
      id: "cust",
      naem: "CUST",
      value: "ecount"
    });
    // input.render();
    
    const radio = new ecount.control.radio({
      id: "wh",
      name: "WH",
      items: [
        {text: "받는창고", value: "1"},
        {text: "보내는 창고", value: "2"}
      ]
    });
    // radio.render();
    
    
    const form = new ecount.layout.form();
    form.add(input);
    form.add(radio);
    form.render();
  },
  onInitFooter: function (){

  }
})

