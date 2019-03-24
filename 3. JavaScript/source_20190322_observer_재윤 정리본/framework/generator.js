
widget.generator = (function(){
    return {
        define: function(type, id, name, subTitle, groupId, option){
            var obj = { controlType: type, id: id, name: name, subTitle: subTitle, groupId: groupId, option: option, data: [] }; 

            return  {
                value: function(val){
                    obj.value = val;
                    return this;        //# POINT method chainging
                },

                handler: function(hdr){
                    obj.handler = hdr;
                    return this;
                },
                end: function(){
                    return obj;
                }
            };
        },

        control: function(){
            return (function(){
                // # POINT closure
                var obj = null; 
                return {
                    define: function(type, id, name, subTitle, groupId, option){
                        obj = { controlType: type, id: id, name: name, subTitle: subTitle, groupId: groupId, option: option, data: [] };
                        return this;
                    },
                    value: function(val){
                        obj.value = val;
                        return this;
                    },
                    handler: function(hdr){
                        obj.handler = hdr;
                        return this;
                    },
                    end: function(){
                        return obj;
                    }
                };
            })();
        },
        render: function(obj){
            var e = new EcInput(obj.name, obj.value);

            for (var handlerName in obj.handler) {
                e.setHandler(handlerName, obj.handler[handlerName]);
            }
            e.render();
        }
    };
})();