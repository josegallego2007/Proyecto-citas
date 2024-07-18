<?php
$servername="localhost";
$username="root";
$password="";
$dbname="citas";
$port="3306";

$conn = mysqli_connect($servername, $username, $password, $dbname, $port);

if (!$coon){
    die("la conexion ha fallado: " .mysqli_connect_error());
}
?>