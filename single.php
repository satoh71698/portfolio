<?php get_header(); ?>

    <!-- main -->
    <main>
        <div class="p-single__mainvisual">
            <?php the_post_thumbnail(  ); ?>
            <h1 class="c-font__singleTitle p-single__title"><?php the_title( ); ?></h1>
        </div>
        <div class="p-single__content">
            <?php the_content(); ?>
        </div>

<?php get_footer(); ?>