<html>
	<head>
		<link rel="stylesheet" href="../css/design.css">
		<script src="../js/gitupdate.js"></script>
		<title>Admin | Viraj Chitnis</title>
	</head>
	<body>
		<div class="wrapper">
			<div class="body">
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
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
						<p><?php echo exec("git describe"); ?> (<?php echo $branch; ?>) <button onclick="gitUpdate()">Update</button></p>
				<?php
					}
				?>
			</div>
			<div class="push"></div>
		</div>
		<?php include("../common/footer.php"); ?>
    </body>
</html>