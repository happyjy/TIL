//EcGenerfator.js

(function(){
    ecount.generator = function(){
        return {
            header: function(){
                var headerData = {};
                return {
                    /**
                     *  헤더 타이틀 설정
                     */
                    setTitle: function(t){
                        headerData.title = t;
                        return this;
                    },                    
                    getTitle: function(){
                        return headerData.title;
                    },
                    /**
                     * 헤더 타이틀 설정
                     */
                    add: function(type, item, hidden){

                    }

                }
            }
        }
    }
})();