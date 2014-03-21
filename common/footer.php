<div class="footer">
	<table class="footer_table">
		<tr>
			<td class="footer_table_data_left"></td>
			<td class="footer_table_data_links">
				<?php
					if (file_exists('css')) {
				?>
						<a href="resume/"><div class="footer_nav"><p class="footer_links">resumé</p></div></a>
				<?php
					}
					else {
				?>
						<a href="../resume/"><div class="footer_nav"><p class="footer_links">resumé</p></div></a>
				<?php
					}
				?>
			</td>
			<td class="footer_table_data_links">
				<?php
					if (file_exists('css')) {
				?>
						<a href="contact/"><div class="footer_nav"><p class="footer_links">contact me</p></div></a>
				<?php
					}
					else {
				?>
						<a href="../contact/"><div class="footer_nav"><p class="footer_links">contact me</p></div></a>
				<?php
					}
				?>
			</td>
			<td class="footer_table_data_links">
				<?php
					if (file_exists('css')) {
				?>
						<a href="credits/"><div class="footer_nav"><p class="footer_links">credits</p></div></a>
				<?php
					}
					else {
				?>
						<a href="../credits/"><div class="footer_nav"><p class="footer_links">credits</p></div></a>
				<?php
					}
				?>
			</td>
			<td class="footer_table_data_right"></td>
		</tr>
	</table>
	<p class="footer_text">&copy; <script>document.write(new Date().getFullYear());</script> Viraj Chitnis</p>
</div>