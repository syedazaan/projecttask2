$(document).ready(function(){

	//login form
	$(document).on('click', '.login' ,function(e){
		e.preventDefault();
		let username = $('#usr').val();
		let password = $('#pwd').val();

		if(username == '' || password == '' || username.length < 8 || password.length < 8){
			$('span#err-msg').text('Invalid Username or Password');
			return false;
		}

		let data = {
			"name": username,
			"password" : password
		};

		// $.post("https://jsonplaceholder.typicode.com/posts",data,
		//   function(data, status){
		//     window.href('/register');
		//   });

		 window.open('userscreen.html','_self');
	});

	//register form
	$(document).on('click', '.register' ,function(e){
		e.preventDefault();

		 window.open('index.html','_self');
	});
});