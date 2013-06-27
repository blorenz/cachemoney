
// $$ for CacheMoney

var localStorageCacheBackend = {
        driver: localStorage,
        fetch: localStorage.getItem,
        put: localStorage.setItem
    };

var cacheMoney = (function(){
    var _$$BE = localStorageCacheBackend;

    var make = function(driver, callback, params){
        callback.apply(arguments);
    }

    var getCacheVersion = function() {
        return make(_$$BE.fetch,'$$-cache-rev');
    }

    var setCacheVersion = function(v) {
        return make(_$$BE.put, '$$-cache-rev',JSON.stringify(v))
//        _$$BE.put('$$-cache-rev',JSON.stringify(v));
    }

    var isCacheValid = function(v) {
        return v == getCacheVersion();
    }

    var cachePlz = function(k, v) {
        _$$BE.put('$$-' + k, v);
    }

    return {
        getCacheVersion: getCacheVersion,
        setCacheVersion: setCacheVersion
    }
})();

$$$ = cacheMoney;