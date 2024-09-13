<?php
$con = mysqli_connect("localhost","root","","medi_lock");
    $P_ID = $_POST["P_ID"];
    $NAME = $_POST["NAME"];
    $AGE = $_POST["AGE"];
    $GENDER = $_POST["GENDER"];
    $MOBILE = $_POST["MOBILE"];
    $PASSWORD = $_POST["PASSWORD"];
    $query = "INSERT INTO signup (P_ID,NAME,AGE,GENDER,MOBILE,PASSWORD) VALUES ('$P_ID', '$NAME', '$AGE', '$GENDER', '$MOBILE', '$PASSWORD')";
    $query_run = mysqli_query($con, $query);

    if($query_run)
    {
        $_SESSION['status'] = "Inserted";
        header("Location: login.html");
    }
    else
    {
        $_SESSION['status'] = "Inserting Failed";
        header("Location: login.html");
    }
?>