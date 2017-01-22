<?php 
$code = $_GET["code"];

echo exec('sudo /var/www/rfoutlet/codesend '.$code);


?>
