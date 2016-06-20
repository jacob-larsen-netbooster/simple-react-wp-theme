<?php

// load js script // wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer);
wp_enqueue_script( 'script', get_template_directory_uri() . '/theme.js', array ( 'jquery' ), 3.0, true);
