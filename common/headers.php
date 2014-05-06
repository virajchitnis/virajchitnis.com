		<meta charset="UTF-8">
		<meta name="author" content="Viraj Chitnis">
		<meta name="description" content="Web developer & tech enthusiast">
		<meta name="copyright" content="&copy; 2014 Viraj Chitnis">
		<meta name="robots" content="index,follow">
<?php
	if (file_exists('css')) {
?>
		<link rel="stylesheet" href="css/design.css">
		<link rel="stylesheet" media="only screen and (max-width: 432px)" href="css/background-432-324.css">
		<link rel="stylesheet" media="only screen and (min-width: 432px) and (max-width: 1080px)" href="css/background-1080-810.css">
		<link rel="stylesheet" media="only screen and (min-width: 1080px) and (max-width: 1296px)" href="css/background-1296-972.css">
		<link rel="stylesheet" media="only screen and (min-width: 1296px) and (max-width: 1728px)" href="css/background-1728-1296.css">
		<link rel="stylesheet" media="only screen and (min-width: 1728px) and (max-width: 2160px)" href="css/background-2160-1620.css">
		<link rel="stylesheet" media="only screen and (min-width: 2160px) and (max-width: 3240px)" href="css/background-3240-2430.css">
		<link rel="stylesheet" media="only screen and (min-width: 3240px)" href="css/background-4320-3240.css">
		<link rel="stylesheet" media="only screen" href="css/font-architects-daughter.css" rel="stylesheet" type="text/css"/>
<?php
		if (file_exists("common/google_analytics.php")) {
			include("common/google_analytics.php");
		}
	}
	else {
?>
		<link rel="stylesheet" href="../css/design.css">
		<link rel="stylesheet" media="only screen and (max-width: 432px)" href="../css/background-432-324.css">
		<link rel="stylesheet" media="only screen and (min-width: 432px) and (max-width: 1080px)" href="../css/background-1080-810.css">
		<link rel="stylesheet" media="only screen and (min-width: 1080px) and (max-width: 1296px)" href="../css/background-1296-972.css">
		<link rel="stylesheet" media="only screen and (min-width: 1296px) and (max-width: 1728px)" href="../css/background-1728-1296.css">
		<link rel="stylesheet" media="only screen and (min-width: 1728px) and (max-width: 2160px)" href="../css/background-2160-1620.css">
		<link rel="stylesheet" media="only screen and (min-width: 2160px) and (max-width: 3240px)" href="../css/background-3240-2430.css">
		<link rel="stylesheet" media="only screen and (min-width: 3240px)" href="../css/background-4320-3240.css">
		<link rel="stylesheet" media="only screen" href="../css/font-architects-daughter.css" rel="stylesheet" type="text/css"/>
<?php
		if (file_exists("../common/google_analytics.php")) {
			include("../common/google_analytics.php");
		}
	}
?>