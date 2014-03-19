<?php
	exec("cd ..; /usr/bin/git pull; /usr/bin/git fetch --tags");
	header('Location: ../admin/');
?>