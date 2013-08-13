<?php
/*
Plugin Name: Simple Calculator widget
*/

function simple_calculator_widget($args) {

    extract($args);
    
    echo $before_widget; 
    echo $before_title;
    echo get_option('simple_calculator_widget_title');
    echo $after_title; 
    
    ?>
        <div id="calculatorWidget1" class="calculatorWidget"></div>
        <script type="text/javascript" src="http://localhost/js/calculator.js"></script>
    <?php
    echo $after_widget; 

}

function register_simple_calculator_widget() {
    register_sidebar_widget('Simple Calculator', 'simple_calculator_widget');
    register_widget_control('Simple Calculator', 'simple_calculator_widget_control' );
}

function simple_calculator_widget_control() {    
    if (!empty($_REQUEST['simple_calculator_widget_title'])) {
        update_option('simple_calculator_widget_title', $_REQUEST['simple_calculator_widget_title']);
    }
    
    $title = get_option('simple_calculator_widget_title');

    ?>  
        <label for="simple_calculator_widget_title">Title:</label>
        <input style="width:100%" type="text" id="simple_calculator_widget_title" name="simple_calculator_widget_title" value="<?php echo $title; ?>" />
    <?php

}

add_action('init', 'register_simple_calculator_widget');
?>
