<?php
require_once('my-config.php');
session_start();


    if(isset($_POST['Login']))
    {
       if(empty($_POST['user']) || empty($_POST['pass']))
       {
            header("location:index.php?Empty= Please Fill in the Blanks <br>");
       }
       else
       {
            $query="SELECT * FROM mylogin WHERE user='".$_POST['user']."' and pass='".$_POST['pass']."'";
            $result=mysqli_query($con,$query);


            if(mysqli_fetch_assoc($result))
            {

         		$_SESSION['user']=$_POST['user'];
                header("location:welcome.php");
            }
            else
            {
                header("location:index.php?Invalid= Email or Password is Incorrect <br>");
            }
       }
    }
    else
    {
        echo 'Oops!	Something went wrong';
    }
    ?>