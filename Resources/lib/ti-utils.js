exports.TiUtils = function(){
    
    var TiUtils = {};
    
    TiUtils.isArray = function(v){
        return toString.apply(v) === '[object Array]';
	};
       
    TiUtils.isEmpty = function(v, allowBlank){
        return v === null || v === undefined || ((TiUtils.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
    };
    
    TiUtils.isDefined = function(v){
        return typeof v !== 'undefined';
    };
    
    TiUtils.apply = function(o, c){
        if(o && c && typeof c == 'object'){
            for(var p in c){
                o[p] = c[p];
            }
        }
        return o;
    };
    
    TiUtils.each = function(array, fn, scope){
        if(TiUtils.isEmpty(array, true)){
            return;
        }
        if(!TiUtils.isArray(array)){
            array = [array];
        }
        for(var i = 0, len = array.length; i < len; i++){
            if(fn.call(scope || array[i], array[i], i, array) === false){
                return i;
            }
        }
    };
    
    return TiUtils;
};