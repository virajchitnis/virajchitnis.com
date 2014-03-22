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
	}
	$git_branch = exec("git branch | grep '*' | awk '{print $2}'");
	if ($git_branch == "master") {
?>
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-49231243-1', 'virajchitnis.com');
		  ga('send', 'pageview');

		</script>
<?php
	}
?>