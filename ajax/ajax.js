$(function(){
	$('.asc').click(function(){
		$('#box').load('a.html .url');
	});
	$('.asc').click(function(){
		$('#box').load('a.php',{
			url:'ycku'
		},function(response,status,xhr){
			alert(response+'|'+status+'|'+xhr);
		});
	});
	$('.asc').click(function(){
		$.get('a.php?url=ycku',function(response,status,xhr){
			$('#box').html(response);
		});
	});
	$('.asc').click(function(){
		$.get('a.php?','url=ycku&name=aaa',function(response,status,xhr){
			$('#box').html(response);
		});
	});
	$('.asc').click(function(){
		$.get('a.php',{
			url:'ycku'
		},function(response,status,xhr){
			$('#box').html(response);
		});
	});
	$('.asc').click(function(){
		$.post('a.php','url=ycku',function(response,status,xhr){
			$('#box').html(response);
		});
	});
	$('.asc').click(function(){
		$.post('a.php','url=ycku',function(response,status,xhr){
			$('#box').html(response);
		},'json');
	});
	$('.asc').click(function(){
		$.getJSON('test.json',function(response,status,xhr){
			alert(response[0].url);
		});
	});
	$('.asc').click(function(){
		$.ajax({
			type:'POST',
			url:'a.php',
			data:{
				url:'ycku'
			},
			success:function(response,status,xhr){
				$('#box').html(response);
			}
		});
	});
	//表单序列化
	$('.submit').click(function(){
		$.ajax({
			type:'POST',
			url:'user.php',
			data:$('form').serialize(),
			success:function(response,status,xhr){
				$('#box').html(response);
			}
		});
	});
	//得到json数据
	$('input[name=sex]').click(function(){
		var json=$(this).serializeArray();
		$('#box').html(json[0].name);
		console.log(json);
	});
});