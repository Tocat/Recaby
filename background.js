





 /*
  *页面地址改变事件响应函数
  *判断判断如果打开的是微博则向页面注入weiboinj.js
  *作者TOCAT
  *创建于July 14,2012
  */
function InsertFunc(tabId,changeInfo,tab)
{
   	var strs= new Array();
 	strs=tab.url.split("/");
 	if(strs[2]=="weibo.com")
	{
		var dateTime=new Date();
        var hh=dateTime.getHours();
		if(hh==8 || hh==9 || hh==10 || hh==11 || hh==14 || hh==15 || hh==16 || hh==17 || hh==20 || hh==21 || hh==22 || hh==23 )
		chrome.tabs.executeScript(tabId,{file : "weiboinj.js"});
		
	}
	
	//对人人网址进行判断；人人URL开头为XXX.RENREN.COM/；因此要多进行一次判断
	
	var strs2= new Array();
 	strs2=strs[2].split(".");
	if(strs2[1]=="renren")
	{
		var dateTime=new Date();
        var hh=dateTime.getHours();
		if(hh==8 || hh==9 || hh==10 || hh==11 || hh==14 || hh==15 || hh==16 || hh==17 || hh==20 || hh==21 || hh==22 || hh==23 )
		chrome.tabs.executeScript(tabId,{file : "renreninj.js"});
	}
}

//注册页面地址改变的响应函数
chrome.tabs.onUpdated.addListener(InsertFunc);

