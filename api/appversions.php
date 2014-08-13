<?php
// Array of movie versions.
$all_apps = array(
	"Movies" => array(
		0 => "v1.0",
		1 => "v2.0",
		2 => "v2.1",
	),
	"Weight" => array(
		0 => "v1.0",
		1 => "v1.0.1",
		2 => "v1.0.2",
		3 => "v1.1",
		4 => "v1.1.1",
		5 => "v1.1.2",
	),
	"TravelCountant" => array(
		0 => "v1.0",
		1 => "v1.1",
	),
);

echo '<pre>'.json_encode($all_apps, JSON_PRETTY_PRINT).'</pre>';
?>