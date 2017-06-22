//API服务器地址
var api_url="http://zhangbailong.com/Api/Public/LoachBlog/";
// 获取所有笔记并分页 参数pageNum 页码数
var api_getAllArticles="Articles.getAllArticles";

//格式化unix时间戳
function get_Time_Formart(unix_time)
{
	var unixtime=parseInt(unix_time);
    var unixTimestamp = new Date(unixtime* 1000);
    commonTime = unixTimestamp.toLocaleString();
    return commonTime;
}
//去掉html标签
function html_Format(string)
{  
	var reTag = /<(?:.|\s)*?>/g;
	return string.replace(reTag,"");   
}


 
