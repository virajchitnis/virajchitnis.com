<?php
// Array of movie versions.
$all_apps = array(
	"Movies" => array(
		0 => "v1.0",
		1 => "v2.0",
		2 => "v2.0.1",
		3 => "v2.1",
		4 => "v2.2",
		5 => "v2.2.1",
		6 => "v2.2.2",
	),
	"Weight" => array(
		0 => "v1.0",
		1 => "v1.0.1",
		2 => "v1.0.2",
		3 => "v1.1",
		4 => "v1.1.1",
		5 => "v1.1.2",
		6 => "v1.1.3",
	),
	"TravelCountant" => array(
		0 => "v1.0",
		1 => "v1.1",
		2 => "v1.1.1",
	),
);

echo '<pre>'.json_encode($all_apps, JSON_PRETTY_PRINT).'</pre>';
?>