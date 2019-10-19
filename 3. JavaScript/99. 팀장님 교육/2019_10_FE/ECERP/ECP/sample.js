  const input = new ecount.control.input({
    id: "cust",
    naem: "CUST",
    value: "ecount"
  });
  input.render();

  const radio = new ecount.control.radio({
    id: "wh",
    name: "WH",
    items: [
      {text: "받는창고", value: "1"},
      {text: "보내는 창고", value: "2"}
    ]
  });
  radio.render();