<?php
include 'my-config.php';
session_start();

unset($_SESSION['user']);

session_destroy();

?>

<!DOCTYPE html>
<html>
<head>
  <title>My Samba Diary</title>
  <link rel="stylesheet" href="CSS/my-style.css" />
</head>
<body>

<!-- Header Section -->

<header></header>

<!-- Construction -->

<marquee style="border: 2px solid red; color: red; margin-top: 20px; margin-bottom: 5px;">
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
Page Under Construction &nbsp; &nbsp; &nbsp;
</marquee>


<h1 style="color: red;">You are logged out</h1>

<!-- Login form -->

<div id="my-wrapper">

	<div id="my-login-image"></div>

	<div id="my-login-form">

	<div style="height: 80px; background: #eee; border-bottom: 5px solid #ED1D25;"></div>
		
		<h2>Welcome to My Samba Diary</h2>

		<div class="my-content">

		<!-- Error Messages -->
			<!-- If Empty -->
			<?php 
			if(@$_GET['Empty']==true){ ?>
            <div class="" style="color: red;"><?php echo $_GET['Empty'] ?></div>                                
            <?php } ?>
 
 			<!-- If Invalid -->
            <?php 
             if(@$_GET['Invalid']==true){ ?>
             <div class="" style="color:red;"><?php echo $_GET['Invalid'] ?></div>                                
              <?php } ?>

		<form style="color: #fff;" action="my-process.php" method="POST">
			Username <br>
			<input type="text" name="user" placeholder="Enter Username">

			Password <br>
			<input type="Password" name="pass" placeholder="Enter Password">

			<br><br>
			<input type="submit" value="Login" name="Login">
		</form>

		<br>

		<a href="#">Forgot your password?</a><br>
		<a href="#">Don't have an account?</a>

		<p>&nbsp;</p>

		</div>

		<div style="height: 70px; background: #eee; border-top: 5px solid #ED1D25;"></div>

	</div>

</div>



<a href="https://sambadiary.com">Back to Samba Diary</a>
<!-- Footer Section -->

<footer></footer>

</body>
</html>
