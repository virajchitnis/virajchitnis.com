<?php
$DATABASE = 'movies';
$HOSTNAME = 'localhost';
$USERNAME = 'movies_user';
$PASSWORD = 'movies_pass';

$db = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);

if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}

$movies_table = $db->prepare('SELECT id, quality FROM Movies ORDER BY name');
$movies_table->execute();
$movies_table->bind_result($id, $quality);

$all_movies = array();

while ($movies_table->fetch()) {
	$query_name = 'SELECT file_name FROM Files WHERE id=\''.$id.'\'';
	$db2 = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	$files_table = $db2->prepare($query_name);
	$files_table->execute();
	$files_table->bind_result($file_name);
	$files_table->fetch();
	$files_table->free_result();
	$db2->close();
	
	$curr_movie = array(
		"id" => $id,
	    "quality" => $quality,
		"filename" => $file_name,
	);
	
	array_push($all_movies, $curr_movie);
}

$movies_table->free_result();
$db->close();

echo '<pre>'.json_encode($all_movies, JSON_PRETTY_PRINT).'</pre>';
?>