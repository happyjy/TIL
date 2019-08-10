
var EcPage = class {

    constructor(options){
        $.extend(this, options);
        // # Study delegator
        // * delegator를 생성해서 this.evetns에 담고 
        //createHeader, createContents, createFooter 단계에서 delegator property에 담아서 
        //각 단계로 넘
        this.events = new Delegator();

        this.init();
        this.events.register("button.click", e => {
            var command = ["on", e.containerName, e.id].join("").toLowerCase();
            this[command] && this[command](e);
        });
    }

    init(){
        this.render();
    }

    render(){
        debugger;
        this.createHeader();
        this.createContents();
        this.createFooter();

        this.onLoadComplete();
    }

    createHeader(){
        var header = [];
        this._onInitHeader(header);     // STUDY THIS 1. EcInventoryPage의 _onInitHeader를 가르킴

        this.header = new EcHeader(header);
        this.header.delegator = this.events;
        this.header.render();
    }

    createContents(){
        var contents = [];
        this._onInitContents(contents);

        this.contents = new EcContents(contents);
        this.contents.delegator = this.events;
        this.contents.render();
    }

    createFooter(){
        var footer = [];
        this._onInitFooter(footer);

        this.footer = new EcFooter(footer);
        this.footer.delegator = this.events;
        this.footer.render();
    }

    _onInitHeader(header){
        this.onInitHeader(header);  //STUDY THIS 3. ESD007M.js의 onInitHeader를 가르킴 
    }
    
    _onInitContents(contents){
        this.onIinitContents(contents);
    }

    _onInitFooter(footer){
        this.onInitFooter(footer);
    }
}

var EcInventoryPage = class extends EcPage{

    constructor(options){
        super(options);
    }


    _onInitHeader(header){
        super._onInitHeader(header) //STUDY THIS 2. EcPage의 _onInitHeader를 가르킴

        var userData1 = define("EcButton", "btn1", "btn1").end();
        header.push(userData1);
    }
}

