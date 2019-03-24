var EcButton = class{
    constructor(options){
        $.extend(this, options);
        this.template = "<input type='button' value='" + options.name + "'/>";
    }

    render($parent){
        this.$el = $(this.template);
        $parent.append(this.$el);

        this.$el.on("click", e => {
            this.delegator.triggerEvent("button.click", {
                id: this.id,
                containerName: this.containerName,
                __self: this
            })
        });
    }
}