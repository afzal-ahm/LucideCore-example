;(function ($) {
    "use strict";

    // Initialize All Animations
    $(window).on("load", function () {
        init_all_animations();
    });

    // Listing All Animation Functions For Frontend
    function init_all_animations() {

        if (!document.body.classList.contains('gsap-enable')) return;

        gsap_scroll_slider();
        gsap_rs_split_text();
        gsap_rs_marqueeSlider();
        gsap_rs_scrollRotate();
        gsap_rs_MoveOnScroll();
        gsap_rs_custom_cursor();
        gsap_rs_image_reveal();
        gsap_fixed_elements();
        gsap_cursor_attached_label();
        gsap_sticky_ripple_effect();
    }

    // Split Text
    function gsap_rs_split_text() {
        if (document.body.classList.contains('rtl')) return;
        if (document.body.classList.contains('heading-gsap-off')) return;
    
        setTimeout(function () {
            const splitTextElements = Array.from(document.querySelectorAll(".rs-split-text-enable"));
            if (splitTextElements.length === 0) return;
    
            gsap.registerPlugin(SplitText);
    
            splitTextElements.forEach((element, index) => {
    
                const getType = element.dataset.splitType || 'chars';
                const splitType = getType === 'default' ? 'chars, words' : getType;
                const duration = parseFloat(element.dataset.duration) || 0.8;
                const delay = parseFloat(element.dataset.delay) || 0.02;
    
                const splitElement = new SplitText(element, {
                    type: splitType,
                });
    
                gsap.set(element, { perspective: 400 });
    
                let anTarget;
                if (splitType === "lines") {
                    anTarget = splitElement.lines;
                } else if (splitType === 'words') {
                    anTarget = splitElement.words;
                } else {
                    anTarget = splitElement.chars;
                }
    
                // Applying presets based on classes
                if (element.classList.contains("split-in-right")) {
                    gsap.set(anTarget, { opacity: 0, x: "20", ease: "Back.easeOut" });
                } else if (element.classList.contains("split-in-left")) {
                    gsap.set(anTarget, { opacity: 0, x: "-20", ease: "Back.easeOut" });
                } else if (element.classList.contains("split-in-up")) {
                    gsap.set(anTarget, { opacity: 0, y: "20", ease: "circ.out" });
                } else if (element.classList.contains("split-in-down")) {
                    gsap.set(anTarget, { opacity: 0, y: "-20", ease: "circ.out" });
                } else if (element.classList.contains("split-in-rotate")) {
                    gsap.set(anTarget, { opacity: 0, rotateX: "50deg", ease: "circ.out" });
                } else if (element.classList.contains("split-in-scale")) {
                    gsap.set(anTarget, { opacity: 0, scale: 0.5, ease: "circ.out" });
                } else if (element.classList.contains("static-scale-y")) {
                    // Leave Empty
                } else {
                    gsap.set(anTarget, { opacity: 0, ease: "Back.easeOut" });
                }
    
                element.anim = gsap.to(anTarget, {
                    scrollTrigger: {
                        trigger: element,
                        toggleActions: "restart pause resume reverse",
                        start: "top 90%",
                    },
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    scale: 1,
                    opacity: 1,
                    duration: duration,
                    stagger: delay
                });
    
            });
        }, 200);
    }
    
    // Marquee Slider
    function gsap_rs_marqueeSlider() {
        const rs_Marquee_Slider = document.querySelectorAll('.gsap-marquee');
        if (!rs_Marquee_Slider.length) return;

        gsap.registerPlugin(ScrollTrigger);
        rs_Marquee_Slider.forEach(element => {
            const directionClass = element.classList.contains('left') ? 'left' : 'right';
            const durationClass = getDurationFromClass(element.classList);
            const moveLengthClass = getMoveLengthFromClass(element.classList);

            const timeline = gsap.timeline();

            if (directionClass === 'left') {
                timeline.to(element, {
                    x: -moveLengthClass,
                    duration: durationClass,
                    repeat: -1,
                    ease: 'linear'
                });
            } else {
                timeline.to(element, {
                    x: moveLengthClass,
                    duration: durationClass,
                    repeat: -1,
                    ease: 'linear'
                });
            }

            timeline.to(element, {
                xPercent: 6,
                scrollTrigger: {
                    trigger: element,
                    scrub: 1
                }
            });
        });

        function getDurationFromClass(classList) {
            for (const className of classList) {
                if (className.startsWith('speed-')) {
                    return parseInt(className.substring(6));
                }
            }
            return 50;
        }

        function getMoveLengthFromClass(classList) {
            for (const className of classList) {
                if (className.startsWith('move-to-')) {
                    return parseInt(className.substring(8));
                }
            }
            return 1000;
        }
    }    

    // Rotate on Scroll
    function gsap_rs_scrollRotate() {
        const rotateClockTarget = document.querySelectorAll(
            '.gsap-rotate, .gsap-rotate-normal, .rs-marquee-slider-gsap.rotate-anim .gsap-marquee .marquee-wrapper .slider-item i, .rs-marquee-slider-gsap.rotate-anim .gsap-marquee .marquee-wrapper .slider-item img'
        );
        const rotateAntiClockTarget = document.querySelectorAll('.gsap-rotate-anti');
    
        if (rotateClockTarget.length || rotateAntiClockTarget.length) {
            gsap.registerPlugin(ScrollTrigger);
        }
    
        const setupRotation = (elements, direction = 'clockwise') => {
            elements.forEach((element) => {
                const rotationSpeed = 0.2;
                const match = element.className.match(/to-(\d+)/);
                const rotationValue = match ? parseInt(match[1]) : 360;
    
                gsap.to(element, {
                    rotation: direction === 'clockwise' ? rotationValue * rotationSpeed : -rotationValue * rotationSpeed,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'bottom',
                        scrub: 1
                    }
                });
            });
        };
    
        if (rotateClockTarget.length) setupRotation(rotateClockTarget, 'clockwise');
        if (rotateAntiClockTarget.length) setupRotation(rotateAntiClockTarget, 'anticlockwise');
    }

    // Move any direction on scroll
    function gsap_rs_MoveOnScroll() {
        const scrollMoveTarget = document.querySelectorAll('.gsap-move, .gsap-move-yes');
        if (scrollMoveTarget.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);

        scrollMoveTarget.forEach((element, index) => {
            let moveDistance = extractMoveDistanceAnadDirectionFromClass(element.className);
            let startPercentage = extractStartPercentageFromClass(element.className, 20);
            let moveProperties = {};
            switch (moveDistance.direction) {
                case 'right':
                    moveProperties = { x: moveDistance.value };
                    break;
                case 'left':
                    moveProperties = { x: -moveDistance.value };
                    break;
                case 'up':
                    moveProperties = { y: -moveDistance.value };
                    break;
                case 'down':
                    moveProperties = { y: moveDistance.value };
                    break;
                default:
                    break;
            }
            gsap.to(element, {
                x: moveProperties.x || 0,
                y: moveProperties.y || 0,
                scrollTrigger: {
                    trigger: element,
                    start: `top ${startPercentage}%`,
                    scrub: 1.7,
                }
            });
        });
        // Passing which direction and distance value eg:left-200 will pass to left 200px
        function extractMoveDistanceAnadDirectionFromClass(className) {
            const regex = /(?:^|\s)(left|right|up|down)(?:-(\d+))?(?:\s|$)/;
            const match = className.match(regex);
            const direction = match ? match[1] : 'right';
            const value = match && match[2] ? parseFloat(match[2]) : 0;
            return { direction, value };
        }
        // Passing start from value eg:start-90 will pass 90%
        function extractStartPercentageFromClass(className, defaultValue) {
            const regex = /(?:^|\s)start-(\d+)(?:\s|$)/;
            const match = className.match(regex);
            return match !== null ? parseInt(match[1]) : defaultValue;
        }
    }

    // Custom Cursor
    function gsap_rs_custom_cursor() {
        var cursorBall = document.getElementById("cursor-ball");
        if (cursorBall) {
            let mouse = { x: 0, y: 0 };
            let pos = { x: 0, y: 0 };
            let ratio = 0.99;
            let active = false;
            gsap.set(cursorBall, { xPercent: -50, yPercent: -50, borderWidth: "1px", width: "40px", height: "40px" });
            document.addEventListener("mousemove", mouseMove);
            function mouseMove(e) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                mouse.x = e.pageX;
                mouse.y = e.pageY - scrollTop;
            }
            gsap.ticker.add(updatePosition);
            function updatePosition() {
                if (!active) {
                    pos.x += (mouse.x - pos.x) * ratio;
                    pos.y += (mouse.y - pos.y) * ratio;
                    gsap.to(cursorBall, { duration: 0.08, x: pos.x, y: pos.y });
                }
            }
            
            // Common Area
            $("a, button, input[type=submit], .slick-arrow, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .slick-dots li button, .player-btn-comn, .revslider-initialised rs-arrow, .search_icons i, .rs-mnt, .rs-yrs, .tp-bullet, .rsoffwrap-close, .pricing-switcher-wrapper span, .rs-work-process-scroll-btn .btn-inner").on("mouseenter", function (e) {
                gsap.to(cursorBall, {
                    borderColor: "rgba(34, 34, 34, 0.05",
                    scale: 1.7,
                    opacity: 0.15,
                    backgroundColor: "rgba(34, 34, 34, 0.2)"
                });
            });
            $("a, button, input[type=submit], .slick-arrow, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .slick-dots li button, .player-btn-comn, .revslider-initialised rs-arrow, .search_icons i, .rs-mnt, .rs-yrs, .tp-bullet, .rsoffwrap-close, .pricing-switcher-wrapper span, .rs-work-process-scroll-btn .btn-inner").on("mouseleave", function (e) {
                gsap.to(cursorBall, {
                    borderColor: "rgba(156, 156, 156, 0.5)",
                    scale: 1,
                    opacity: 1,
                    backgroundColor: "transparent",
                    width: "40px",
                    height: "40px"
                });
                gsap.ticker.add(updatePosition);
            });

            // Scroll To Top
            $("#scrollUp").on("mouseenter", function (e) {
                gsap.to(cursorBall, {
                    borderColor: "rgba(34, 34, 34, 0.05)",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                    opacity: 0.35,
                    backgroundColor: "rgba(34, 34, 34, 0.3)"
                });
            });
            $("#scrollUp").on("mouseleave", function (e) {
                gsap.to(cursorBall, {
                    borderColor: "rgba(156, 156, 156, 0.5)",
                    opacity: 1,
                    borderRadius: "50%",
                    backgroundColor: "transparent",
                    width: "40px",
                    height: "40px"
                });
                gsap.ticker.add(updatePosition);
            });
        }

    }

    // Image Revel
    function gsap_rs_image_reveal() {
        const scrollRevealTarget = document.querySelectorAll('.rs-image.scroll_reveal');

        if (scrollRevealTarget.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);
        setTimeout(() => {
            scrollRevealTarget.forEach((wrapper) => {
                let image = wrapper.querySelector(".rs-image.scroll_reveal img");
                let directionClass = wrapper.classList.contains('reveal_left') ? 'reveal_left' : 'reveal_right';
        
                let reveal_trigger = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper,
                        toggleActions: "restart pause resume reverse",
                    }
                }).set(wrapper, { autoAlpha: 1 });
        
                // Add the class `.reveal-active`
                wrapper.classList.add("reveal-active");
        
                if (directionClass === 'reveal_left') {
                    reveal_trigger.from(wrapper, 1, { xPercent: -50, ease: Power2.out })
                        .from(image, 1, { xPercent: 50, scale: 1.3, delay: -1, ease: Power2.out });
                } else {
                    reveal_trigger.from(wrapper, 1, { xPercent: 50, ease: Power2.out })
                        .from(image, 1, { xPercent: -50, scale: 1.3, delay: -1, ease: Power2.out });
                }
            });
        }, 100);
    }

    // Fixed Elements on Scroll
    function gsap_fixed_elements() {
        const scrollFixedTarget = document.querySelectorAll(".gsap-fixed, .gsap-fixed-yes");

        if (scrollFixedTarget.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);
    
        scrollFixedTarget.forEach(container => {
            let stopUnder = container.dataset.stopUnder;

            if (stopUnder === "mobile") {
                stopUnder = 767;
            } else if (stopUnder === "tablet") {
                stopUnder = 991;
            } else if (stopUnder === "laptop") {
                stopUnder = 1199;
            } else {
                stopUnder = 0;
            }
            
            if (window.innerWidth <= stopUnder) {
                return;
            }

            const elements = container.querySelectorAll(".gsap-fixed.e-con-boxed > .e-con-inner > *, .gsap-fixed.e-con-full > *, .gsap-fixed-yes > *");

            // Scroll Trigger Loop
            elements.forEach((element, index) => {
                const startClass = Array.from(container.classList).find(className => className.startsWith('start-'));
                const startOffset = startClass ? parseInt(startClass.split('-')[1]) : 40;
                
                gsap.set(element, {
                    force3D: true
                });
                element.style.willChange = 'transform';
                setTimeout(() => {
                    ScrollTrigger.create({
                        trigger: element,
                        start: `top-=${startOffset + 80}`,
                        end: `top-=${startOffset}`,
                        onEnter: () => {
                            const idParts = `${container.id}-trigger-${index}`.split('-');
                            const lastPart = parseInt(idParts[idParts.length - 1]);
                            const previousSpacer = document.querySelector(`.pin-spacer--trigger-${lastPart - 1}`);
                            if (previousSpacer) {
                                previousSpacer.classList.add('spacer-before-active');
                            }
                        },
                        onLeaveBack: () => {
                            const idParts = `${container.id}-trigger-${index}`.split('-');
                            const lastPart = parseInt(idParts[idParts.length - 1]);
                            const previousSpacer = document.querySelector(`.pin-spacer--trigger-${lastPart - 1}`);
                            if (previousSpacer) {
                                previousSpacer.classList.remove('spacer-before-active');
                            }
                        }
                    });
                    ScrollTrigger.create({
                        trigger: element,
                        start: `top-=${startOffset}`,
                        end: `bottom top+=${element.offsetHeight + startOffset}`,
                        endTrigger: container,
                        pin: true,
                        pinSpacing: false,
                        id: `${container.id}-trigger-${index}`,
                        invalidateOnRefresh: true,
                    });
                }, 10);
            });
        });
    }

    // Label Attached With Cursor
    function gsap_cursor_attached_label() {
        const cursorAttachedTarget = document.querySelectorAll(".gsap-cursor-attached-label");

        if (cursorAttachedTarget.length === 0) return;
    
        cursorAttachedTarget.forEach(wrapper => {
            const dragElement = wrapper.querySelector(".label-move");
    
            if (!dragElement) return;

            dragElement.style.visibility = "visible";
    
            const initPos = { x: wrapper.offsetWidth - 60, y: 60 };
            gsap.set(dragElement, { xPercent: -50, yPercent: -50, scale: 1, x: initPos.x, y: initPos.y });
    
            let pos = { x: 0, y: 0 };
    
            function updatePosition(e) {
                const bounds = wrapper.getBoundingClientRect();
                const mouseX = Math.min(Math.max(e.clientX, bounds.left), bounds.right);
                const mouseY = Math.min(Math.max(e.clientY, bounds.top), bounds.bottom);
    
                pos.x = mouseX - bounds.left;
                pos.y = mouseY - bounds.top;
    
                gsap.to(dragElement, {
                    x: pos.x,
                    y: pos.y,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
    
            function returnToOriginalPosition() {
                const duration = 0.8;
                gsap.to(dragElement, { x: initPos.x, y: initPos.y, duration, ease: "power2.inOut" });
            }
    
            wrapper.addEventListener("mousemove", updatePosition);
            wrapper.addEventListener("mouseleave", () => {
                wrapper.removeEventListener("mousemove", updatePosition);
                returnToOriginalPosition();
            });
            wrapper.addEventListener("mouseenter", () => {
                wrapper.addEventListener("mousemove", updatePosition);
            });
            wrapper.addEventListener("mousedown", () => {
                gsap.to(dragElement, { scale: 0.6, duration: 0.2, ease: "power2.out" });
            });
            document.addEventListener("mouseup", () => {
                gsap.to(dragElement, { scale: 1, duration: 0.2, ease: "power2.out" });
            });
        });
    }

    // Sticky Button With Ripple Effect
    function gsap_sticky_ripple_effect() {
        const tweenMaxBtnTarget = document.querySelectorAll(".rs-tween_max_btn, .rs-tween_max_btn-yes");

        if (tweenMaxBtnTarget.length === 0) return;

        var hoverMouse = function ($el) {
            $el.each(function () {
                var $self = $(this);
                var hover = false;
                var getOffsetValue = function (classNamePrefix) {
                    var className = $self.attr("class").split(" ").find(function (cls) {
                        return cls.startsWith(classNamePrefix);
                    });
                    if (className) {
                        var value = className.replace(classNamePrefix, "");
                        return parseFloat(value) / 10;
                    }
                    return null;
                };
                var offsetHoverMax = getOffsetValue("offset-hover-max-") || 0.7;
                var offsetHoverMin = getOffsetValue("offset-hover-min-") || 0.5;
                var attachEventsListener = function () {
                    $(window).on("mousemove", function (e) {
                        var hoverArea = hover ? offsetHoverMax : offsetHoverMin;
                        var cursor = {
                            x: e.clientX,
                            y: e.pageY
                        };
                        var width = $self.outerWidth();
                        var height = $self.outerHeight();
                        var offset = $self.offset();
                        var elPos = {
                            x: offset.left + width / 2,
                            y: offset.top + height / 2
                        };
                        var x = cursor.x - elPos.x;
                        var y = cursor.y - elPos.y;
                        var dist = Math.sqrt(x * x + y * y);
                        var mutHover = false;
                        if (dist < width * hoverArea) {
                            mutHover = true;
                            if (!hover) {
                                hover = true;
                            }
                            onHover(x, y);
                        }
                        if (!mutHover && hover) {
                            onLeave();
                            hover = false;
                        }
                    });
                };
                var onHover = function (x, y) {
                    TweenMax.to($self, 0.4, {
                        x: x * 0.3,
                        y: y * 0.3,
                        rotation: x * 0.05,
                        ease: Power2.easeOut
                    });
                };
                var onLeave = function () {
                    TweenMax.to($self, 0.7, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotation: 0,
                        ease: Elastic.easeOut.config(1.2, 0.4)
                    });
                };
                attachEventsListener();
            });
        };
        hoverMouse($(".rs-tween_max_btn, .rs-tween_max_btn-yes"));
    }

    // Slide based on scroll
    function gsap_scroll_slider() {
        const section = document.querySelector(".rs-gsap-post-slider");
        if (!section) return;
    
        gsap.registerPlugin(ScrollTrigger);
    
        let config = {};
        try {
            config = JSON.parse(section.getAttribute('data-sl-config')) || {};
        } catch (e) {
            console.warn('Invalid or missing data-sl-config JSON', e);
        }
    
        function getCurrentStuckKey() {
            const width = window.innerWidth;
            if (width <= 575) return 'stuck-xs';
            if (width <= 767) return 'stuck-sm';
            if (width <= 1024) return 'stuck-md';
            if (width <= 1366) return 'stuck-lg';
            return 'stuck-desktop';
        }
    
        const currentKey = getCurrentStuckKey();
        const stuck = config[currentKey] !== undefined ? parseInt(config[currentKey]) : 100;
    
        const container = document.querySelector(".slider-wrapper");
        const items = gsap.utils.toArray(".post-item");
    
        if (!container || items.length < 2) return;

        function getVisibleWidth() {
            const diff = window.innerWidth - section.offsetWidth;
            return window.innerWidth - diff;
        }

        function getScrollLength() {
            return container.scrollWidth - getVisibleWidth();
        }
    
        gsap.to(container, {
            x: () => -getScrollLength(),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: `top top+=${stuck}`,
                end: () => "+=" + getScrollLength(),
                scrub: true,
                pin: true,
                anticipatePin: 1,
            }
        });
    }

})(jQuery);
