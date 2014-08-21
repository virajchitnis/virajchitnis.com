<?php
if (isset($_POST['token'])) {
	$token = $_POST['token'];
	$permittedTokens = array(
		"rahulchitnis@gmail.com",
	);
	
	$access = "Not Permitted";
	if (in_array($token, $permittedTokens)) {
		$access = "Permitted";
	}
	
	$response = array(
		"access" => $access,
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