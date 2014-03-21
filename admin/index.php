<html>
	<head>
		<meta charset="UTF-8">
		<meta name="author" content="Viraj Chitnis">
		<link rel="stylesheet" href="../css/admin.css">
		<?php include("../common/headers.php"); ?>
		<script src="../js/openlink.js"></script>
		<title>Admin - Viraj Chitnis</title>
	</head>
	<body>
		<div class="wrapper">
			<div class="body">
				<?php include("../common/header.php"); ?>
				<div class="body_content">
								<p class="body_table_content_text_space">&nbsp;</p>
								<h2 class="body_table_content_text">Admin</h2>
								<p class="body_table_content_text_space">&nbsp;</p>
								<?php
				        			if (file_exists("../.git")) {
				        				$git_branch = exec("git branch | grep '*' | awk '{print $2}'");
				        				$branch;
				        				if ($git_branch == "master") {
				        					$branch = "stable";
				        				}
				        				else {
				        					$branch = $git_branch;
				        				}
				        		?>
										<p class="body_table_content_text"><?php echo exec("git describe"); ?> (<?php echo $branch; ?>) <button onclick="openLink('../scripts/gitupdate.php')">Update</button></p>
								<?php
									}
								?>
								<p class="body_table_content_text_space">&nbsp;</p>
								<p><a class="body_href" href="../">Exit</a></p>
								<p class="body_table_content_text_space">&nbsp;</p>
				</div>
			</div>
			<div class="push"></div>
		</div>
		<?php include("../common/footer.php"); ?>
    </body>
</html>