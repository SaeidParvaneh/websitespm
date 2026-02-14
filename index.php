
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div id="root"></div>
    <!-- این فایل خروجی Build شده React شما را لود می‌کند -->
    <script type="module" src="<?php echo get_template_directory_uri(); ?>/dist/assets/index.js"></script>
    <?php wp_footer(); ?>
</body>
</html>
