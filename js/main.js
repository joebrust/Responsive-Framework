var myBreakPoints = [468, 728];

function init(){
	respAd.init(myBreakPoints);
}

function respAdSizeChangeHandler(size){
    document.getElementById('container').className = size;
}

var respAdSizes = ['small', 'medium', 'large'];
var respAdBreaks = [];
var respBrowserSize = '';

var respAd = {
    init: function(breaks){
        respAdBreaks = breaks;
        
        window.addEventListener('resize', respAd.getBrowserSize, false);
        window.addEventListener('orientationchange', respAd.getBrowserSize, false);

        respAd.getBrowserSize();
    },
    destroy: function(){
        window.removeEventListener('resize', respAd.getBrowserSize, false);
        window.removeEventListener('orientationchange', respAd.getBrowserSize, false);
    },
    getBrowserSize: function(){
        var browser_width = window.innerWidth;
        
        for(var i = 0; i < respAdBreaks.length; i++){
            if(browser_width < respAdBreaks[i]){
                respAd.setAdSize(i);

                break;
            }else{
                if(i == respAdBreaks.length - 1){
                    respAd.setAdSize(i + 1);

                    break;
                }
            }
        }
    },
    setAdSize: function(index){
        if(respBrowserSize != respAdSizes[index]){
            respBrowserSize = respAdSizes[index];

            respAdSizeChangeHandler(respBrowserSize);
        }
    },
    getAdSize: function(){
        return respBrowserSize;
    },
    getDeviceOrientation: function(){
        if(window.orientation){
            switch(window.orientation){
                case 0: case 180:
                    return 'Portrait';
                break;

                case 90: case -90:
                    return 'Landscape';
                break;
            }
        }else{
            return null;
        }
    },
    getDevicePixelDensity: function(){
        if(window.devicePixelDensity){
            return window.devicePixelDensity;
        }else{
            return null;
        }
    },
    getUserBrowser: function(){
        var browser_string = navigator.userAgent;

        if(browser_string.search('MSIE') != -1){    return 'Internet Explorer';}
        if(browser_string.search('Chrome') != -1){  return 'Chrome';}
        if(browser_string.search('Firefox') != -1){ return 'Firefox';}
        if(browser_string.search('Safari') != -1){  return 'Safari';}

        return 'Unknown Browser';
    },
    getUserDevice: function(){
        var browser_string = navigator.userAgent;

        if(browser_string.search('Mac') != -1){     return 'Mac';}
        if(browser_string.search('Windows') != -1){ return 'Windows';}
        if(browser_string.search('iPhone') != -1){  return 'iPhone';}
        if(browser_string.search('iPad') != -1){    return 'iPad';}
        if(browser_string.search('Android') != -1){ return 'Android';}

        return 'Uknown Device';
    }
}