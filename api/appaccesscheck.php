<?php
if (isset($_POST['uuid'])) {
	$uuid = $_POST['uuid'];
	
	$response = array(
		"udid" => $uuid,
		"response" => "True",
	);
	
	echo '<pre>'.json_encode($response, JSON_PRETTY_PRINT).'</pre>';
}
else {
	$response = array(
		"response" => "False",
	);
	
	echo '<pre>'.json_encode($response, JSON_PRETTY_PRINT).'</pre>';
}
?>