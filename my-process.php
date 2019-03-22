<!DOCTYPE html>

<html>

<body>
<?php 

include"my-config.php";


if($con){echo "Database connection successful";}
else{echo "Not connected to database";}


$user = $_POST['user'];
$pass = $_POST['pass'];

echo "<br><br><br>Hi $user. We are excited as much as you are but we need more time to develope this project. We appreciate your support :)";

?>
<br><br>
<a href="javascript:history.back()">Go Back</a>
</body>
</html>