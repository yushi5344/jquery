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
		$('#reg input[title]').tooltip();
	//alert($('#reg').dialog('option','title'));
	$('#log_a').click(function(){
		$('#login').dialog();
	});
});