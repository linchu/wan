<div id="sidebar" class="well">
<?php
if (is_home()){
	include (TEMPLATEPATH . '/piece.php');
	dynamic_sidebar( 'sidebar-index');
}

if (is_category()){
	dynamic_sidebar( 'sidebar-category');
}

if (is_single()){
	dynamic_sidebar( 'sidebar-read');
}

if (is_page()){
	dynamic_sidebar( 'sidebar-page');
}
?>
</div>

