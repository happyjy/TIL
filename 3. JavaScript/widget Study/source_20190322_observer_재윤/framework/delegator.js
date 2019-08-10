var Delegator = class {
    constructor() {
        this.handlers = {};
    }
    register(eventName, handler, context) {
        var handlerArray = this.handlers[eventName];
        if (undefined === handlerArray) {
            handlerArray = this.handlers[eventName] = [];
        }

        handlerArray.push({ 
            handler: handler, 
            context: context 
        });
    }
    unregister(eventName, handler, context) {
        var handlerArray = this.handlers[eventName];

        if (undefined === handlerArray) {
            return;
        }

        for (var hidx = 0; hidx < handlerArray.length; hidx++) {
            var currentHandler = handlerArray[hidx];
            if (handler === currentHandler['handler'] && context === currentHandler['context']) {
                handlerArray.splice(hidx, 1);
                return;
            }
        }
    }
    triggerEvent(eventName, data) {
        var handlerArray = this.handlers[eventName];
        if (undefined === handlerArray) {
            return;
        }

        for (var hidx = 0; hidx < handlerArray.length; hidx++) {
            var currentHandler = handlerArray[hidx];
            currentHandler['handler'].call(currentHandler['context'], data);
        }
    }
}