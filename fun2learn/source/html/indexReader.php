<?php
header('Access-Control-Allow-Origin: *');
echo file_get_contents('../../resources/index.txt');
?>