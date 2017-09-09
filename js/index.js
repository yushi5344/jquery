$(function(){
	$('#search_button').button({
		//disabled:true
		//label:'搜索'
		//icons:{
			//primary:'ui-icon-search'
			//secondary:'ui-icon-triangle-1-s'

		//},
		//text:false

	});
	$('#reg_a').click(function(){
		$('#reg').dialog('open');
	});
	$('#reg').dialog({
			//dialog()属性
			title:'知问注册',
			buttons:{
				'提交':function(){
					alert('正在提交中');
				},
				// '取消':function(){
				// 	$(this).dialog('close');
				// }
			},
			//position:'left top',
			 width:320,
			 height:340,
			// minWidth:100,
			// minHeight:200,
			// show:'blind',
			// hide:'slide',
			 autoOpen:true,
			// draggable:true,//不可移动对话框
			 resizable:false,//不可以改变大小
			 modal:true,//对话框外不可操作
			// closeText:'关闭',
			//dialog事件
			/*
			focus:function(e,ui){
				alert('得到焦点之后执行');
			},
			create:function(){
				alert('创建时执行');
			},
			open:function(){
				alert('打开时执行');
			},
			close:function(){
				alert('关闭后执行');
			},
			//这个事件可以做一些关闭确认的操作
			beforeClose:function(){
				alert('将要关闭时执行');
				//return false;
			},
			// drag:function(e,ui){
			// 	alert('每次移动后执行');
			// 	alert('top:'+ui.position.top+'\n'+'left:'+ui.position.left);
			// }
			dragStart:function(e,ui){
				alert('移动开始后执行');
				alert('top:'+ui.position.top+'\n'+'left:'+ui.position.left);
			},
			dragStop:function(e,ui){
				alert('移动结束后执行');
				alert('top:'+ui.position.top+'\n'+'left:'+ui.position.left);
			},
			resize:function(){
				alert('每次调整大小后执行');
			}
			*/
		});
		$('#reg').buttonset();
		$('#date').datepicker();
		//$('#reg input[title]').tooltip();
		//$('#reg input[title]').tooltip({
			//disabled:true
			//content:'改变title',
			//tooltipClass:'a',
			// position:{
			// 	my:'left center',
			// 	at:'right center'
			// },
			// show:'blind',
			// hide:'blind',
			//track:true,//鼠标跟随
			// open:function(){
			// 	alert('打开');
			// }
		//});
		// var host=['aa','aaaa','aaaaa','bb'];
		// $('#email').autocomplete({
		// 	source:host,
		// 	minLength:2,//最小触发值
		// 	delay:100,//延迟时间
		// 	focus:function(e,ui){
		// 		alert('获取焦点时触发');
		// 	},
		// 	select:function(){
		// 		alert('选定触发');
		// 	},
		// 	change:function(){
		// 		alert('改变触发');
		// 	},
		// 	search:function(){
		// 		alert('搜索完毕触发');
		// 	}
		// });  
		$('#email').autocomplete({
			delay:0,
			autoFocus:true,
			source:function(request,response){
				//获取用户输入的内容
				//alert(request.term);
				//绑定数据源
				var hosts=['qq.com','163.com','263.com','sina.com.cn','gmail.com','hotmail','outlook.com'],
					term =request.term,//获取用户输入的内容
					name=term,//邮箱的有户名
					host='',//邮箱的域名
					ix=term.indexOf('@'),//@的位置
					result=[];//最终呈现的邮箱列表

				//结果第一条是自己输入
				result.push(term);
				//当有@的时候，重新分别用户名和域名
				if (ix>-1){
					name=term.slice(0,ix);
					host=term.slice(ix+1);
				}	

				if(name){
					//如果用户已经输入@和后面的域名
					//那么就找到相关的域名提示比如yushi5344@g,就提示yushi5344@gmail.com
					//如果用户还没有输入@或者后面的域名
					//那么就把所有的域名都提示出来
					var finderHosts=[];
					if (host) {
						finderHosts=$.grep(hosts,function(value,index){
							return value.indexOf(host)>-1;
						});
					}else{
						finderHosts=hosts;
					}
					var finderHosts=$.map(finderHosts,function(value,index){
						return name+'@'+value;
					});
					result=result.concat(finderHosts);
				}


				response(result);
			},
		});
	//alert($('#reg').dialog('option','title'));
	$('#log_a').click(function(){
		$('#login').dialog();
	});
});