<html>
	<head>
		<link rel="stylesheet" href="../css/error.css">
		<?php include("../common/headers.php"); ?>
		<?php
		if (file_exists("../common/google_analytics.php")) {
			include("../common/google_analytics.php");
		}
		?>
		<script src="../js/autoredirect.js"></script>
		<title>Oops... - Viraj Chitnis</title>
	</head>
	<body>
		<div class="wrapper">
			<div class="body">
				<?php include("../common/header.php"); ?>
				<div class="body_content">
								<p class="body_table_content_text_space">&nbsp;</p>
								<h2 class="body_table_content_text">Not found</h2>
								<p class="body_table_content_text_space">&nbsp;</p>
								<p class="body_table_content_text">The section of the website that you are trying to access does not exist. Please check the url for any mistakes.</p>
								<p class="body_table_content_text" id="timer"></p>
								<p class="body_table_content_text_space">&nbsp;</p>
				</div>
			</div>
			<div class="push"></div>
		</div>
		<?php include("../common/footer.php"); ?>
    </body>
</html>