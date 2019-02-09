<?php

$my_file = 'wallet.txt';
$address = 'test';
$handle = fopen($my_file, 'a') or die('Cannot open file: '.$my_file);
fwrite($handle, $address);

?>
