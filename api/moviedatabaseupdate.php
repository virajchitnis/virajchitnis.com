<?php
$source = file_get_contents('http://www.virajchitnis.com/api/movies.php');

$json = array(
	"hash" => md5($source),
);

echo '<pre>'.json_encode($json, JSON_PRETTY_PRINT).'</pre>';
?>