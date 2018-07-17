var showMarkRight = false;
var ppdNowDate = new Date();
var ppddeadLine = new Date('2017','10','13','14','56');
if(ppdNowDate.getTime()<=ppddeadLine.getTime()){
	console.log(ppddeadLine.getTime())
	console.log(ppdNowDate.getTime())
	showMarkRight = true
};
window.onload=function(){

	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "https://hm.baidu.com/hm.js?7793a85089cf8d6555430d11e6b45034";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
	

	function ajax(){ 
	  var ajaxData = { 
	    type:arguments[0].type || "GET", 
	    url:arguments[0].url || "", 
	    async:arguments[0].async || "true", 
	    data:arguments[0].data || null, 
	    dataType:arguments[0].dataType || "text", 
	    contentType:arguments[0].contentType || "application/x-www-form-urlencoded", 
	    beforeSend:arguments[0].beforeSend || function(){}, 
	    success:arguments[0].success || function(){}, 
	    error:arguments[0].error || function(){} 
	  } 
	  ajaxData.beforeSend() 
	  var xhr = createxmlHttpRequest();  
	  xhr.responseType=ajaxData.dataType; 
	  xhr.open(ajaxData.type,ajaxData.url,ajaxData.async);  
	  xhr.setRequestHeader("Content-Type",ajaxData.contentType);  
	  xhr.send(convertData(ajaxData.data));  
	  xhr.onreadystatechange = function() {  
	    if (xhr.readyState == 4) {  
	      if(xhr.status == 200){ 
	        ajaxData.success(xhr.response) 
	      }else{ 
	        ajaxData.error() 
	      }  
	    } 
	  }  
	} 
	  
	function createxmlHttpRequest() {  
	  if (window.ActiveXObject) {  
	    return new ActiveXObject("Microsoft.XMLHTTP");  
	  } else if (window.XMLHttpRequest) {  
	    return new XMLHttpRequest();  
	  }  
	} 
	  
	function convertData(data){ 
	  if( typeof data === 'object' ){ 
	    var convertResult = "" ;  
	    for(var c in data){  
	      convertResult+= c + "=" + data[c] + "&";  
	    }  
	    convertResult=convertResult.substring(0,convertResult.length-1) 
	    return convertResult; 
	  }else{ 
	    return data; 
	  } 
	}
	//原生封装的ajax请求
	window.$ajax = ajax;
}