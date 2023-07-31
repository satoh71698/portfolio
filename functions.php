<?php
 function custom_theme_support() {
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form', 
        'comment-list',
        'gallery',
        'caption',
    ) );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'menus' );
    add_image_size('eyecatch', '677', '471', true);
    register_nav_menus( array(
        'footer_nav' => esc_html__( 'footer navigation', 'rtbread' ),
        'category_nav' => esc_html__( 'category navigation', 'rtbread' ),
     ) );
    add_theme_support( 'editor-styles' );
    add_editor_style(); 
}
 add_action( 'after_setup_theme', 'custom_theme_support' ); 

 function wpbeg_script() {     
    wp_enqueue_style( 'main_style', get_theme_file_uri ( '/css/style.css' ), array() ); 
    wp_enqueue_script( 'gsapjs', '//cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js' , '', '3.11.3', true ); 
    wp_enqueue_script( 'scroll', '//cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js' , '', '3.11.3', true ); 
    wp_enqueue_script( 'gsap', get_theme_file_uri ( '/js/gsap.js' ),'', '1.0.0', true );
    wp_enqueue_script( 'gsap-menu', get_theme_file_uri ( '/js/gsap-menu.js' ),'', '1.0.0', true );
} 
add_action( 'wp_enqueue_scripts', 'wpbeg_script' ); 

