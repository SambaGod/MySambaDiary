<?php

	//Get values from login form

	$MyUser = $_POST["my-user"];
	$MyPass = $_POST["my-pass"];

	//To prevent mysql injection

	$MyUser = stripcslashes($MyUser);
	$MyPass = stripcslashes($MyPass);
	$MyUser = mysql_real_escape_string($MyUser);
	$MyPass = mysql_real_escape_string($MyPass);

	//Connect to server and select database
	mysql_connect("rdbms.strato.de","U3656601","sqYMT60G91hHv007l", "DB3656601");
	mysql_select_db("Login")

	//Query database for user
	$result = mysql_query("select * from Login where my-user='$MyUser' and my-pass='$MyPass'") or die ("Failed to query database " 
		.mysql_error());
	$row = mysql_fetch_array($result);

	if ($row['my-user'] == $MyUser && $row['my-pass'] == $MyPass) {

		echo "Login Success! welcome ".$row['my-user'];}

	else {

		echo "Failed to Login";

	}
	
?>