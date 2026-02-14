
<?php
/**
 * SPM AI NOW - WordPress Bridge
 * این کدها را در فایل functions.php قالب وردپرس خود کپی کنید
 */

// ۱. فعال‌سازی پشتیبانی از تصاویر شاخص
add_theme_support( 'post-thumbnails' );

// ۲. اضافه کردن فیلدهای اختصاصی به API (مثل منبع خبر یا متن پرامپت)
add_action('rest_api_init', function() {
    register_rest_field('post', 'spm_metadata', [
        'get_callback' => function($post_arr) {
            return get_post_meta($post_arr['id'], 'spm_data', true);
        },
        'update_callback' => function($value, $post_obj) {
            return update_post_meta($post_obj->ID, 'spm_data', $value);
        }
    ]);
});

// ۳. ایجاد دسترسی CORS برای React
add_action( 'init', function() {
    header("Access-Control-Allow-Origin: *");
});
?>
