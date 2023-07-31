<?php get_header( ); ?>
    <!-- main -->
    <main>
        <div class="p-mainvisual">
            <div class="p-scroll u-vertical-rl"><span>scroll</span></div>
        </div>

        <h3 class="c-font__h3 c-center c-margin__80x c-en h3__js">
            <span>W</span><span>E</span><span>L</span><span>C</span><span>O</span><span
                class="u-yellow">M</span><span>E</span><br><span
                class="u-yellow">T</span><span>O</span><br><span>M</span><span class="u-yellow">Y</span>
            <span>P</span><span>O</span><span>R</span><span>T</span><span>F</span><span
                class="u-yellow">O</span><span>L</span><span>I</span><span>O</span>
        </h3>

        <section id="About" class="p-about c-inner c-margin__40b">
            <div class="p-about__content">
                <?php
                 $line_page = get_page_by_path( 'profile' );
                 $post = $line_page;
                      setup_postdata( $post );
                ?>
               <div class="p-about__img">
                   <?php the_post_thumbnail(); ?>
                </div>
                <div class="p-about__text c-font__p">
                    <p>
                        <?php echo the_content(); ?>
                    </p>
                </div>
                <?php wp_reset_postdata(); ?>
            </div>
            <div class="p-about__title">
                <h2 class="c-font__h2 c-en u-vertical-rl p-about__js"><span>A</span><span
                        class="u-yellow">B</span><span>O</span><span>U</span><span>T</span></h2>
            </div>
        </section>
        <section id="Works" class="p-works c-inner">
            <div class="p-works__title">
                <h2 class="c-font__h2 c-en u-vertical-rl p-works__js"><span>W</span><span
                        class="u-yellow">O</span><span>R</span><span>K</span><span>S</span></h2>
                <div class="p-works__ring">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/ring.png">
                </div>
            </div>
            <article class="p-works__content c-font__p">
                <ul>
                    <?php
                        $args = array(
                        'post_type' => 'works',
                        'paged' => $paged, 
                        'posts_per_page' => 1000,
                    ); 
                    $wp_query = new WP_Query( $args );
                    if($wp_query->have_posts()):
                    while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>
                    <li>
                        <a href="<?php echo get_the_permalink( ); ?>" class="p-works__item">
                            <?php the_post_thumbnail("eyecatch"); ?>
                            <p><?php the_title( ); ?></p>
                        </a>
                    </li>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                    endif;
                    ?>
                </ul>
            </article>
            <div class="p-works__ringPC">
                <img src="<?php echo get_template_directory_uri(); ?>/img/ring.png">
            </div>
        </section>
        <section id="Skill" class="p-skill">
            <div class="p-skill__title c-center">
                <div class="p-skill__verticalPC">
                    <h2 class="c-font__h2 c-en p-skill__js"><span>S</span><span
                            class="u-yellow">K</span><span>I</span><span>L</span><span>L</span></h2>
                </div>
                <h3 class="c-font__h3 c-en p-strong__js">STR<span class="u-yellow">O</span>NG P<span
                        class="u-yellow">O</span>INT
                </h3>
            </div>
            <div class="p-skill__content">
                <?php
                    $args = array(
                        'post_type' => 'skill',
                        'paged' => $paged, 
                        'posts_per_page' => 1000,
                        'orderby' => 'date',
                        'order' => 'ASC',
                    ); 
                    $wp_query = new WP_Query( $args );
                        if($wp_query->have_posts()):
                        while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>
                <div class="p-skill__item c-bg">
                        <div class="p-skill__number">
                            <span><?php echo $post->menu_order; ?></span>
                        </div>
                        <h4 class="c-font__h4">
                            <div class="headline">
                                <span class="rect"></span><span class="label"><?php the_title(); ?></span>
                            </div>
                        </h4>
                        <div class="p-skill__text c-font__p slideX"><?php the_content(); ?></div>
                </div>
                 <?php
                    endwhile;
                    wp_reset_postdata();
                    endif;
                ?>
            </div>
        </section>
<?php get_footer( ); ?>