<html>
	<head>
		<!--<link rel="stylesheet" href="css/index.css">-->
		<?php //include("common/headers.php"); ?>
		<?php
		if (file_exists("common/googleanalytics.php")) {
			include("common/googleanalytics.php");
		}
		?>
		<title>Viraj Chitnis</title>
		<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript">
		function setCSS() {
			var welcome_wall_height = $("#welcome_wall").height();
			var welcome_headers_height = $("#welcome_headers").height();
			var welcome_ascii_height = $("#welcome_ascii").height();
			$("#welcome_headers").css("top", (((welcome_wall_height / 2) - (welcome_headers_height / 2))));
			$("#welcome_ascii").css("top", (((welcome_wall_height / 2) - (welcome_ascii_height / 2))));
			
			var footer_content_height = $("#footer_content").height();
			$("#footer_content").css("top", ((($("#footer_content").parent().height() / 2) - (footer_content_height / 2))));
		}
		$(document).ready(function() {
			setCSS();
		});
		$(window).resize(function() {
			setCSS();
		});
		</script>
		<link href="http://fonts.googleapis.com/css?family=Open+Sans:regular,semibold,italic,italicsemibold|PT+Sans:400,700,400italic,700italic|PT+Serif:400,700,400italic,700italic" rel="stylesheet" />
		<style>
		* {
			position: relative;
			margin: 0;
			padding: 0;
		}
		.nice_font {
			font-family: 'PT Sans', sans-serif;
		}
		#welcome_wall {
			postion: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: calc(100% - 50px);
			background-color: rgb(215, 215, 215);
		    background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 500, from(rgb(240, 240, 240)), to(rgb(190, 190, 190)));
		    background: -webkit-radial-gradient(rgb(240, 240, 240), rgb(190, 190, 190));
		    background: -moz-radial-gradient(rgb(240, 240, 240), rgb(190, 190, 190));
		    background: -ms-radial-gradient(rgb(240, 240, 240), rgb(190, 190, 190));
		    background: -o-radial-gradient(rgb(240, 240, 240), rgb(190, 190, 190));
		    background: radial-gradient(rgb(240, 240, 240), rgb(190, 190, 190));
			-webkit-box-shadow: 0 3px 6px 1px #555;
			-moz-box-shadow: 0 3px 6px 1px #555;
			box-shadow: 0 3px 6px 1px #555;
			z-index: 11;
		}
		#welcome_wall_content {
			position: relative;
			width: 100%;
			height: 100%;
		}
		#welcome_headers {
			position: absolute;
			top: calc(50% - 50px);
			left: 30px;
			display: inline-block;
		}
		#welcome_name {
			font-size: 50pt;
			display: inline-block;
		}
		#welcome_title {
			font-size: 20pt;
			display: inline-block;
		}
		#welcome_ascii {
			position: absolute;
			top: calc(50% - 220px);
			right: 30px;
			width: 523px;
			height: 450px;
			text-align: left;
		}
		#footer_div {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 50px;
			z-index: 10;
			display: inline-block;
			text-align: center;
			font-size: 14pt;
		}
		#footer_content {
			position: absolute;
			top: calc(50% - 12px);
			left: 0;
			width: 100%;
		}
		.footer_buttons {
			margin-left: 5%;
			margin-right: 5%;
			display: inline-block;
		}
		</style>
	</head>
	<body>
		<div id="welcome_wall">
			<div id="welcome_wall_content">
				<div id="welcome_headers" class="nice_font">
					<h1 id="welcome_name">Viraj Chitnis</h1>
					<br>
					<h2 id="welcome_title">iOS & web developer</h2>
				</div>
				<div id="welcome_ascii">
<pre>                       .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  ##                 ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         `.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb.... 
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.  
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^'
    `........::::::::::::::::;iof688888888888888888888b.     `
      `......:::::::::;iof688888888888888888888888888888b.
        `....:::;iof688888888888888888888888888888888899fT!  
          `..::!8888888888888888888888888888888899fT|!^"'   
            `' !!988888888888888888888888899fT|!^"' 
                `!!8888888888888888899fT|!^"'
                  `!988888888899fT|!^"'
                    `!9899fT|!^"'
                      `!^"'
</pre>
				</div>
			</div>
		</div>
		<div id="footer_div" class="nice_font">
			<div id="footer_content">
				<div class="footer_buttons">apps</div>
				<div class="footer_buttons">resume</div>
				<div class="footer_buttons">blog</div>
				<div class="footer_buttons">contact</div>
			</div>
		</div>
    </body>
</html>