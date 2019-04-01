<?php
include 'my-config.php';
session_start();

if(isset($_SESSION['user'])){}
else{
	header("Location: index.php");
}

?>

<!DOCTYPE html>

<html>

<head>
	
<title>My Samba Diary | Plan Your Events</title>

</head>

<body>

Welcome to My Samba Diary <?php echo $_SESSION['user'] ?>. When this project is finished, you'll be able to manage and control all your samba events. But for now check current
<a href="www.sambadiary.com">events</a> or return to the <a href="javascript:history.back()">previous page</a>

<br><br>
<a href="logout.php">Logout</a>
</body>
</html>