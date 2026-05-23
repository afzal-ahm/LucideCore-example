;(function ($) {
    "use strict";

    // Function to handle "rs-lettering-text"
    const letteringTextHandler = function () {
        if ($(".rs-lettering-text").length) {
            $(".rs-lettering-text").each(function () {
                const sentence = $(this).text().trim();
                let wrappedSentence = "";
                const useEm = !$(this).hasClass("style2");

                for (let i = 0; i < sentence.length; i++) {
                    wrappedSentence += useEm
                        ? `<span><em>${sentence[i]}</em></span>`
                        : `<span class="char${[i]}">${sentence[i]}</span>`;
                }

                $(this).html(wrappedSentence);
            });
        }
    };

    // Function for handling "draw-line" elements
    const headingJsHandler = function ($scope, $) {
        const drawLines = $scope.find(".draw-line");
        if (!drawLines.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("start-draw");
                    }, 300);
                } else {
                    entry.target.classList.remove("start-draw");
                }
            });
        }, { threshold: 0.1 });

        drawLines.each((_, drawLine) => observer.observe(drawLine));
    };

    // Function for handling "rs-highlight" elements
    const handleHighlight = () => {
        const sections = document.querySelectorAll(".rs-highlight");
        if (!sections.length) return;

        sections.forEach((section) => {
            const thresholdClass = [...section.classList].find(cls => cls.startsWith("threshold-"));
            const threshold = thresholdClass ? parseFloat(thresholdClass.split("-")[1]) : 0.4;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            }, { root: null, threshold });

            observer.observe(section);
        });
    };

    // Function to mouse move parallax effect
    const handleParallax = () => {
        const wrappers = document.querySelectorAll('.rs-parallax-parent');

        if (!wrappers.length) return;

        wrappers.forEach((wrapper) => {
            const $wrapper = $(wrapper);

            if ($wrapper.hasClass("parallax-initialized")) return;
            $wrapper.addClass("parallax-initialized");

            const elements = wrapper.querySelectorAll('.rs-parallax-child');

            elements.forEach((el) => {
                const $original = $(el);
                const depthClass = ($original.attr("class").match(/parallax-depth-(\d+)/) || [])[1];
                const movement = parseInt(depthClass, 10) || 30;

                let $element = $original;

                if ($original.hasClass("elementor-widget")) {
                    const inner = $original.find(".elementor-widget-container > div");
                    if (inner.length) {
                        $element = inner;
                    }
                }

                let targetX = 0, targetY = 0;
                let currentX = 0, currentY = 0;
                let isHovering = false;
                let lastMove = 0;

                function animate() {
                    if (!isHovering) return;

                    currentX += (targetX - currentX) * 0.1;
                    currentY += (targetY - currentY) * 0.1;
                    $element.css("transform", `translate(${currentX}px, ${currentY}px)`);
                    requestAnimationFrame(animate);
                }

                function resetPosition() {
                    currentX += (0 - currentX) * 0.1;
                    currentY += (0 - currentY) * 0.1;
                    $element.css("transform", `translate(${currentX}px, ${currentY}px)`);

                    if (Math.abs(currentX) > 0.5 || Math.abs(currentY) > 0.5) {
                        requestAnimationFrame(resetPosition);
                    } else {
                        $element.css("transform", "translate3d(0px, 0px, 0)");
                    }
                }

                $wrapper.on("mouseenter", function () {
                    isHovering = true;
                    requestAnimationFrame(animate);
                });

                $wrapper.on("mousemove", function (e) {
                    const now = Date.now();
                    if (now - lastMove < 16) return;
                    lastMove = now;

                    const offset = $wrapper.offset();
                    const width = $wrapper.outerWidth();
                    const height = $wrapper.outerHeight();
                    const relX = e.pageX - offset.left;
                    const relY = e.pageY - offset.top;

                    targetX = ((relX - width / 2) / width) * movement;
                    targetY = ((relY - height / 2) / height) * movement;
                });

                $wrapper.on("mouseleave", function () {
                    isHovering = false;
                    requestAnimationFrame(resetPosition);
                });
            });
        });
    };

    // Flowmap deformation effect
    function flowmap_deformation() {
        const flowmap = document.querySelectorAll('.flowmap-deformation-wrapper');
        if (!flowmap.length) return;

        jQuery('.flowmap-deformation-wrapper').each(function () {
            let box = jQuery(this);

            setTimeout(function () { box.addClass('active'); }, 300);

            const imgSize = [box.data('bg-width'), box.data('bg-height')];

            const vertex = `
                        attribute vec2 uv;
                        attribute vec2 position;
                        varying vec2 vUv;
                        void main() {
                                vUv = uv;
                                gl_Position = vec4(position, 0, 1);
                        }
                `;
            const fragment = `
                        precision highp float;
                        precision highp int;
                        uniform sampler2D tWater;
                        uniform sampler2D tFlow;
                        uniform float uTime;
                        varying vec2 vUv;
                        uniform vec4 res;

                        void main() {

                                // R and G values are velocity in the x and y direction
                                // B value is the velocity length
                                vec3 flow = texture2D(tFlow, vUv).rgb;

                                vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
                                vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
                                myUV -= flow.xy * (0.15 * 0.7);

                                vec3 tex = texture2D(tWater, myUV).rgb;

                                gl_FragColor = vec4(tex.r, tex.g, tex.b, 1.0);
                        }
                `;
            {
                const renderer = new ogl.Renderer({ dpr: 2 });
                const gl = renderer.gl;
                box.append(gl.canvas);

                // Variable inputs to control flowmap
                let aspect = 1;
                const mouse = new ogl.Vec2(-1);
                const velocity = new ogl.Vec2();
                function resize() {
                    let a1, a2;
                    var imageAspect = imgSize[1] / imgSize[0];
                    if (box.outerHeight() / box.outerWidth() < imageAspect) {
                        a1 = 1;
                        a2 = box.outerHeight() / box.outerWidth() / imageAspect;
                    } else {
                        a1 = (box.outerWidth() / box.outerHeight()) * imageAspect;
                        a2 = 1;
                    }
                    mesh.program.uniforms.res.value = new ogl.Vec4(
                        box.outerWidth(),
                        box.outerHeight(),
                        a1,
                        a2
                    );

                    renderer.setSize(box.outerWidth(), box.outerHeight());
                    aspect = box.outerWidth() / box.outerHeight();
                }
                const flowmap = new ogl.Flowmap(gl, {
                    falloff: 0.6
                });
                // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
                const geometry = new ogl.Geometry(gl, {
                    position: {
                        size: 2,
                        data: new Float32Array([-1, -1, 3, -1, -1, 3])
                    },
                    uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
                });
                const texture = new ogl.Texture(gl, {
                    minFilter: gl.LINEAR,
                    magFilter: gl.LINEAR
                });
                const img = new Image();
                img.onload = () => (texture.image = img);
                img.crossOrigin = "Anonymous";
                img.src = box.data('bg');

                let a1, a2;
                var imageAspect = imgSize[1] / imgSize[0];              //0.5573
                if (box.outerHeight() / box.outerWidth() < imageAspect) {      // 0.4146 < 0.5573
                    a1 = 1;
                    a2 = box.outerHeight() / box.outerWidth() / imageAspect;   // 0.7439
                } else {
                    a1 = (box.outerWidth() / box.outerHeight()) * imageAspect;
                    a2 = 1;
                }

                const program = new ogl.Program(gl, {
                    vertex,
                    fragment,
                    uniforms: {
                        uTime: { value: 0 },
                        tWater: { value: texture },
                        res: {
                            value: new ogl.Vec4(box.outerWidth(), box.outerHeight(), a1, a2)
                        },
                        img: { value: new ogl.Vec2(imgSize[0], imgSize[1]) },
                        // Note that the uniform is applied without using an object and value property
                        // This is because the class alternates this texture between two render targets
                        // and updates the value property after each render.
                        tFlow: flowmap.uniform
                    }
                });
                const mesh = new ogl.Mesh(gl, { geometry, program });

                window.addEventListener("resize", resize, false);
                resize();

                // Create handlers to get mouse position and velocity
                const isTouchCapable = "ontouchstart" in window;
                const section = box.closest('.flowmap-on')[0];
                if (isTouchCapable) {
                    section.addEventListener("touchstart", updateMouse, false);
                    section.addEventListener("touchmove", updateMouse, { passive: false });
                } else {
                    section.addEventListener("mousemove", updateMouse, false);
                }
                let lastTime;
                const lastMouse = new ogl.Vec2();
                function updateMouse(e) {
                    // e.preventDefault();
                    if (e.changedTouches && e.changedTouches.length) {
                        e.x = e.changedTouches[0].pageX;
                        e.y = e.changedTouches[0].pageY;
                    }
                    if (e.x === undefined) {
                        e.x = e.pageX;
                        e.y = e.pageY;
                    }
                    // Get mouse value in 0 to 1 range, with y flipped
                    mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);
                    // Calculate velocity
                    if (!lastTime) {
                        // First frame
                        lastTime = performance.now();
                        lastMouse.set(e.x, e.y);
                    }

                    const deltaX = e.x - lastMouse.x;
                    const deltaY = e.y - lastMouse.y;

                    lastMouse.set(e.x, e.y);

                    let time = performance.now();

                    // Avoid dividing by 0
                    let delta = Math.max(10.4, time - lastTime);
                    lastTime = time;
                    velocity.x = deltaX / delta;
                    velocity.y = deltaY / delta;
                    // Flag update to prevent hanging velocity values when not moving
                    velocity.needsUpdate = true;
                }
                requestAnimationFrame(update);
                function update(t) {
                    requestAnimationFrame(update);
                    // Reset velocity when mouse not moving
                    if (!velocity.needsUpdate) {
                        mouse.set(-1);
                        velocity.set(0);
                    }
                    velocity.needsUpdate = false;
                    // Update flowmap inputs
                    flowmap.aspect = aspect;
                    flowmap.mouse.copy(mouse);
                    // Ease velocity input, slower when fading out
                    flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
                    flowmap.update();
                    program.uniforms.uTime.value = t * 0.01;
                    renderer.render({ scene: mesh });
                }
            }
        });
    }

    // Scroll progress bar for divider based on parent element
    function dividerScrollProgressBar() {
        const progressBars = document.querySelectorAll('.rs-divider-scroll-progress');
        if (!progressBars.length) return;

        const observedBars = [];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const bar = entry.target;
                const index = observedBars.findIndex(item => item.bar === bar);
                if (index !== -1) {
                    observedBars[index].isVisible = entry.isIntersecting;
                }
            });
        }, { threshold: 0.1 });

        progressBars.forEach(progressBar => {
            const dir = progressBar.dataset.dir;
            const parent = progressBar.parentElement;

            observedBars.push({ bar: progressBar, parent, dir, isVisible: false });
            observer.observe(progressBar);
        });

        const updateScrollProgress = () => {
            observedBars.forEach(({ bar, parent, dir, isVisible }) => {
                if (!isVisible) return;

                const rect = parent.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const visibleStart = Math.max(0, windowHeight - rect.top);
                const scrollableHeight = (rect.height - 100) + windowHeight;
                const scrollProgress = Math.min(visibleStart / scrollableHeight, 1) * 100;

                if (dir === 'horizontal') {
                    bar.style.width = `${scrollProgress}%`;
                } else {
                    bar.style.height = `${scrollProgress}%`;
                }
            });
        };

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateScrollProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Scroll Direction Detection
    function scrollDetection() {
        const targets = document.querySelectorAll('.scroll-dir-detect');
        if (!targets.length) return;

        let lastScrollTop = 0;
        let directionClassTimeout;

        window.addEventListener('scroll', function () {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            const scrollDiff = Math.abs(currentScroll - lastScrollTop);

            if (scrollDiff > 100) {
                clearTimeout(directionClassTimeout);

                targets.forEach((target) => {
                    if (currentScroll > lastScrollTop) {
                        target.classList.remove('scrolling-up');
                        target.classList.add('scrolling-down');
                    } else if (currentScroll < lastScrollTop) {
                        target.classList.remove('scrolling-down');
                        target.classList.add('scrolling-up');
                    }
                });

                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

                directionClassTimeout = setTimeout(() => {
                    targets.forEach((target) => {
                        target.classList.remove('scrolling-up', 'scrolling-down');
                    });
                }, 400);
            }
        });
    }

    // Animate on Scroll
    function initAOS() {
        if (typeof AOS === 'undefined') return;
        AOS.init();
    }

    // Initialize all functions
    const initObservers = () => {
        letteringTextHandler();
        handleHighlight();
        scrollDetection();
    };

    // Elementor hooks for frontend and editor
    $(window).on("elementor/frontend/init", () => {
        const isEditMode = elementorFrontend.isEditMode();
        const moduleHandler = elementorModules.frontend.handlers.Base;

        elementorFrontend.hooks.addAction("frontend/element_ready/rs-heading.default", headingJsHandler);
        elementorFrontend.hooks.addAction("frontend/element_ready/rs-divider.default", dividerScrollProgressBar);

        if (isEditMode) {
            elementorFrontend.hooks.addAction("frontend/element_ready/global", () => {
                initObservers();
                $(document).ready(function () {
                    handleParallax();
                    initAOS();
                });
            });
            // Custom CSS for Elementor
            elementor.hooks.addFilter('editor/style/styleText', function (css, context) {
                if (!context) {
                    return;
                }
                var model = context.model,
                    customCSS = model.get('settings').get('rs_exten_custom_css');
                var selector = '.elementor-element.elementor-element-' + model.get('id');
                if ('document' === model.get('elType')) {
                    selector = elementor.config.document.settings.cssWrapperSelector;
                }
                if (customCSS) {
                    css += customCSS.replace(/selector/g, selector);
                }
                return css;
            });

            // Aos Animation Global
            if (typeof AOS !== 'undefined') {
                const aosAnimation = moduleHandler.extend({
                    bindEvents: function bindEvents() {
                        this.run();
                    },
                    run: function run() {
                        const $element = this.$element;
                        const aosName = this.getElementSettings('aos_animation_g');
                        const aosDuration = this.getElementSettings('aos_animation_g_duration') || '';
                        const aosDelay = this.getElementSettings('aos_animation_g_delay') || '';
                        const aosNoRepeat = (this.getElementSettings('aos_animation_g_repeat') === 'yes') ? 'false' : 'true';
                        if (aosName && aosName !== 'none') {
                            $element.attr('data-aos', aosName);
                            if (aosDuration) {
                                $element.attr('data-aos-duration', aosDuration);
                            }
                            if (aosDelay) {
                                $element.attr('data-aos-delay', aosDelay);
                            }
                            $element.attr('data-aos-once', aosNoRepeat);
                        } else if (aosName === 'none') {
                            $element.removeAttr('data-aos data-aos-duration data-aos-delay data-aos-once');
                        }
                    }
                });

                elementorFrontend.hooks.addAction('frontend/element_ready/widget', function ($scope) {
                    elementorFrontend.elementsHandler.addHandler(aosAnimation, {
                        $element: $scope
                    });
                });
            }
        } else {
            $(document).ready(function () {
                initObservers();
                handleParallax();
                initAOS();
            });
        }

        $('.flowmap-on').each(function () {
            const $scope = $(this);
            if ($scope.data('flowmap') === 'on' && $scope.data('flowmap-url') !== '') {
                $scope.prepend('<div class="flowmap-deformation-wrapper"></div>');
                $scope.find('.flowmap-deformation-wrapper').attr({
                    'data-bg': $scope.data('flowmap-url'),
                    'data-bg-width': $scope.data('flowmap-width'),
                    'data-bg-height': $scope.data('flowmap-height')
                });
                $scope.find('.flowmap-deformation-wrapper').css('background-image', 'url(' + $scope.data('flowmap-url') + ')');

                $scope.one('mouseover', flowmap_deformation);
            }
        });
    });

})(jQuery);

