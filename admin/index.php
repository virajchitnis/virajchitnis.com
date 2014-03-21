<html>
	<head>
		<meta charset="UTF-8">
		<meta name="author" content="Viraj Chitnis">
		<?php include("../common/headers.php"); ?>
		<script src="../js/openlink.js"></script>
		<title>Admin | Viraj Chitnis</title>
	</head>
	<body>
		<div class="wrapper">
			<div class="body">
				<?php include("../common/header.php"); ?>
				<p><a href="../">Home</a></p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
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
						<p><?php echo exec("git describe"); ?> (<?php echo $branch; ?>) <button onclick="openLink('../scripts/gitupdate.php')">Update</button></p>
				<?php
					}
				?>
			</div>
			<div class="push"></div>
		</div>
		<?php include("../common/footer.php"); ?>
    </body>
</html>