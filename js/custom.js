/**
*
* --------------------------------------------------------------------
*
* Template : RSAddon Plugin Js
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* --------------------------------------------------------------------
*
**/
;(function($) {
    "use strict";

    // Fixing el lightbox issue inside swiper slider
    $('.elementor').on('click', 'a[data-elementor-open-lightbox="yes"]', function () {
        setTimeout(() => {
            document.querySelectorAll('.dialog-lightbox-widget .dialog-lightbox-message .elementor-lightbox-item .swiper-zoom-container img').forEach(function(img) {
                if (img.hasAttribute('data-src')) {
                    img.setAttribute('src', img.getAttribute('data-src'));
                    img.removeAttribute('data-src');
                }
            });
        }, 100);
    });

    // RS Cf7 field extender (date,time picker)
    document.addEventListener('DOMContentLoaded', function () {
        $('.rs-cf7-field-extender-wrapper input.rs-timepicker, .rs-cf7-field-extender-wrapper input.rs-datepicker, .rs-cf7-field-extender-wrapper .rs-datetimepicker').each(function () {
            var $this = $(this);
            var configStr = $this.attr('data-config');
            var config = {};

            if (configStr) {
                config = JSON.parse(configStr);
            }

            var allowedFormats = ['d-m-Y', 'Y-m-d', 'm/d/Y', 'd/m/Y'];
            var dateFormat = allowedFormats.includes(config.date_format) ? config.date_format : 'd-m-Y';
            var timeFormat = config.time_format || 'H:i';
            var mode = config.mode || 'single';

            function formatDateString(dateStr, format) {
                if (!dateStr) return "";
                var parts = dateStr.split('-');
                if (parts.length !== 3) return dateStr;
                var Y = parts[0], M = parts[1], D = parts[2];

                switch (format) {
                    case "d-m-Y": return D + '-' + M + '-' + Y;
                    case "m/d/Y": return M + '/' + D + '/' + Y;
                    case "d/m/Y": return D + '/' + M + '/' + Y;
                    case "Y-m-d":
                    default: return Y + '-' + M + '-' + D;
                }
            }

            var minDate = formatDateString(config.min_date || "", dateFormat);
            var maxDate = formatDateString(config.max_date || "", dateFormat);
            var defaultDate = formatDateString(config.default_date || "", dateFormat);

            if ($this.hasClass('rs-datepicker')) {
                flatpickr($this[0], {
                    mode: mode,
                    dateFormat: dateFormat,
                    minDate: minDate || undefined,
                    maxDate: maxDate || undefined,
                    defaultDate: defaultDate || undefined
                });
            } else if ($this.hasClass('rs-timepicker')) {
                flatpickr($this[0], {
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: timeFormat, // e.g., "H:i" or "h:i K"
                    time_24hr: timeFormat.indexOf('H') !== -1,
                    minuteIncrement: parseInt(config.interval) || 1,
                    defaultDate: config.default_time ? config.default_time : null,
                    minTime: config.min_time ? config.min_time : null,
                    maxTime: config.max_time ? config.max_time : null,
                });
            } else if ($this.hasClass('rs-datetimepicker')) {
                flatpickr($this[0], {
                    enableTime: true,
                    mode: mode,
                    dateFormat: dateFormat + " " + timeFormat,
                    minDate: minDate ? minDate + " " + (config.default_time || "00:00") : undefined,
                    maxDate: maxDate ? maxDate + " " + (config.default_time || "23:59") : undefined,
                    defaultDate: defaultDate ? defaultDate + " " + (config.default_time || "00:00") : undefined,
                    time_24hr: timeFormat.indexOf('H') !== -1,
                    minuteIncrement: parseInt(config.interval) || 1
                });
            }
        });
    });

    // SkillBar Animation 
    $.fn.skillBars = function(options) {
        var settings = $.extend({
            from: 0,
            to: false,
            speed: 1000,
            interval: 100,
            decimals: 0,
            onUpdate: null,
            onComplete: null,
            classes: {
                skillBarBar: '.skillbar-bar.style-horizontal',
                skillBarBarVarti: '.skillbar-bar.style-vertical',
                skillBarBarcir: '.thiscir',
                skillBarPercent: '.skill-bar-percent',
            }
        }, options);
        return this.each(function() {
            var obj = $(this),
                to = (settings.to != false) ? settings.to : parseInt(obj.attr('data-percent'));
            if (to > 100) {
                to = 100;
            };
            var from = settings.from,
                loops = Math.ceil(settings.speed / settings.interval),
                increment = (to - from) / loops,
                loopCount = 0,
                animated = false;
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && !animated) {
                        animateBars();
                        animated = true;
                    }
                });
            }, { threshold: 0.5 });
    
            observer.observe(obj[0]);

            function animateBars() {
                var strokdash = 294;
                var interval = setInterval(updateValue, settings.interval);
                obj.find(settings.classes.skillBarBar).animate({
                    width: parseInt(obj.attr('data-percent')) + '%'
                }, settings.speed);
                obj.find(settings.classes.skillBarBarVarti).animate({
                    height: parseInt(obj.attr('data-percent')) + '%'
                }, settings.speed);
                obj.find(settings.classes.skillBarBarcir).animate({
                    strokeDashoffset: strokdash - (strokdash * parseInt(obj.attr('data-percent'))) / 100
                }, settings.speed);
                function updateValue() {
                    from += increment;
                    loopCount++;
                    $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals) + '%');
                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(obj, from);
                    }
                    if (loopCount >= loops) {
                        clearInterval(interval);
                        from = to;
                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(obj, from);
                        }
                        obj.addClass('animation-complete');
                    }
                }
            }
        });
    };
    
    // Glass Effect SVG Init
    var effectBlurImg = $('.rs-portfolios-grid.glass-effect-yes .portfolio-item, .rs-gallery-slider.glass-effect .g-item');
    if (effectBlurImg.length) {
        effectBlurImg.each(function() {
            var increment = null;
            var displacementMap = $(this).find('feDisplacementMap');
            function startCounter(targetValue) {
                clearInterval(increment);
                var count = parseInt(displacementMap.attr('scale'));
                var step = targetValue > count ? 1 : -1;
                increment = setInterval(function() {
                    count += step;
                    displacementMap.attr('scale', count);
                    if ((step > 0 && count >= targetValue) || (step < 0 && count <= targetValue)) {
                        clearInterval(increment);
                    }
                }, 5);
            }
            $(this).mouseenter(function() { startCounter(50); });
            $(this).mouseleave(function() { startCounter(0); });
        });
    };

    // RS Link Anything Start
    function rs_link_isValidAbsoluteURL( string ) {
        try {
            const newUrl = new URL( string );
            return newUrl.protocol !== 'javascript:';
        } catch (err) {
            return false;
        }
    }
    function rs_link_isValidURL( string ) {
        try {
            let elm = document.createElement('input');
            elm.setAttribute('type', 'url');
            elm.setAttribute('required', 'true');
            elm.value = string;
            return elm.validity;
        } catch ( err ) {
            return false;
        }
    }
    var rsPageBody = $('body');
    rsPageBody.on('click.onWrapperLink', '[data-rs-element-link]', function(e) {
        var $wrapper = $(this),
            data     = $wrapper.data('rs-element-link'),
            id       = $wrapper.data('id'),
            anchor   = document.createElement('a'),
            anchorReal,
            timeout;
            
        if ( 'undefined' === typeof data.url ) {
            
            return false;
        }

        let url = encodeURI( data.url )
        , validUrl = rs_link_isValidURL( url );
        
        if ( validUrl.badInput === false
            && validUrl.customError === false
            && validUrl.patternMismatch === false
            && validUrl.rangeOverflow === false
            && validUrl.rangeUnderflow === false
            && validUrl.stepMismatch === false
            && validUrl.tooLong === false
            && validUrl.tooShort === false
            && validUrl.typeMismatch === true
            && validUrl.valid === false
            && validUrl.valueMissing === false ) {
            
            url = document.location.href.replace('#', '') + url;
            
            validUrl = rs_link_isValidURL( url );
        }
        else {
            
            validUrl = rs_link_isValidAbsoluteURL( url );
        }
        
        if ( ( 'undefined' !== typeof validUrl.valid 
            && validUrl.valid === false ) || validUrl === false ) {
            
            e.preventDefault();
            e.stopPropagation();
            
            return false;
        }
        
        anchor.id            = 'rs-link-anything-' + id;
        anchor.href          = url;
        anchor.target        = data.is_external ? '_blank' : '_self';
        anchor.rel           = data.nofollow ? 'nofollow noreferer' : '';
        anchor.style.display = 'none';

        document.body.appendChild(anchor);

        anchorReal = document.getElementById(anchor.id);
        anchorReal.click();

        timeout = setTimeout(function() {
            if (document.body.contains(anchorReal)) {
                document.body.removeChild(anchorReal);
            }
            clearTimeout(timeout);
        });
    });
    // RS Link Anything End

    // DOMContentLoaded EventListener
    document.addEventListener("DOMContentLoaded", function () {
        // Contact box addon current page link active
        if ($(".rs-iconbox-area a.box-inner.menu-mode").length) {
            let currentUrl = window.location.href.split(/[?#]/)[0];
            let anchors = document.querySelectorAll(".rs-iconbox-area a.box-inner.menu-mode");

            anchors.forEach(anchor => {
                let anchorUrl = anchor.href.split(/[?#]/)[0];
                if (anchorUrl === currentUrl) {
                    anchor.classList.add("active");
                    let parentMega = anchor.closest("li.rs-mega-parent");
                    if (parentMega) {
                        parentMega.classList.add("current-menu-ancestor", "current-menu-parent");
                    }
                }
            });
        }
    });

    // Function for handling section "particles"
    const isValidHex = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);
    const initParticles = (targetElement = null) => {
        const elements = targetElement ? [targetElement] : document.querySelectorAll(".rs-enable-particle");
    
        elements.forEach((el) => {
            if (!document.body.contains(el)) return;
    
            let $el = $(el);
            let lastInit = parseInt($el.attr("data-last-init")) || 0;
            let now = Date.now();
            if (now - lastInit < 500) return;
            $el.attr("data-last-init", now);
            $el.find("canvas").remove();
    
            let uniqueId = $el.attr("id") || "particle-canvas-" + Date.now();
            $el.attr("id", uniqueId);

            const extractData = (classPrefix, datasetKey, isBoolean = false) => {
                const className = [...el.classList].find(cls => cls.startsWith(classPrefix));
                if (!className) return;
                let value = className.replace(classPrefix, "").trim();
                el.dataset[datasetKey] = isBoolean ? value === "true" : value;
                el.classList.remove(className);
            };
    
            // Extract and store data, then remove classes
            extractData("particle-colors-", "particleColors");
            extractData("particle-count-", "particleCount");
            extractData("particle-size-", "particleSize");
            extractData("particle-blink-", "particlesBlinking", true);
            extractData("particle-area-", "particleArea");
            extractData("particle-speed-", "particleSpeed");
            extractData("particle-dir-", "particleDir");
            extractData("particle-type-", "particleType");
    
            // Convert dataset values
            let particleCount = parseInt(el.dataset.particleCount) || 40;
            let particleSize = (parseInt(el.dataset.particleSize) / 2) || 3;
            let particlesBlinking = el.dataset.particlesBlinking === "true";
            let particlesDir = el.dataset.particleDir || "none";
            let particlesType = el.dataset.particleType || "circle";
            let areaSize = parseInt(el.dataset.particleArea) || 1000;
            let speed = parseFloat(el.dataset.particleSpeed) || 2;
            let colors = el.dataset.particleColors
                ? el.dataset.particleColors.split(",").map(c => c.trim()).filter(c => isValidHex(c))
                : ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"];
            if (!colors.length) colors.push("#ff0000");

            if (!particleCount || !particleSize || !Array.isArray(colors) || !colors.length) {
                return;
            } 

            if (window.pJSDom) {
                window.pJSDom = window.pJSDom.filter((particle) => {
                    if (particle.pJS && particle.pJS.canvas.el && particle.pJS.canvas.el.parentElement === el) {
                        particle.pJS.fn.vendors.destroypJS();
                        return false;
                    }
                    return true;
                });
            }
            particlesJS(uniqueId, {
                particles: {
                    number: { value: particleCount, density: { enable: true, value_area: areaSize } },
                    color: { value: colors },
                    shape: { type: particlesType, stroke: { width: 0, color: "#000000" } },
                    opacity: { value: 1, random: false },
                    size: { value: particleSize, random: particlesBlinking },
                    move: { enable: true, speed: speed, direction: particlesDir, random: true, straight: false, out_mode: "out", bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    },
                    line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: false, mode: "push" }, resize: true },
                    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                },
                retina_detect: true
            });
        });
    };
    const observeParticles = () => {
        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    let target = mutation.target;
                    if (target.classList.contains("rs-enable-particle")) {
                        let lastInit = parseInt(target.getAttribute("data-last-init")) || 0;
                        let now = Date.now();
                        
                        if (now - lastInit > 500) {
                            setTimeout(() => initParticles(target), 100);
                        }
                    }
                }
    
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.classList.contains("rs-enable-particle")) {
                        let lastInit = parseInt(node.getAttribute("data-last-init")) || 0;
                        let now = Date.now();
                        
                        if (now - lastInit > 500) {
                            setTimeout(() => initParticles(node), 100);
                        }
                    }
                });
    
                mutation.removedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.classList.contains("rs-enable-particle")) {
                        if (node.id && window.pJSDom) {
                            window.pJSDom = window.pJSDom.filter((particle) => {
                                if (particle.pJS && particle.pJS.canvas.el && particle.pJS.canvas.el.parentElement === node) {
                                    particle.pJS.fn.vendors.destroypJS();
                                    return false;
                                }
                                return true;
                            });
                        }
                    }
                });
            });
        });
    
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    };

    // Atropos 3d Image Animation Init
    let atroposInstances = [];
    function initAtropos() {
        const atroposTarget = document.querySelectorAll('[data-atropos]');

        if (!atroposTarget.length || typeof Atropos === 'undefined' || $(window).width() <= 1199) return;

        destroyAtropos(); // Cleanup before init

        atroposTarget.forEach((el) => {
            if (!el.__atropos__) {
                const instance = Atropos({
                    el: el,
                    shadow: false,
                    highlight: false
                });
                atroposInstances.push(instance);
            }
        });
    }
    function destroyAtropos() {
        atroposInstances.forEach((instance) => {
            instance.destroy();
        });
        atroposInstances = [];
    }
    let resizeTimeout;
    $(window).on('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if ($(window).width() <= 1199) {
                destroyAtropos();
            } else {
                initAtropos();
            }
        }, 200);
    });
    initAtropos();

    // Document Ready Part
    $(document).ready(() => {
        // Tooltip
        $('[data-toggle="tooltip"]').tooltip();
        
        // Init Tilt Effect
        if ($('.js-tilt').length) {
            $('.js-tilt').tilt({})
        }

        initParticles();
        observeParticles();
    });
    
})(jQuery);

