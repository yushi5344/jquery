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
					$(this).submit();
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
			 autoOpen:false,
			// draggable:true,//不可移动对话框
			 resizable:false,//不可以改变大小
			 modal:true,//对话框外不可操作
			 closeText:'关闭',
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
		}).buttonset().validate({
			submitHandler:function(form){
				$(form).ajaxSubmit({
					url:'add.php',
					type:'post',
					beforeSubmit:function(formData,jqForm,options){
						$('#loading').dialog('open');
						$('#reg').dialog('widget').find('button').eq(1).button('disable');
					},
					success:function(responseText,statusText){
						if(responseText){
							$('#reg').dialog('widget').find('button').eq(1).button('enable');
							$('#loading').css('background','url(../images/success.gif) no-repeat 20px center').html('数据新增成功...');
							$.cookie('user',$('#user').val());
							setTimeout(function(){
								$('#loading').dialog('close');
								$('#reg').dialog('close');
								$('#reg').resetForm();
								$('#reg span.star').html('*').removeClass('succ');
								$('#loading').css('background','url(../images/loading.gif) no-repeat 20px center').html('数据交互中...');
								$('#member,#logout').show();
								$('#reg_a,#log_a').hide();
								$('#member').html($.cookie('user'));
							},1000);
						}
					},
				});
			},
			showErrors:function(errorMap,errorList){
				var errors=this.numberOfInvalids();
				if (errors>0) {
					$('#reg').dialog('option','height',errors*20+340);
				}else{
					$('#reg').dialog('option','height',240);
				}
				this.defaultShowErrors();
			},
			highlight:function(element,errorClass){
				$(element).css('border','1px solid #630');
				$(element).parent().find('span').html('&nbsp;').removeClass('succ');
			},
			unhighlight:function(element,errorClass){
				$(element).css('border','1px solid #ccc');
				$(element).parent().find('span').html('&nbsp;').addClass('succ');
			},
			errorLabelContainer:'ol.reg_error',
			wrapper:'li',
			rules:{
				user:{
					required:true,
					minlength:2,
					remote:{
						url:'is_user.php',
						type:'post'
					},
				},
				pass:{
					required:true,
					minlength:6,
				},
				email:{
					required:true,
					email:true,
				},
				date:{
					required:true,
					date:true
				}
			},
			messages:{
				user:{
					required:'账号不能为空',
					minlength:jQuery.format('账号不得小于{0}位'),
					remote:'账号被占用',
				},
				pass:{
					required:'密码不能为空',
					minlength:jQuery.format('账号不得小于{0}位'),
				},
				email:{
					required:'邮箱不能为空',
					minlength:'邮箱格式不正确',
				},
				date:{
					required:'生日必选'
				},
			},
		});
		$('#member,#logout').hide();
		if ($.cookie('user')) {
			$('#member,#logout').show();
			$('#reg_a,#log_a').hide();
			$('#member').html($.cookie('user'));
		}else{
			$('#member,#logout').hide();
			$('#reg_a,#log_a').show();
		}
		$('#logout').click(function(){
			$.removeCookie('user');
			location.reload();
		});
		//$('#reg').buttonset();
		$('#loading').dialog({
			autoOpen:false,
			modal:true,
			closeOnEscape:false,
			resizable:false,
			draggable:false,
			width:180,
			height:50,
		}).parent().parent().find('.ui-widget-header').hide();
		$('#date').datepicker({
			dateFormat:'yy-mm-dd',
			dayNamesMin:["日", "一", "二", "三", "四", "五", "六"],
			monthNames:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			monthNamesShort:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			//appendText:'日历',
			//showWeek:true,
			firstDay:1,
			//numberOfMonths:[3,2],
			showOtherMonths:true,
			selectOtherMonths:true,
			changeMonth:true,
			changeYear:true,
			//isRTL:true,
			showOn:'button',
			buttonText:'日历',
			buttonImage:'../images/calendar.gif',
			buttonImageOnly:true,
			showButtonPanel:true,
			closeText:'关闭',
			currentText:'今天',
			nextText:'下月',
			prevText:'上月',
			yearSuffix:'年',
			maxDate:0,
			yearRange:'1950:2020',
			duration:1000,
			// beforeShow:function(){
			// 	alert('现实之前执行');
			// },
			// beforeShowDay:function(date){
			// 	if (date.getDate()==1) {
			// 		return [false,'a','不能选择1号'];
			// 	}else{
			// 		return [true];
			// 	}
			// }
			// onChangeMonthYear:function(year,month,inst){
			// 	alert('日历中年份或者月份改变时激活');
			// 	alert(inst.id);
			// }

		});
		//alert($('#date').datepicker('getDate'));
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
		$('#login').dialog('open');
	});
	// $('#test').validate({
	// 	rules:{
	// 		username:{
	// 			required:true,
	// 			minlength:8,
	// 		},
	// 		email:{
	// 			required:true,
	// 			email:true
	// 		},
	// 	},
	// 	messages:{
	// 		username:{
	// 			required:'账号不能为空',
	// 			minlength:jQuery.format('账号不得小于{0}位'),
	// 		}
	// 	},
	// 	submitHandler:function(){
	// 		alert('提交');
	// 		//当验证成功后执行，而且阻止了默认提交
	// 		//一般用于ajax提交
	// 	}
	// });
	//$('#test').ajaxForm();
	//ajaxForm()自动阻止了默认提交
	//js里使用了submit()方法时，采用了ajaxSubmit()提交，此方法不会自动阻止默认提交
	// $('#test').submit(function(){
	// 	$(this).ajaxSubmit({
	// 		url:'test.php',
	// 		target:'#box',
	// 		dataType:null,
	// 		data:{
	// 			aaa:'bbb',
	// 		},
	// 		beforeSubmit:function(formData,jqForm,options){
	// 			//提交之前执行，一般用于数据验证
	// 			alert(options.url);
	// 			//如果数据不合法，返回FALSE，不让提交，默认true,
	// 		},
	// 		success:function(response,satatusText){
	// 			alert(response+'|'+satatusText);
	// 		},
	// 	});
	// 	return false;
	// });
	// $.cookie('user','bbb',{
	// 	expires:7
	// });
	$('#login').dialog({
			title:'知问登录',
			buttons:{
				'提交':function(){
					$(this).submit();
				},
			},
			 width:320,
			 height:240,
			 autoOpen:false,
			 resizable:false,//不可以改变大小
			 modal:true,//对话框外不可操作
		}).buttonset().validate({
			submitHandler:function(form){
				$(form).ajaxSubmit({
					url:'login.php',
					type:'post',
					beforeSubmit:function(formData,jqForm,options){
						$('#loading').dialog('open');
						$('#login').dialog('widget').find('button').eq(1).button('disable');
					},
					success:function(responseText,statusText){
						if(responseText){
							$('#login').dialog('widget').find('button').eq(1).button('enable');
							$('#loading').css('background','url(../images/success.gif) no-repeat 20px center').html('登录成功...');
							if ($('#expires').is(':checked')) {
								$.cookie('user',$('#login_user').val(),{
									expires:7,
								});
							}else{
								$.cookie('user',$('#login_user').val());
							}
							setTimeout(function(){
								$('#loading').dialog('close');
								$('#login').dialog('close');
								$('#login').resetForm();
								$('#login span.star').html('*').removeClass('succ');
								$('#loading').css('background','url(../images/loading.gif) no-repeat 20px center').html('数据交互中...');
								$('#member,#logout').show();
								$('#reg_a,#log_a').hide();
								$('#member').html($.cookie('user'));
							},1000);
						}
					},
				});
			},
			showErrors:function(errorMap,errorList){
				var errors=this.numberOfInvalids();
				if (errors>0) {
					$('#lgoin').dialog('option','height',errors*20+240);
				}else{
					$('#lgoin').dialog('option','height',240);
				}
				this.defaultShowErrors();
			},
			highlight:function(element,errorClass){
				$(element).css('border','1px solid #630');
				$(element).parent().find('span').html('&nbsp;').removeClass('succ');
			},
			unhighlight:function(element,errorClass){
				$(element).css('border','1px solid #ccc');
				$(element).parent().find('span').html('&nbsp;').addClass('succ');
			},
			errorLabelContainer:'ol.login_error',
			wrapper:'li',
			rules:{
				login_user:{
					required:true,
					minlength:2,
				},
				login_pass:{
					required:true,
					minlength:6,
					remote:{
						url:'login.php',
						type:'post',
						data:{
							login_user:function(){
								return $('#login_user').val();
							},
						},
					},
				},
			},
			messages:{
				login_user:{
					required:'账号不能为空',
					minlength:jQuery.format('账号不得小于{0}位'),
				},
				login_pass:{
					required:'密码不能为空',
					minlength:jQuery.format('密码不得小于{0}位'),
					remote:'账号或密码错误',
				},
			},
		});
});