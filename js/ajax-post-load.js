;(function ($) {
    "use strict";

    $(document).ready(function () {
        $('.rs-ajax-post-load-parent').each(function () {
            const $wrapper = $(this);
            const $btn = $wrapper.find('.rs-loadmore-btn');
            const $container = $wrapper.find('.rs-ajax-post-load .layout-cls');

            if (!$btn.length || !$container.length) return;

            let loading = false;

            const settings = $container.data('settings');
            const postsPerPage = parseInt(settings.per_page) || 6;
            const initialLoadCount = parseInt(settings.initial_load_count) || 0;
            const uniqueId = settings.unique_id;
            let category = (settings.category || '').toString();

            let offset = $container.find('.grid-item').length;

            // ---------- Load More ----------
            $btn.on('click', function () {
                if (loading || $btn.hasClass('load-complete')) return;
                loading = true;

                $container.parent().addClass('rs-loading');
                $btn.addClass('rs-btn-loading');

                $.ajax({
                    url: rsAjaxPostLoad.ajax_url,
                    type: 'POST',
                    data: {
                        action: 'techzen_ajax_post_load',
                        nonce: rsAjaxPostLoad.nonce,
                        settings: settings,
                        category: category,
                        posts_per_page: postsPerPage,
                        offset: offset,
                        is_filter: 0,
                    },
                    success: function (response) {
                        if (response && response.trim()) {
                            $container.append(response);
                            offset = $container.find('.grid-item').length;
                        } else {
                            $btn.addClass('load-complete');
                            $btn.removeClass('rs-btn-loading');
                        }
                        $(document).trigger('rsAjaxPostLoadMoreBtn_' + uniqueId);
                    },
                    complete: function () {
                        $container.parent().removeClass('rs-loading');
                        loading = false;
                        $btn.removeClass('rs-btn-loading');
                    }
                });
            });

            // ---------- Filter Click ----------
            $wrapper.find('.rs-ajax-filter button').on('click', function () {
                if (loading) return;
                loading = true;

                const $filterBtn = $(this);
                category = ($filterBtn.data('category') || '').toString();

                $filterBtn.addClass('active').siblings().removeClass('active');
                $btn.removeClass('load-complete');
                $btn.addClass('rs-btn-loading');
                $container.parent().addClass('rs-loading');

                $.ajax({
                    url: rsAjaxPostLoad.ajax_url,
                    type: 'POST',
                    data: {
                        action: 'techzen_ajax_post_load',
                        nonce: rsAjaxPostLoad.nonce,
                        settings: settings,
                        posts_per_page: initialLoadCount > 0 ? initialLoadCount : postsPerPage,
                        category: category,
                        offset: 0,
                        is_filter: 1,
                    },
                    beforeSend: function () {
                        $container.parent('.rs-addon-slider').append('<div class="loading_dot"></div>');
                    },
                    success: function (response) {
                        $container.parent().find('.loading_dot').remove();
                        $container.html(response || '');
                        offset = $container.find('.grid-item').length;
                        $btn.show();

                        if (offset < (initialLoadCount > 0 ? initialLoadCount : postsPerPage)) {
                            $btn.hide();
                        } else {
                            if (!response || !response.trim()) {
                                $btn.addClass('load-complete');
                            } else {
                                $btn.removeClass('rs-btn-loading');
                            }
                            $btn.data('category', category);
                        }
                        $(document).trigger('rsAjaxPostLoadFilter_' + uniqueId);
                    },
                    complete: function () {
                        $container.parent().removeClass('rs-loading');
                        $btn.removeClass('rs-btn-loading');
                        loading = false;
                    }
                });
            });
        });
    });
})(jQuery);
