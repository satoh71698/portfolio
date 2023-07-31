<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>">

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo("name") ?></title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css" /><!-- リセット　-->
    <link rel="stylesheet" href="https://use.typekit.net/exk1rfx.css">
    <script src="https://unpkg.com/split-type"></script>
    <?php wp_head(); ?>
</head>

<body>
    <!-- header -->
    <header class="l-header c-inner">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="l-header__logo">
            <h1 class="c-font__h1"><?php bloginfo("name") ?></h1>
        </a>
        <div class="c-menu l-menu"></div>
        <div class="p-menu">
            <ul class="p-menu__content c-en">
                <li><a href="#About">ABOUT</a></li>
                <li><a href="#Works">WORKS</a></li>
                <li><a href="#Skill">SKILL</a></li>
                <li><a href="#Contact">CONTACT</a></li>
            </ul>
        </div>
    </header>
    <!-- /header -->
