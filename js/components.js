/* ==========================================================================
   TechZen IT Solutions - components.js
   Dynamic Header & Footer Injector
   ========================================================================== */

const TECHZEN_HEADER = `
			<div data-elementor-type="wp-post" data-elementor-id="20" class="elementor elementor-20">
				<div class="elementor-element elementor-element-287118d6 e-con-full e-flex e-con e-parent"
					data-id="287118d6" data-element_type="container" data-e-type="container">
					<div class="elementor-element elementor-element-57da8a9e e-con-full e-flex e-con e-child"
						data-id="57da8a9e" data-element_type="container" data-e-type="container"
						data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-element elementor-element-476866a0 e-con-full e-flex e-con e-child"
							data-id="476866a0" data-element_type="container" data-e-type="container">
							<div class="elementor-element elementor-element-79d2b2b5 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
								data-id="79d2b2b5" data-element_type="container" data-e-type="container">
								<div class="elementor-element elementor-element-4b201abc elementor-widget__width-auto gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-contact-box"
									data-id="4b201abc" data-element_type="widget" data-e-type="widget"
									data-widget_type="rs-contact-box.default">
									<div class="elementor-widget-container">



										<!-- Style 1 Start -->
										<div class="rs-contact-box">

											<div class="address-item boxstyle2">

												<div class="address-icon icon_1 elementor-repeater-item-a863b1d">
													<svg xmlns="http://www.w3.org/2000/svg" width="6" height="11"
														viewBox="0 0 6 11" fill="none">
														<path
															d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
															fill="#AB052D"></path>
													</svg>
												</div>

												<div class="address-text">
													<div class="text">

														<span class="des">
															Have a Project in Mind? </span>
													</div>




												</div>
												<span class="des-right-icon"></span>
											</div>
										</div>

										<!-- Style 1 End -->

									</div>
								</div>
								<div class="elementor-element elementor-element-6cc6dd76 elementor-widget__width-auto gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-contact-box"
									data-id="6cc6dd76" data-element_type="widget" data-e-type="widget"
									data-widget_type="rs-contact-box.default">
									<div class="elementor-widget-container">



										<!-- Style 1 Start -->
										<div class="rs-contact-box">

											<div class="address-item boxstyle2">


												<div class="address-text">
													<div class="text">

														<a
															href="/contact.html">
															<span class="des">
																Contact With Us </span>
														</a>
													</div>




												</div>
												<span class="des-right-icon"></span>
											</div>
										</div>

										<!-- Style 1 End -->

									</div>
								</div>
							</div>
							<div class="elementor-element elementor-element-3ef8ddf5 e-con-full e-flex e-con e-child"
								data-id="3ef8ddf5" data-element_type="container" data-e-type="container">
								<div class="elementor-element elementor-element-19a196a4 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-contact-box"
									data-id="19a196a4" data-element_type="widget" data-e-type="widget"
									data-widget_type="rs-contact-box.default">
									<div class="elementor-widget-container">



										<!-- Style 1 Start -->
										<div class="rs-contact-box">

											<div class="address-item boxstyle1">

												<div class="address-icon icon_1 elementor-repeater-item-c2bdf9a">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
														viewBox="0 0 16 16" fill="none">
														<g clip-path="url(#clip0_28535_91)">
															<path
																d="M12.1643 10.5834C11.6416 10.0673 10.989 10.0673 10.4696 10.5834C10.0734 10.9762 9.67723 11.3691 9.28769 11.7686C9.18114 11.8785 9.09125 11.9018 8.9614 11.8286C8.70503 11.6887 8.43202 11.5755 8.18564 11.4224C7.03698 10.6999 6.07477 9.77097 5.22243 8.72552C4.79959 8.20613 4.42336 7.65011 4.16033 7.02417C4.10706 6.89765 4.11705 6.81442 4.22026 6.7112C4.61647 6.32832 5.00268 5.93544 5.39223 5.54257C5.93493 4.99654 5.93493 4.35728 5.3889 3.80792C5.07926 3.49495 4.76962 3.18865 4.45998 2.87568C4.14036 2.55605 3.82406 2.23309 3.5011 1.9168C2.97838 1.40739 2.32581 1.40739 1.80641 1.92012C1.40688 2.313 1.02399 2.71586 0.617799 3.10208C0.241571 3.45833 0.0517928 3.89449 0.0118394 4.40389C-0.0514202 5.23293 0.151676 6.01535 0.438009 6.77779C1.02399 8.35595 1.91628 9.75765 2.99836 11.0428C4.45998 12.7808 6.20462 14.1559 8.24557 15.148C9.1645 15.5942 10.1167 15.9371 11.1522 15.9937C11.8647 16.0337 12.484 15.8539 12.98 15.2979C13.3196 14.9183 13.7025 14.572 14.0621 14.2091C14.5948 13.6698 14.5982 13.0172 14.0688 12.4845C13.4362 11.8485 12.8003 11.2159 12.1643 10.5834Z"
																fill="white"></path>
															<path
																d="M11.5281 7.92979L12.7566 7.72003C12.5635 6.59135 12.0308 5.56921 11.2218 4.75682C10.3661 3.90116 9.28402 3.36178 8.09208 3.19531L7.91895 4.43054C8.8412 4.56039 9.68022 4.97657 10.3428 5.63913C10.9687 6.26506 11.3782 7.05747 11.5281 7.92979Z"
																fill="white"></path>
															<path
																d="M13.4501 2.59031C12.0317 1.17197 10.2372 0.276344 8.25614 0L8.08301 1.23523C9.79434 1.47495 11.3459 2.25071 12.5711 3.47262C13.7331 4.63459 14.4955 6.10288 14.7719 7.71766L16.0004 7.50791C15.6775 5.63676 14.7952 3.93874 13.4501 2.59031Z"
																fill="white"></path>
														</g>
														<defs>
															<clipPath id="clip0_28535_91">
																<rect width="16" height="16" fill="white"></rect>
															</clipPath>
														</defs>
													</svg>
												</div>

												<div class="address-text">

													<div class="phone">

														<a href="tel:+990123456789">Call us: +990 123 456 789</a>
													</div>



												</div>
												<span class="des-right-icon"></span>
											</div>
										</div>

										<!-- Style 1 End -->

									</div>
								</div>
								<div class="elementor-element elementor-element-2d480f6b elementor-hidden-tablet elementor-hidden-mobile elementor-widget__width-initial gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-divider"
									data-id="2d480f6b" data-element_type="widget" data-e-type="widget"
									data-widget_type="rs-divider.default">
									<div class="elementor-widget-container">
										<div class="rs-divider ">
											<span> </span>
										</div>

									</div>
								</div>
								<div class="elementor-element elementor-element-5709d6f4 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-contact-box"
									data-id="5709d6f4" data-element_type="widget" data-e-type="widget"
									data-widget_type="rs-contact-box.default">
									<div class="elementor-widget-container">



										<!-- Style 1 Start -->
										<div class="rs-contact-box">

											<div class="address-item boxstyle1">

												<div class="address-icon icon_1 elementor-repeater-item-c2bdf9a">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
														viewBox="0 0 16 16" fill="none">
														<g clip-path="url(#clip0_28535_99)">
															<path
																d="M15.8603 3.17969L11.0078 8.00091L15.8603 12.8221C15.948 12.6388 16.0012 12.4361 16.0012 12.2197V3.78216C16.0012 3.56569 15.948 3.36303 15.8603 3.17969Z"
																fill="white"></path>
															<path
																d="M14.5947 2.375H1.40716C1.19069 2.375 0.988031 2.42822 0.804688 2.51594L7.00666 8.68666C7.55503 9.23503 8.44678 9.23503 8.99516 8.68666L15.1971 2.51594C15.0138 2.42822 14.8111 2.375 14.5947 2.375Z"
																fill="white"></path>
															<path
																d="M0.140938 3.17969C0.0532188 3.36303 0 3.56569 0 3.78216V12.2197C0 12.4361 0.0532188 12.6388 0.140938 12.8221L4.99341 8.00091L0.140938 3.17969Z"
																fill="white"></path>
															<path
																d="M10.3447 8.66211L9.658 9.34877C8.74428 10.2625 7.2575 10.2625 6.34378 9.34877L5.65716 8.66211L0.804688 13.4833C0.988031 13.571 1.19069 13.6243 1.40716 13.6243H14.5947C14.8111 13.6243 15.0138 13.571 15.1971 13.4833L10.3447 8.66211Z"
																fill="white"></path>
														</g>
														<defs>
															<clipPath id="clip0_28535_99">
																<rect width="16" height="16" fill="white"></rect>
															</clipPath>
														</defs>
													</svg>
												</div>

												<div class="address-text">
													<div class="text">

														<a href="mailto:bustarconsulting@gmail.com">
															<span class="des">
																Send mail: techzen@gmail.com </span>
														</a>
													</div>




												</div>
												<span class="des-right-icon"></span>
											</div>
										</div>

										<!-- Style 1 End -->

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="elementor-element elementor-element-3db07a57 e-con-full e-flex e-con e-child"
						data-id="3db07a57" data-element_type="container" data-e-type="container"
						data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-element elementor-element-718cf0ac e-con-full e-flex e-con e-child"
							data-id="718cf0ac" data-element_type="container" data-e-type="container">
							<div class="elementor-element elementor-element-56c2d4f2 e-con-full e-flex e-con e-child"
								data-id="56c2d4f2" data-element_type="container" data-e-type="container">
								<div class="elementor-element elementor-element-7e981a4a gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-site-logo"
									data-id="7e981a4a" data-element_type="widget" data-e-type="widget"
									data-widget_type="rstb-site-logo.default">
									<div class="rstb-site-logo">
										<a href="/index.html"><img
												src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/logos_001.png"
												alt="IT Solutions"></a>
									</div>
								</div>
							</div>
							<div class="elementor-element elementor-element-64d01d13 e-con-full e-flex e-con e-child"
								data-id="64d01d13" data-element_type="container" data-e-type="container">
								<div class="elementor-element elementor-element-619b14e4 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
									data-id="619b14e4" data-element_type="widget" data-e-type="widget"
									data-widget_type="rstb-nav-menu.default">
									<div class="rstb-nav-menu nav-horizontal nav-breakpoint-lg">
										<ul id="menu-main-menu" class="primary-menu">
											<li id="menu-item-5262"
												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-5262">
												<a href="/index.html"
													class="menu-item-link"><span class="menu-item-text">Home</span></a>
											</li>
											<li id="menu-item-1413"
												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1413">
												<a href="/about.html"
													class="menu-item-link"><span class="menu-item-text">About
														Us</span><span class="sub-menu-icon"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path
																d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
															</path>
														</svg><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24">
															<path
																d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
															</path>
														</svg></span></a>
												<ul class="sub-menu">
													<li id="menu-item-1415"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1415">
														<a href="/about.html"
															class="menu-item-link"><span class="menu-item-text">About Us
																01</span></a>
													</li>
													<li id="menu-item-1414"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1414">
														<a href="https://techzenwp.rstheme.com/it-solutions/about-us-02/"
															class="menu-item-link"><span class="menu-item-text">About Us
																02</span></a>
													</li>
													<li id="menu-item-1416"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1416">
														<a href="/mission-vision.html"
															class="menu-item-link"><span class="menu-item-text">Mission
																&amp; Vision</span></a>
													</li>
													<li id="menu-item-1417"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1417">
														<a href="https://techzenwp.rstheme.com/it-solutions/our-team/"
															class="menu-item-link"><span class="menu-item-text">Our
																Team</span></a>
													</li>
												</ul>
											</li>
											<li id="menu-item-1418"
												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1418">
												<a href="/services.html"
													class="menu-item-link"><span
														class="menu-item-text">Services</span><span
														class="sub-menu-icon"><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24">
															<path
																d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
															</path>
														</svg><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24">
															<path
																d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
															</path>
														</svg></span></a>
												<ul class="sub-menu">
													<li id="menu-item-1419"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1419">
														<a href="/services.html"
															class="menu-item-link"><span class="menu-item-text">Services
																01</span></a>
													</li>
													<li id="menu-item-1420"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1420">
														<a href="https://techzenwp.rstheme.com/it-solutions/services-02/"
															class="menu-item-link"><span class="menu-item-text">Services
																02</span></a>
													</li>
													<li id="menu-item-1421"
														class="menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-1421">
														<a href="/software-development.html"
															class="menu-item-link"><span class="menu-item-text">Service
																Details</span><span class="sub-menu-icon"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																	</path>
																</svg><svg xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																	</path>
																</svg></span></a>
														<ul class="sub-menu">
															<li id="menu-item-1426"
																class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1426">
																<a href="/software-development.html"
																	class="menu-item-link"><span
																		class="menu-item-text">Software
																		Development</span></a>
															</li>
															<li id="menu-item-1425"
																class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1425">
																<a href="https://techzenwp.rstheme.com/it-solutions/service/cloud-solutions/"
																	class="menu-item-link"><span
																		class="menu-item-text">Cloud
																		Solutions</span></a>
															</li>
															<li id="menu-item-1424"
																class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1424">
																<a href="https://techzenwp.rstheme.com/it-solutions/service/cybersecurity-services/"
																	class="menu-item-link"><span
																		class="menu-item-text">Cybersecurity
																		Services</span></a>
															</li>
															<li id="menu-item-1423"
																class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1423">
																<a href="https://techzenwp.rstheme.com/it-solutions/service/web-development/"
																	class="menu-item-link"><span
																		class="menu-item-text">Web
																		Development</span></a>
															</li>
															<li id="menu-item-1422"
																class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1422">
																<a href="https://techzenwp.rstheme.com/it-solutions/service/it-support-managed/"
																	class="menu-item-link"><span
																		class="menu-item-text">IT Support &#038;
																		Managed</span></a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li id="menu-item-1437"
												class="menu-item menu-item-type-post_type menu-item-object-rstb_template menu-item-1437 menu-item-has-mega-menu">
												<a href="#" class="menu-item-link"><span
														class="menu-item-text">Pages</span><span
														class="sub-menu-icon"><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24">
															<path
																d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
															</path>
														</svg><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24">
															<path
																d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
															</path>
														</svg></span></a>
												<div class="mega-menu mega-menu-width-full">
													<div data-elementor-type="wp-post" data-elementor-id="1427"
														class="elementor elementor-1427">
														<div class="elementor-element elementor-element-4a43a91 e-flex e-con-boxed e-con e-parent"
															data-id="4a43a91" data-element_type="container"
															data-e-type="container">
															<div class="e-con-inner">
																<div class="elementor-element elementor-element-707a034 e-flex e-con-boxed e-con e-child"
																	data-id="707a034" data-element_type="container"
																	data-e-type="container"
																	data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																	<div class="e-con-inner">
																		<div class="elementor-element elementor-element-712f53a e-con-full e-flex e-con e-child"
																			data-id="712f53a"
																			data-element_type="container"
																			data-e-type="container">
																			<div class="elementor-element elementor-element-299d0b3 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
																				data-id="299d0b3"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rs-heading.default">
																				<div class="elementor-widget-container">

																					<div
																						class="prelements-heading default   animate-  ">
																						<div class="title-inner">
																							<span class="sub-text ">
																								About Company </span>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="elementor-element elementor-element-0701e84 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
																				data-id="0701e84"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rstb-nav-menu.default">
																				<div
																					class="rstb-nav-menu nav-vertical nav-breakpoint-lg has-vertical-divider">
																					<ul id="menu-mega-menu-01"
																						class="primary-menu">
																						<li id="menu-item-1733"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1733">
																							<a href="/about.html"
																								class="menu-item-link"><span
																									class="menu-item-text">About
																									Us 01</span></a>
																						</li>
																						<li id="menu-item-1734"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1734">
																							<a href="https://techzenwp.rstheme.com/it-solutions/about-us-02/"
																								class="menu-item-link"><span
																									class="menu-item-text">About
																									Us 02</span></a>
																						</li>
																						<li id="menu-item-1736"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1736">
																							<a href="/mission-vision.html"
																								class="menu-item-link"><span
																									class="menu-item-text">Mission
																									&amp;
																									Vision</span></a>
																						</li>
																						<li id="menu-item-1742"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1742">
																							<a href="https://techzenwp.rstheme.com/it-solutions/our-team/"
																								class="menu-item-link"><span
																									class="menu-item-text">Our
																									Team</span></a>
																						</li>
																						<li id="menu-item-1735"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1735">
																							<a href="https://techzenwp.rstheme.com/it-solutions/appointment/"
																								class="menu-item-link"><span
																									class="menu-item-text">Appointment</span></a>
																						</li>
																					</ul>
																					<div class="menu-toggler-wrap">
																						<button class="menu-toggler">
																							<span class="open-icon">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
																									</path>
																								</svg>
																							</span>
																							<span class="close-icon">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																									</path>
																								</svg>
																							</span>
																						</button>
																					</div>
																					<div
																						class="mobile-panel-wrapper panel-offcanvas position-right">
																						<div
																							class="mobile-panel-overly">
																						</div>
																						<div
																							class="mobile-panel-content">
																							<button
																								class="mobile-panel-close">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																									</path>
																								</svg>
																							</button>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="elementor-element elementor-element-7aedb6b e-con-full e-flex e-con e-child"
																			data-id="7aedb6b"
																			data-element_type="container"
																			data-e-type="container">
																			<div class="elementor-element elementor-element-7e373c1 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
																				data-id="7e373c1"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rs-heading.default">
																				<div class="elementor-widget-container">

																					<div
																						class="prelements-heading default   animate-  ">
																						<div class="title-inner">
																							<span class="sub-text ">
																								Service Pages </span>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="elementor-element elementor-element-78f50b2 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
																				data-id="78f50b2"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rstb-nav-menu.default">
																				<div
																					class="rstb-nav-menu nav-vertical nav-breakpoint-lg has-vertical-divider">
																					<ul id="menu-mega-menu-02"
																						class="primary-menu">
																						<li id="menu-item-1740"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1740">
																							<a href="/services.html"
																								class="menu-item-link"><span
																									class="menu-item-text">Services
																									01</span></a>
																						</li>
																						<li id="menu-item-1739"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1739">
																							<a href="https://techzenwp.rstheme.com/it-solutions/services-02/"
																								class="menu-item-link"><span
																									class="menu-item-text">Services
																									02</span></a>
																						</li>
																						<li id="menu-item-1741"
																							class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1741">
																							<a href="/software-development.html"
																								class="menu-item-link"><span
																									class="menu-item-text">Services
																									Details</span></a>
																						</li>
																						<li id="menu-item-1738"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1738">
																							<a href="https://techzenwp.rstheme.com/it-solutions/industries-we-serve/"
																								class="menu-item-link"><span
																									class="menu-item-text">Industries</span></a>
																						</li>
																						<li id="menu-item-1737"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1737">
																							<a href="https://techzenwp.rstheme.com/it-solutions/work-process/"
																								class="menu-item-link"><span
																									class="menu-item-text">Work
																									Process</span></a>
																						</li>
																					</ul>
																					<div class="menu-toggler-wrap">
																						<button class="menu-toggler">
																							<span class="open-icon">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
																									</path>
																								</svg>
																							</span>
																							<span class="close-icon">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																									</path>
																								</svg>
																							</span>
																						</button>
																					</div>
																					<div
																						class="mobile-panel-wrapper panel-offcanvas position-right">
																						<div
																							class="mobile-panel-overly">
																						</div>
																						<div
																							class="mobile-panel-content">
																							<button
																								class="mobile-panel-close">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																									</path>
																								</svg>
																							</button>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="elementor-element elementor-element-eefd29f e-con-full e-flex e-con e-child"
																			data-id="eefd29f"
																			data-element_type="container"
																			data-e-type="container">
																			<div class="elementor-element elementor-element-c9166e9 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
																				data-id="c9166e9"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rs-heading.default">
																				<div class="elementor-widget-container">

																					<div
																						class="prelements-heading default   animate-  ">
																						<div class="title-inner">
																							<span class="sub-text ">
																								Project Pages </span>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="elementor-element elementor-element-026161b gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
																				data-id="026161b"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rstb-nav-menu.default">
																				<div
																					class="rstb-nav-menu nav-vertical nav-breakpoint-lg has-vertical-divider">
																					<ul id="menu-mega-menu-03"
																						class="primary-menu">
																						<li id="menu-item-1746"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1746">
																							<a href="/portfolio.html"
																								class="menu-item-link"><span
																									class="menu-item-text">Projects
																									Grid 01</span></a>
																						</li>
																						<li id="menu-item-1745"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1745">
																							<a href="https://techzenwp.rstheme.com/it-solutions/project-02/"
																								class="menu-item-link"><span
																									class="menu-item-text">Projects
																									Grid 02</span></a>
																						</li>
																						<li id="menu-item-1743"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1743">
																							<a href="https://techzenwp.rstheme.com/it-solutions/project-slider/"
																								class="menu-item-link"><span
																									class="menu-item-text">Project
																									Slider</span></a>
																						</li>
																						<li id="menu-item-1744"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744">
																							<a href="https://techzenwp.rstheme.com/it-solutions/project-filter/"
																								class="menu-item-link"><span
																									class="menu-item-text">Project
																									Filter</span></a>
																						</li>
																						<li id="menu-item-1747"
																							class="menu-item menu-item-type-post_type menu-item-object-portfolios menu-item-1747">
																							<a href="/software-development.html"
																								class="menu-item-link"><span
																									class="menu-item-text">Projects
																									Details</span></a>
																						</li>
																					</ul>
																					<div class="menu-toggler-wrap">
																						<button class="menu-toggler">
																							<span class="open-icon">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
																									</path>
																								</svg>
																							</span>
																							<span class="close-icon">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																									</path>
																								</svg>
																							</span>
																						</button>
																					</div>
																					<div
																						class="mobile-panel-wrapper panel-offcanvas position-right">
																						<div
																							class="mobile-panel-overly">
																						</div>
																						<div
																							class="mobile-panel-content">
																							<button
																								class="mobile-panel-close">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																									</path>
																								</svg>
																							</button>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="elementor-element elementor-element-5bbc604 e-con-full e-flex e-con e-child"
																			data-id="5bbc604"
																			data-element_type="container"
																			data-e-type="container">
																			<div class="elementor-element elementor-element-d4dfdf7 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
																				data-id="d4dfdf7"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rs-heading.default">
																				<div class="elementor-widget-container">

																					<div
																						class="prelements-heading default   animate-  ">
																						<div class="title-inner">
																							<span class="sub-text ">
																								Other Pages </span>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="elementor-element elementor-element-649b4f9 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
																				data-id="649b4f9"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rstb-nav-menu.default">
																				<div
																					class="rstb-nav-menu nav-vertical nav-breakpoint-lg has-vertical-divider">
																					<ul id="menu-mega-menu-04"
																						class="primary-menu">
																						<li id="menu-item-1749"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1749">
																							<a href="/client-reviews-partners.html"
																								class="menu-item-link"><span
																									class="menu-item-text">Client
																									&#038;
																									Partners</span></a>
																						</li>
																						<li id="menu-item-1752"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1752">
																							<a href="https://techzenwp.rstheme.com/it-solutions/pricing-plan/"
																								class="menu-item-link"><span
																									class="menu-item-text">Pricing
																									Plan</span></a>
																						</li>
																						<li id="menu-item-1751"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1751">
																							<a href="https://techzenwp.rstheme.com/it-solutions/faq/"
																								class="menu-item-link"><span
																									class="menu-item-text">Faq</span></a>
																						</li>
																						<li id="menu-item-1748"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1748">
																							<a href="/blog.html"
																								class="menu-item-link"><span
																									class="menu-item-text">Blog</span></a>
																						</li>
																						<li id="menu-item-1750"
																							class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1750">
																							<a href="/contact.html"
																								class="menu-item-link"><span
																									class="menu-item-text">Contact
																									Us</span></a>
																						</li>
																					</ul>
																					<div class="menu-toggler-wrap">
																						<button class="menu-toggler">
																							<span class="open-icon">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
																									</path>
																								</svg>
																							</span>
																							<span class="close-icon">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																									</path>
																								</svg>
																							</span>
																						</button>
																					</div>
																					<div
																						class="mobile-panel-wrapper panel-offcanvas position-right">
																						<div
																							class="mobile-panel-overly">
																						</div>
																						<div
																							class="mobile-panel-content">
																							<button
																								class="mobile-panel-close">
																								<svg xmlns="http://www.w3.org/2000/svg"
																									viewBox="0 0 24 24">
																									<path
																										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																									</path>
																								</svg>
																							</button>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="elementor-element elementor-element-5c53b59 e-con-full e-flex e-con e-child"
																			data-id="5c53b59"
																			data-element_type="container"
																			data-e-type="container"
																			data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																			<div class="elementor-element elementor-element-a7ea481 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-service-grid"
																				data-id="a7ea481"
																				data-element_type="widget"
																				data-e-type="widget"
																				data-widget_type="rs-service-grid.default">
																				<div class="elementor-widget-container">

																					<div
																						class="rs-addon-services style13  curve-position-">
																						<div
																							class="services-inner  box">

																							<div class="content_part">


																								<div
																									class="services-title">
																									<h5 class="title">
																										Have Any
																										Questions?</h5>
																								</div>

																								<div class="desc-text">
																									Experts Modern
																									Constructions
																								</div>

																								<div class="btn-part">
																									<a class="services-btn icon-right"
																										href="">

																										Get Free Quote
																										<em>
																											<svg xmlns="http://www.w3.org/2000/svg"
																												viewBox="0 0 16 17">
																												<path
																													d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
																												</path>
																											</svg><svg
																												xmlns="http://www.w3.org/2000/svg"
																												viewBox="0 0 16 17">
																												<path
																													d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
																												</path>
																											</svg> </em>
																									</a>
																								</div>
																							</div>
																							<div
																								class="grid_footer_part">
																								<div
																									class="grid_footer_img">
																									<img class="elementor-repeater-item-97101ef"
																										src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/serv_detail_03.jpg"
																										alt="serv_detail_03" />
																								</div>
																							</div>
																						</div>

																					</div>

																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
											<li id="menu-item-1438"
												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1438">
												<a href="/blog.html"
													class="menu-item-link"><span class="menu-item-text">Blog</span><span
														class="sub-menu-icon"><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24">
															<path
																d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
															</path>
														</svg><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24">
															<path
																d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
															</path>
														</svg></span></a>
												<ul class="sub-menu">
													<li id="menu-item-1439"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1439">
														<a href="/blog.html"
															class="menu-item-link"><span class="menu-item-text">Blog
																Classic</span></a>
													</li>
													<li id="menu-item-1440"
														class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1440">
														<a href="https://techzenwp.rstheme.com/it-solutions/top-tech-trends-you-need-to-watch-in-2026/"
															class="menu-item-link"><span class="menu-item-text">Blog
																Single</span></a>
													</li>
												</ul>
											</li>
											<li id="menu-item-2385"
												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2385">
												<a href="/contact.html"
													class="menu-item-link"><span class="menu-item-text">Contact
														Us</span></a>
											</li>
										</ul>
										<div class="menu-toggler-wrap">
											<button class="menu-toggler">
												<span class="open-icon">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
														<path
															d="M6 1.8001C6 1.13738 6.53728 0.600098 7.2 0.600098H22.8C23.4627 0.600098 24 1.13738 24 1.8001C24 2.46282 23.4627 3.0001 22.8 3.0001H7.2C6.53728 3.0001 6 2.46277 6 1.8001ZM22.8 7.8001H1.2C0.537281 7.8001 0 8.33743 0 9.0001C0 9.66282 0.537281 10.2001 1.2 10.2001H22.8C23.4627 10.2001 24 9.66282 24 9.0001C24 8.33743 23.4627 7.8001 22.8 7.8001ZM22.8 15.0001H12C11.3373 15.0001 10.8 15.5374 10.8 16.2001C10.8 16.8628 11.3373 17.4001 12 17.4001H22.8C23.4627 17.4001 24 16.8628 24 16.2001C24 15.5374 23.4627 15.0001 22.8 15.0001Z">
														</path>
													</svg> </span>
												<span class="close-icon">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
														</path>
													</svg>
												</span>
											</button>
										</div>
										<div class="mobile-panel-wrapper panel-offcanvas position-right">
											<div class="mobile-panel-overly"></div>
											<div class="mobile-panel-content">
												<button class="mobile-panel-close">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
														</path>
													</svg>
												</button>
												<div class="mobile-panel-logo"><img
														src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/logos_002.png"
														title="logos_002" alt="logos_002" loading="lazy" /></div>
												<ul id="menu-mobile-menu" class="mobile-menu has-vertical-divider">
													<li id="menu-item-4916"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-4916">
														<a href="/index.html"
															class="menu-item-link"><span
																class="menu-item-text">Home</span></a>
													</li>
													<li id="menu-item-4919"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4919">
														<a href="/about.html"
															class="menu-item-link"><span class="menu-item-text">About
																Us</span><span class="sub-menu-icon"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																	</path>
																</svg><svg xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																	</path>
																</svg></span></a>
														<ul class="sub-menu">
															<li id="menu-item-4931"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4931">
																<a href="/about.html"
																	class="menu-item-link"><span
																		class="menu-item-text">About Us 01</span></a>
															</li>
															<li id="menu-item-4932"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4932">
																<a href="https://techzenwp.rstheme.com/it-solutions/about-us-02/"
																	class="menu-item-link"><span
																		class="menu-item-text">About Us 02</span></a>
															</li>
														</ul>
													</li>
													<li id="menu-item-4948"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4948">
														<a href="/services.html"
															class="menu-item-link"><span
																class="menu-item-text">Services</span><span
																class="sub-menu-icon"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																	</path>
																</svg><svg xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																	</path>
																</svg></span></a>
														<ul class="sub-menu">
															<li id="menu-item-4949"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4949">
																<a href="/services.html"
																	class="menu-item-link"><span
																		class="menu-item-text">Services 01</span></a>
															</li>
															<li id="menu-item-4950"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4950">
																<a href="https://techzenwp.rstheme.com/it-solutions/services-02/"
																	class="menu-item-link"><span
																		class="menu-item-text">Services 02</span></a>
															</li>
															<li id="menu-item-4951"
																class="menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-4951">
																<a href="/software-development.html"
																	class="menu-item-link"><span
																		class="menu-item-text">Service
																		Details</span><span class="sub-menu-icon"><svg
																			xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 24 24">
																			<path
																				d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																			</path>
																		</svg><svg xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 24 24">
																			<path
																				d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																			</path>
																		</svg></span></a>
																<ul class="sub-menu">
																	<li id="menu-item-4952"
																		class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4952">
																		<a href="https://techzenwp.rstheme.com/it-solutions/service/cloud-solutions/"
																			class="menu-item-link"><span
																				class="menu-item-text">Cloud
																				Solutions</span></a>
																	</li>
																	<li id="menu-item-4953"
																		class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4953">
																		<a href="https://techzenwp.rstheme.com/it-solutions/service/cybersecurity-services/"
																			class="menu-item-link"><span
																				class="menu-item-text">Cybersecurity
																				Services</span></a>
																	</li>
																	<li id="menu-item-4954"
																		class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4954">
																		<a href="https://techzenwp.rstheme.com/it-solutions/service/it-support-managed/"
																			class="menu-item-link"><span
																				class="menu-item-text">IT Support &#038;
																				Managed</span></a>
																	</li>
																	<li id="menu-item-4955"
																		class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4955">
																		<a href="/software-development.html"
																			class="menu-item-link"><span
																				class="menu-item-text">Software
																				Development</span></a>
																	</li>
																	<li id="menu-item-4956"
																		class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4956">
																		<a href="https://techzenwp.rstheme.com/it-solutions/service/ui-ux-product-design/"
																			class="menu-item-link"><span
																				class="menu-item-text">UI/UX &#038;
																				Product Design</span></a>
																	</li>
																	<li id="menu-item-4957"
																		class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4957">
																		<a href="https://techzenwp.rstheme.com/it-solutions/service/web-development/"
																			class="menu-item-link"><span
																				class="menu-item-text">Web
																				Development</span></a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
													<li id="menu-item-4965"
														class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4965">
														<a href="#" class="menu-item-link"><span
																class="menu-item-text">Pages</span><span
																class="sub-menu-icon"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																	</path>
																</svg><svg xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																	</path>
																</svg></span></a>
														<ul class="sub-menu">
															<li id="menu-item-4936"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4936">
																<a href="/mission-vision.html"
																	class="menu-item-link"><span
																		class="menu-item-text">Mission &amp;
																		Vision</span></a>
															</li>
															<li id="menu-item-4937"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4937">
																<a href="https://techzenwp.rstheme.com/it-solutions/our-team/"
																	class="menu-item-link"><span
																		class="menu-item-text">Our Team</span></a>
															</li>
															<li id="menu-item-4938"
																class="menu-item menu-item-type-post_type menu-item-object-teams menu-item-4938">
																<a href="https://techzenwp.rstheme.com/it-solutions/teams/carmen-william/"
																	class="menu-item-link"><span
																		class="menu-item-text">Team Details</span></a>
															</li>
															<li id="menu-item-4973"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4973">
																<a href="/portfolio.html"
																	class="menu-item-link"><span
																		class="menu-item-text">Projects</span><span
																		class="sub-menu-icon"><svg
																			xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 24 24">
																			<path
																				d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																			</path>
																		</svg><svg xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 24 24">
																			<path
																				d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																			</path>
																		</svg></span></a>
																<ul class="sub-menu">
																	<li id="menu-item-4977"
																		class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4977">
																		<a href="/portfolio.html"
																			class="menu-item-link"><span
																				class="menu-item-text">Projects
																				01</span></a>
																	</li>
																	<li id="menu-item-4970"
																		class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4970">
																		<a href="https://techzenwp.rstheme.com/it-solutions/project-02/"
																			class="menu-item-link"><span
																				class="menu-item-text">Project
																				02</span></a>
																	</li>
																	<li id="menu-item-4972"
																		class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4972">
																		<a href="https://techzenwp.rstheme.com/it-solutions/project-slider/"
																			class="menu-item-link"><span
																				class="menu-item-text">Project
																				Slider</span></a>
																	</li>
																	<li id="menu-item-4971"
																		class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4971">
																		<a href="https://techzenwp.rstheme.com/it-solutions/project-filter/"
																			class="menu-item-link"><span
																				class="menu-item-text">Project
																				Filter</span></a>
																	</li>
																	<li id="menu-item-4978"
																		class="menu-item menu-item-type-post_type menu-item-object-portfolios menu-item-4978">
																		<a href="/software-development.html"
																			class="menu-item-link"><span
																				class="menu-item-text">Project
																				Details</span></a>
																	</li>
																</ul>
															</li>
															<li id="menu-item-4966"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4966">
																<a href="https://techzenwp.rstheme.com/it-solutions/appointment/"
																	class="menu-item-link"><span
																		class="menu-item-text">Appointment</span></a>
															</li>
															<li id="menu-item-4967"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4967">
																<a href="https://techzenwp.rstheme.com/it-solutions/industries-we-serve/"
																	class="menu-item-link"><span
																		class="menu-item-text">Industries</span></a>
															</li>
															<li id="menu-item-4968"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4968">
																<a href="https://techzenwp.rstheme.com/it-solutions/work-process/"
																	class="menu-item-link"><span
																		class="menu-item-text">Work Process</span></a>
															</li>
															<li id="menu-item-4979"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4979">
																<a href="/client-reviews-partners.html"
																	class="menu-item-link"><span
																		class="menu-item-text">Client &#038;
																		Partners</span></a>
															</li>
															<li id="menu-item-4980"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4980">
																<a href="https://techzenwp.rstheme.com/it-solutions/faq/"
																	class="menu-item-link"><span
																		class="menu-item-text">Faq</span></a>
															</li>
															<li id="menu-item-4981"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4981">
																<a href="https://techzenwp.rstheme.com/it-solutions/pricing-plan/"
																	class="menu-item-link"><span
																		class="menu-item-text">Pricing Plan</span></a>
															</li>
														</ul>
													</li>
													<li id="menu-item-4958"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4958">
														<a href="/blog.html"
															class="menu-item-link"><span
																class="menu-item-text">Blog</span><span
																class="sub-menu-icon"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																	</path>
																</svg><svg xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 24 24">
																	<path
																		d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																	</path>
																</svg></span></a>
														<ul class="sub-menu">
															<li id="menu-item-4959"
																class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4959">
																<a href="/blog.html"
																	class="menu-item-link"><span
																		class="menu-item-text">Blog Classic</span></a>
															</li>
															<li id="menu-item-4960"
																class="menu-item menu-item-type-post_type menu-item-object-post menu-item-4960">
																<a href="https://techzenwp.rstheme.com/it-solutions/how-technology-is-changing-the-future-of-work-2/"
																	class="menu-item-link"><span
																		class="menu-item-text">Blog Single</span></a>
															</li>
														</ul>
													</li>
													<li id="menu-item-4964"
														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4964">
														<a href="/contact.html"
															class="menu-item-link"><span class="menu-item-text">Contact
																Us</span></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="elementor-element elementor-element-2626eced e-con-full e-flex e-con e-child"
								data-id="2626eced" data-element_type="container" data-e-type="container">
								<div class="elementor-element elementor-element-2bb62d67 elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-button"
									data-id="2bb62d67" data-element_type="widget" data-e-type="widget"
									data-widget_type="rs-button.default">
									<div class="elementor-widget-container">
										<div class="rs-button style1 unique-36937">


											<a class="rs-btn anim-dir-angle "
												href="https://techzenwp.rstheme.com/it-solutions/appointment/">
												<span class="rs-btn-active"><span>Get Free Quote</span> </span>
												<em>
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
														<path
															d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
														</path>
													</svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
														<path
															d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
														</path>
													</svg> </em>


											</a>
										</div>
									</div>
								</div>
								<div class="elementor-element elementor-element-5d575de6 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-mini-search"
									data-id="5d575de6" data-element_type="widget" data-e-type="widget"
									data-widget_type="rstb-mini-search.default">
									<div class="rstb-mini-search type-btn-toggle">
										<button class="search-btn">
											<span class="open-icon"><svg xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512"
													x="0" y="0" viewBox="0 0 612.01 612.01"
													style="enable-background:new 0 0 512 512" xml:space="preserve"
													class="">
													<g>
														<path
															d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
															opacity="1" class=""></path>
													</g>
												</svg></span>
											<span class="close-icon"><svg xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
													viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"
													xml:space="preserve" class="">
													<g>
														<g data-name="02 User">
															<path
																d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"
																opacity="1"></path>
															<path
																d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"
																opacity="1"></path>
														</g>
													</g>
												</svg></span>
										</button>
										<div class="search-form-area">
											<form role="search" method="get"
												action="https://techzenwp.rstheme.com/it-solutions/">
												<input type="search" class="search-field" placeholder="Search..."
													value="" name="s" />
												<button type="submit" class="submit-btn">
													<svg xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink" width="512"
														height="512" x="0" y="0" viewBox="0 0 612.01 612.01"
														style="enable-background:new 0 0 512 512" xml:space="preserve"
														class="">
														<g>
															<path
																d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
																opacity="1" class=""></path>
														</g>
													</svg> </button>
											</form>
										</div>
									</div>
								</div>
								<div class="elementor-element elementor-element-29d8e3c elementor-widget-mobile__width-initial elementor-hidden-tablet elementor-hidden-mobile gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-offcanvas"
									data-id="29d8e3c" data-element_type="widget" data-e-type="widget"
									data-widget_type="rstb-offcanvas.default">
									<div class="rstb-offcanvas-wrap">
										<div class="offcanvas-toggle-wrap">
											<button class="offcanvas-toggle">
												<span class="toggle-btn-icon">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"
														fill="none">
														<path
															d="M6 1.8001C6 1.13738 6.53728 0.600098 7.2 0.600098H22.8C23.4627 0.600098 24 1.13738 24 1.8001C24 2.46282 23.4627 3.0001 22.8 3.0001H7.2C6.53728 3.0001 6 2.46277 6 1.8001ZM22.8 7.8001H1.2C0.537281 7.8001 0 8.33743 0 9.0001C0 9.66282 0.537281 10.2001 1.2 10.2001H22.8C23.4627 10.2001 24 9.66282 24 9.0001C24 8.33743 23.4627 7.8001 22.8 7.8001ZM22.8 15.0001H12C11.3373 15.0001 10.8 15.5374 10.8 16.2001C10.8 16.8628 11.3373 17.4001 12 17.4001H22.8C23.4627 17.4001 24 16.8628 24 16.2001C24 15.5374 23.4627 15.0001 22.8 15.0001Z">
														</path>
													</svg> </span>
											</button>
										</div>
										<div class="rstb-offcanvas-panel position-right">
											<div class="offcanvas-overly"></div>
											<div class="offcanvas-container" style=width:400px>
												<button class="offcanvas-close">
													<svg xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"
														xml:space="preserve" class="">
														<g>
															<g data-name="02 User">
																<path
																	d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"
																	opacity="1"></path>
																<path
																	d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"
																	opacity="1"></path>
															</g>
														</g>
													</svg> </button>
												<div data-elementor-type="wp-post" data-elementor-id="260"
													class="elementor elementor-260">
													<div class="elementor-element elementor-element-f35194e e-con-full e-flex e-con e-parent"
														data-id="f35194e" data-element_type="container"
														data-e-type="container"
														data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
														<div class="elementor-element elementor-element-197f5a0f gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-site-logo"
															data-id="197f5a0f" data-element_type="widget"
															data-e-type="widget"
															data-widget_type="rstb-site-logo.default">
															<div class="rstb-site-logo">
																<a href="/index.html"><img
																		src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/logos_002.png"
																		alt="IT Solutions"></a>
															</div>
														</div>
														<div class="elementor-element elementor-element-1d793780 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
															data-id="1d793780" data-element_type="widget"
															data-e-type="widget" data-widget_type="rs-heading.default">
															<div class="elementor-widget-container">

																<div class="prelements-heading default   animate-  ">
																	<div class="title-inner">
																	</div>
																	<div class="descripti">
																		<p>We love to bring to life as a developer and I
																			aim the today do this using what ever front
																			tools necessary.</p>
																	</div>
																</div>
															</div>
														</div>
														<div class="elementor-element elementor-element-41ed0909 gallery-spacing-custom gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-image-gallery"
															data-id="41ed0909" data-element_type="widget"
															data-e-type="widget"
															data-widget_type="image-gallery.default">
															<div class="elementor-image-gallery">
																<div id='gallery-1'
																	class='gallery galleryid-13 gallery-columns-3 gallery-size-thumbnail'>
																	<figure class='gallery-item'>
																		<div class='gallery-icon landscape'>
																			<a data-elementor-open-lightbox="yes"
																				data-elementor-lightbox-slideshow="41ed0909"
																				data-elementor-lightbox-title="blog_06"
																				data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTEzMSwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDYuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																				href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_06.jpg'><img
																					width="150" height="150"
																					src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_06-150x150.jpg"
																					class="attachment-thumbnail size-thumbnail"
																					alt="" decoding="async"
																					srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_06-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_06-500x500.jpg 500w"
																					sizes="(max-width: 150px) 100vw, 150px" /></a>
																		</div>
																	</figure>
																	<figure class='gallery-item'>
																		<div class='gallery-icon landscape'>
																			<a data-elementor-open-lightbox="yes"
																				data-elementor-lightbox-slideshow="41ed0909"
																				data-elementor-lightbox-title="blog_05"
																				data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTEyOCwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDUuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																				href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_05.jpg'><img
																					width="150" height="150"
																					src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_05-150x150.jpg"
																					class="attachment-thumbnail size-thumbnail"
																					alt="" decoding="async"
																					srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_05-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_05-500x500.jpg 500w"
																					sizes="(max-width: 150px) 100vw, 150px" /></a>
																		</div>
																	</figure>
																	<figure class='gallery-item'>
																		<div class='gallery-icon landscape'>
																			<a data-elementor-open-lightbox="yes"
																				data-elementor-lightbox-slideshow="41ed0909"
																				data-elementor-lightbox-title="blog_04"
																				data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTEyMywidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDQuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																				href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_04.jpg'><img
																					width="150" height="150"
																					src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_04-150x150.jpg"
																					class="attachment-thumbnail size-thumbnail"
																					alt="" decoding="async"
																					srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_04-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_04-500x500.jpg 500w"
																					sizes="(max-width: 150px) 100vw, 150px" /></a>
																		</div>
																	</figure>
																	<figure class='gallery-item'>
																		<div class='gallery-icon landscape'>
																			<a data-elementor-open-lightbox="yes"
																				data-elementor-lightbox-slideshow="41ed0909"
																				data-elementor-lightbox-title="blog_03"
																				data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTEyMCwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDMuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																				href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_03.jpg'><img
																					loading="lazy" width="150"
																					height="150"
																					src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_03-150x150.jpg"
																					class="attachment-thumbnail size-thumbnail"
																					alt="" decoding="async"
																					srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_03-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_03-500x500.jpg 500w"
																					sizes="(max-width: 150px) 100vw, 150px" /></a>
																		</div>
																	</figure>
																	<figure class='gallery-item'>
																		<div class='gallery-icon landscape'>
																			<a data-elementor-open-lightbox="yes"
																				data-elementor-lightbox-slideshow="41ed0909"
																				data-elementor-lightbox-title="blog_02"
																				data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTExNiwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDIuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																				href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_02.jpg'><img
																					loading="lazy" width="150"
																					height="150"
																					src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_02-150x150.jpg"
																					class="attachment-thumbnail size-thumbnail"
																					alt="" decoding="async"
																					srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_02-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_02-500x500.jpg 500w"
																					sizes="(max-width: 150px) 100vw, 150px" /></a>
																		</div>
																	</figure>
																	<figure class='gallery-item'>
																		<div class='gallery-icon landscape'>
																			<a data-elementor-open-lightbox="yes"
																				data-elementor-lightbox-slideshow="41ed0909"
																				data-elementor-lightbox-title="blog_01"
																				data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTA5NSwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDEuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																				href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_01.jpg'><img
																					loading="lazy" width="150"
																					height="150"
																					src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_01-150x150.jpg"
																					class="attachment-thumbnail size-thumbnail"
																					alt="" decoding="async"
																					srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_01-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_01-500x500.jpg 500w"
																					sizes="(max-width: 150px) 100vw, 150px" /></a>
																		</div>
																	</figure>
																</div>
															</div>
														</div>
														<div class="elementor-element elementor-element-20d7061 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-contact-box"
															data-id="20d7061" data-element_type="widget"
															data-e-type="widget"
															data-widget_type="rs-contact-box.default">
															<div class="elementor-widget-container">



																<!-- Style 1 Start -->
																<div class="rs-contact-box">

																	<div class="address-item boxstyle2">


																		<div class="address-text">
																			<div class="text">

																				<a href="tel:+990123456789%20">
																					<span class="des">
																						Call us: +990 123 456 789
																					</span>
																				</a>
																			</div>




																		</div>
																		<span class="des-right-icon"></span>
																	</div>
																	<div class="address-item boxstyle2">


																		<div class="address-text">
																			<div class="text">

																				<a href="mailto:consulting@gmail.com">
																					<span class="des">
																						Email: construction@gmail.com
																					</span>
																				</a>
																			</div>




																		</div>
																		<span class="des-right-icon"></span>
																	</div>
																	<div class="address-item boxstyle2">


																		<div class="address-text">
																			<div class="text">

																				<span class="des">
																					Hours: Mon-Fri: 8.00am - 18.00pm
																				</span>
																			</div>




																		</div>
																		<span class="des-right-icon"></span>
																	</div>
																</div>

																<!-- Style 1 End -->

															</div>
														</div>
														<div class="elementor-element elementor-element-4d45e235 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-social-icons"
															data-id="4d45e235" data-element_type="widget"
															data-e-type="widget"
															data-widget_type="rs-social-icons.default">
															<div class="elementor-widget-container">
																<div class="rs-social-menu style1">
																	<div class="social-wrapper">
																		<a href="#">
																			<div class="icon-wrapper">
																				<svg aria-hidden="true"
																					class="e-font-icon-svg e-fab-facebook-f"
																					viewBox="0 0 320 512"
																					xmlns="http://www.w3.org/2000/svg">
																					<path
																						d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
																					</path>
																				</svg>
																			</div>
																		</a>
																		<a href="#">
																			<div class="icon-wrapper">
																				<svg aria-hidden="true"
																					class="e-font-icon-svg e-fab-instagram"
																					viewBox="0 0 448 512"
																					xmlns="http://www.w3.org/2000/svg">
																					<path
																						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
																					</path>
																				</svg>
																			</div>
																		</a>
																		<a href="#">
																			<div class="icon-wrapper">
																				<svg aria-hidden="true"
																					class="e-font-icon-svg e-fab-pinterest-p"
																					viewBox="0 0 384 512"
																					xmlns="http://www.w3.org/2000/svg">
																					<path
																						d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z">
																					</path>
																				</svg>
																			</div>
																		</a>
																		<a href="#">
																			<div class="icon-wrapper">
																				<svg aria-hidden="true"
																					class="e-font-icon-svg e-fab-x-twitter"
																					viewBox="0 0 512 512"
																					xmlns="http://www.w3.org/2000/svg">
																					<path
																						d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
																					</path>
																				</svg>
																			</div>
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="elementor-element elementor-element-6bcd10ed gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-button"
															data-id="6bcd10ed" data-element_type="widget"
															data-e-type="widget" data-widget_type="rs-button.default">
															<div class="elementor-widget-container">
																<div class="rs-button style1 unique-58022">


																	<a class="rs-btn anim-dir-angle "
																		href="/contact.html">
																		<span class="rs-btn-active"><span>Get In
																				Touch</span> </span>
																		<em>
																			<svg xmlns="http://www.w3.org/2000/svg"
																				viewBox="0 0 16 17">
																				<path
																					d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
																				</path>
																			</svg> <svg
																				xmlns="http://www.w3.org/2000/svg"
																				viewBox="0 0 16 17">
																				<path
																					d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
																				</path>
																			</svg> </em>


																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="elementor-element elementor-element-7d416cb5 e-con-full rstb-sticky-up e-flex e-con e-child"
					data-id="7d416cb5" data-element_type="container" data-e-type="container"
					data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="elementor-element elementor-element-1d9caa8f e-con-full e-flex e-con e-child"
						data-id="1d9caa8f" data-element_type="container" data-e-type="container">
						<div class="elementor-element elementor-element-664dd685 e-con-full e-flex e-con e-child"
							data-id="664dd685" data-element_type="container" data-e-type="container">
							<div class="elementor-element elementor-element-5f607518 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-site-logo"
								data-id="5f607518" data-element_type="widget" data-e-type="widget"
								data-widget_type="rstb-site-logo.default">
								<div class="rstb-site-logo">
									<a href="/index.html"><img
											src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/logos_001.png"
											alt="IT Solutions"></a>
								</div>
							</div>
						</div>
						<div class="elementor-element elementor-element-1116c335 e-con-full e-flex e-con e-child"
							data-id="1116c335" data-element_type="container" data-e-type="container">
							<div class="elementor-element elementor-element-74eee02b gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
								data-id="74eee02b" data-element_type="widget" data-e-type="widget"
								data-widget_type="rstb-nav-menu.default">
								<div class="rstb-nav-menu nav-horizontal nav-breakpoint-lg">
									<ul id="menu-main-menu-1" class="primary-menu">
										<li
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-5262">
											<a href="/index.html"
												class="menu-item-link"><span class="menu-item-text">Home</span></a>
										</li>
										<li
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1413">
											<a href="/about.html"
												class="menu-item-link"><span class="menu-item-text">About Us</span><span
													class="sub-menu-icon"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24">
														<path
															d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
														</path>
													</svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
														</path>
													</svg></span></a>
											<ul class="sub-menu">
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1415">
													<a href="/about.html"
														class="menu-item-link"><span class="menu-item-text">About Us
															01</span></a>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1414">
													<a href="https://techzenwp.rstheme.com/it-solutions/about-us-02/"
														class="menu-item-link"><span class="menu-item-text">About Us
															02</span></a>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1416">
													<a href="/mission-vision.html"
														class="menu-item-link"><span class="menu-item-text">Mission
															&amp; Vision</span></a>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1417">
													<a href="https://techzenwp.rstheme.com/it-solutions/our-team/"
														class="menu-item-link"><span class="menu-item-text">Our
															Team</span></a>
												</li>
											</ul>
										</li>
										<li
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1418">
											<a href="/services.html"
												class="menu-item-link"><span class="menu-item-text">Services</span><span
													class="sub-menu-icon"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24">
														<path
															d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
														</path>
													</svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
														</path>
													</svg></span></a>
											<ul class="sub-menu">
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1419">
													<a href="/services.html"
														class="menu-item-link"><span class="menu-item-text">Services
															01</span></a>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1420">
													<a href="https://techzenwp.rstheme.com/it-solutions/services-02/"
														class="menu-item-link"><span class="menu-item-text">Services
															02</span></a>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-1421">
													<a href="/software-development.html"
														class="menu-item-link"><span class="menu-item-text">Service
															Details</span><span class="sub-menu-icon"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																<path
																	d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																</path>
															</svg><svg xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 24 24">
																<path
																	d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																</path>
															</svg></span></a>
													<ul class="sub-menu">
														<li
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1426">
															<a href="/software-development.html"
																class="menu-item-link"><span
																	class="menu-item-text">Software
																	Development</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1425">
															<a href="https://techzenwp.rstheme.com/it-solutions/service/cloud-solutions/"
																class="menu-item-link"><span
																	class="menu-item-text">Cloud Solutions</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1424">
															<a href="https://techzenwp.rstheme.com/it-solutions/service/cybersecurity-services/"
																class="menu-item-link"><span
																	class="menu-item-text">Cybersecurity
																	Services</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1423">
															<a href="https://techzenwp.rstheme.com/it-solutions/service/web-development/"
																class="menu-item-link"><span class="menu-item-text">Web
																	Development</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1422">
															<a href="https://techzenwp.rstheme.com/it-solutions/service/it-support-managed/"
																class="menu-item-link"><span class="menu-item-text">IT
																	Support &#038; Managed</span></a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li
											class="menu-item menu-item-type-post_type menu-item-object-rstb_template menu-item-1437 menu-item-has-mega-menu">
											<a href="#" class="menu-item-link"><span
													class="menu-item-text">Pages</span><span class="sub-menu-icon"><svg
														xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
														</path>
													</svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
														</path>
													</svg></span></a>
											<div class="mega-menu mega-menu-width-full">
												<div data-elementor-type="wp-post" data-elementor-id="1427"
													class="elementor elementor-1427">
													<div class="elementor-element elementor-element-4a43a91 e-flex e-con-boxed e-con e-parent"
														data-id="4a43a91" data-element_type="container"
														data-e-type="container">
														<div class="e-con-inner">
															<div class="elementor-element elementor-element-707a034 e-flex e-con-boxed e-con e-child"
																data-id="707a034" data-element_type="container"
																data-e-type="container"
																data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																<div class="e-con-inner">
																	<div class="elementor-element elementor-element-712f53a e-con-full e-flex e-con e-child"
																		data-id="712f53a" data-element_type="container"
																		data-e-type="container">
																		<div class="elementor-element elementor-element-299d0b3 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
																			data-id="299d0b3" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rs-heading.default">
																			<div class="elementor-widget-container">

																				<div
																					class="prelements-heading default   animate-  ">
																					<div class="title-inner">
																						<span class="sub-text ">
																							About Company </span>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="elementor-element elementor-element-0701e84 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
																			data-id="0701e84" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rstb-nav-menu.default">
																			<div
																				class="rstb-nav-menu nav-vertical nav-breakpoint-lg has-vertical-divider">
																				<ul id="menu-mega-menu-2"
																					class="primary-menu">
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1733">
																						<a href="/about.html"
																							class="menu-item-link"><span
																								class="menu-item-text">About
																								Us 01</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1734">
																						<a href="https://techzenwp.rstheme.com/it-solutions/about-us-02/"
																							class="menu-item-link"><span
																								class="menu-item-text">About
																								Us 02</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1736">
																						<a href="/mission-vision.html"
																							class="menu-item-link"><span
																								class="menu-item-text">Mission
																								&amp; Vision</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1742">
																						<a href="https://techzenwp.rstheme.com/it-solutions/our-team/"
																							class="menu-item-link"><span
																								class="menu-item-text">Our
																								Team</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1735">
																						<a href="https://techzenwp.rstheme.com/it-solutions/appointment/"
																							class="menu-item-link"><span
																								class="menu-item-text">Appointment</span></a>
																					</li>
																				</ul>
																				<div class="menu-toggler-wrap">
																					<button class="menu-toggler">
																						<span class="open-icon">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
																								</path>
																							</svg>
																						</span>
																						<span class="close-icon">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																								</path>
																							</svg>
																						</span>
																					</button>
																				</div>
																				<div
																					class="mobile-panel-wrapper panel-offcanvas position-right">
																					<div class="mobile-panel-overly">
																					</div>
																					<div class="mobile-panel-content">
																						<button
																							class="mobile-panel-close">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																								</path>
																							</svg>
																						</button>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-7aedb6b e-con-full e-flex e-con e-child"
																		data-id="7aedb6b" data-element_type="container"
																		data-e-type="container">
																		<div class="elementor-element elementor-element-7e373c1 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
																			data-id="7e373c1" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rs-heading.default">
																			<div class="elementor-widget-container">

																				<div
																					class="prelements-heading default   animate-  ">
																					<div class="title-inner">
																						<span class="sub-text ">
																							Service Pages </span>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="elementor-element elementor-element-78f50b2 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
																			data-id="78f50b2" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rstb-nav-menu.default">
																			<div
																				class="rstb-nav-menu nav-vertical nav-breakpoint-lg has-vertical-divider">
																				<ul id="menu-mega-menu-3"
																					class="primary-menu">
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1740">
																						<a href="/services.html"
																							class="menu-item-link"><span
																								class="menu-item-text">Services
																								01</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1739">
																						<a href="https://techzenwp.rstheme.com/it-solutions/services-02/"
																							class="menu-item-link"><span
																								class="menu-item-text">Services
																								02</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1741">
																						<a href="/software-development.html"
																							class="menu-item-link"><span
																								class="menu-item-text">Services
																								Details</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1738">
																						<a href="https://techzenwp.rstheme.com/it-solutions/industries-we-serve/"
																							class="menu-item-link"><span
																								class="menu-item-text">Industries</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1737">
																						<a href="https://techzenwp.rstheme.com/it-solutions/work-process/"
																							class="menu-item-link"><span
																								class="menu-item-text">Work
																								Process</span></a>
																					</li>
																				</ul>
																				<div class="menu-toggler-wrap">
																					<button class="menu-toggler">
																						<span class="open-icon">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
																								</path>
																							</svg>
																						</span>
																						<span class="close-icon">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																								</path>
																							</svg>
																						</span>
																					</button>
																				</div>
																				<div
																					class="mobile-panel-wrapper panel-offcanvas position-right">
																					<div class="mobile-panel-overly">
																					</div>
																					<div class="mobile-panel-content">
																						<button
																							class="mobile-panel-close">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																								</path>
																							</svg>
																						</button>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-eefd29f e-con-full e-flex e-con e-child"
																		data-id="eefd29f" data-element_type="container"
																		data-e-type="container">
																		<div class="elementor-element elementor-element-c9166e9 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
																			data-id="c9166e9" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rs-heading.default">
																			<div class="elementor-widget-container">

																				<div
																					class="prelements-heading default   animate-  ">
																					<div class="title-inner">
																						<span class="sub-text ">
																							Project Pages </span>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="elementor-element elementor-element-026161b gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
																			data-id="026161b" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rstb-nav-menu.default">
																			<div
																				class="rstb-nav-menu nav-vertical nav-breakpoint-lg has-vertical-divider">
																				<ul id="menu-mega-menu-4"
																					class="primary-menu">
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1746">
																						<a href="/portfolio.html"
																							class="menu-item-link"><span
																								class="menu-item-text">Projects
																								Grid 01</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1745">
																						<a href="https://techzenwp.rstheme.com/it-solutions/project-02/"
																							class="menu-item-link"><span
																								class="menu-item-text">Projects
																								Grid 02</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1743">
																						<a href="https://techzenwp.rstheme.com/it-solutions/project-slider/"
																							class="menu-item-link"><span
																								class="menu-item-text">Project
																								Slider</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744">
																						<a href="https://techzenwp.rstheme.com/it-solutions/project-filter/"
																							class="menu-item-link"><span
																								class="menu-item-text">Project
																								Filter</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-portfolios menu-item-1747">
																						<a href="/software-development.html"
																							class="menu-item-link"><span
																								class="menu-item-text">Projects
																								Details</span></a>
																					</li>
																				</ul>
																				<div class="menu-toggler-wrap">
																					<button class="menu-toggler">
																						<span class="open-icon">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
																								</path>
																							</svg>
																						</span>
																						<span class="close-icon">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																								</path>
																							</svg>
																						</span>
																					</button>
																				</div>
																				<div
																					class="mobile-panel-wrapper panel-offcanvas position-right">
																					<div class="mobile-panel-overly">
																					</div>
																					<div class="mobile-panel-content">
																						<button
																							class="mobile-panel-close">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																								</path>
																							</svg>
																						</button>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-5bbc604 e-con-full e-flex e-con e-child"
																		data-id="5bbc604" data-element_type="container"
																		data-e-type="container">
																		<div class="elementor-element elementor-element-d4dfdf7 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
																			data-id="d4dfdf7" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rs-heading.default">
																			<div class="elementor-widget-container">

																				<div
																					class="prelements-heading default   animate-  ">
																					<div class="title-inner">
																						<span class="sub-text ">
																							Other Pages </span>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="elementor-element elementor-element-649b4f9 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
																			data-id="649b4f9" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rstb-nav-menu.default">
																			<div
																				class="rstb-nav-menu nav-vertical nav-breakpoint-lg has-vertical-divider">
																				<ul id="menu-mega-menu-5"
																					class="primary-menu">
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1749">
																						<a href="/client-reviews-partners.html"
																							class="menu-item-link"><span
																								class="menu-item-text">Client
																								&#038;
																								Partners</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1752">
																						<a href="https://techzenwp.rstheme.com/it-solutions/pricing-plan/"
																							class="menu-item-link"><span
																								class="menu-item-text">Pricing
																								Plan</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1751">
																						<a href="https://techzenwp.rstheme.com/it-solutions/faq/"
																							class="menu-item-link"><span
																								class="menu-item-text">Faq</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1748">
																						<a href="/blog.html"
																							class="menu-item-link"><span
																								class="menu-item-text">Blog</span></a>
																					</li>
																					<li
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1750">
																						<a href="/contact.html"
																							class="menu-item-link"><span
																								class="menu-item-text">Contact
																								Us</span></a>
																					</li>
																				</ul>
																				<div class="menu-toggler-wrap">
																					<button class="menu-toggler">
																						<span class="open-icon">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z">
																								</path>
																							</svg>
																						</span>
																						<span class="close-icon">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																								</path>
																							</svg>
																						</span>
																					</button>
																				</div>
																				<div
																					class="mobile-panel-wrapper panel-offcanvas position-right">
																					<div class="mobile-panel-overly">
																					</div>
																					<div class="mobile-panel-content">
																						<button
																							class="mobile-panel-close">
																							<svg xmlns="http://www.w3.org/2000/svg"
																								viewBox="0 0 24 24">
																								<path
																									d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
																								</path>
																							</svg>
																						</button>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-5c53b59 e-con-full e-flex e-con e-child"
																		data-id="5c53b59" data-element_type="container"
																		data-e-type="container"
																		data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																		<div class="elementor-element elementor-element-a7ea481 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-service-grid"
																			data-id="a7ea481" data-element_type="widget"
																			data-e-type="widget"
																			data-widget_type="rs-service-grid.default">
																			<div class="elementor-widget-container">

																				<div
																					class="rs-addon-services style13  curve-position-">
																					<div class="services-inner  box">

																						<div class="content_part">


																							<div class="services-title">
																								<h5 class="title"> Have
																									Any Questions?</h5>
																							</div>

																							<div class="desc-text">
																								Experts Modern
																								Constructions
																							</div>

																							<div class="btn-part">
																								<a class="services-btn icon-right"
																									href="">

																									Get Free Quote
																									<em>
																										<svg xmlns="http://www.w3.org/2000/svg"
																											viewBox="0 0 16 17">
																											<path
																												d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
																											</path>
																										</svg><svg
																											xmlns="http://www.w3.org/2000/svg"
																											viewBox="0 0 16 17">
																											<path
																												d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
																											</path>
																										</svg> </em>
																								</a>
																							</div>
																						</div>
																						<div class="grid_footer_part">
																							<div
																								class="grid_footer_img">
																								<img class="elementor-repeater-item-97101ef"
																									src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/serv_detail_03.jpg"
																									alt="serv_detail_03" />
																							</div>
																						</div>
																					</div>

																				</div>

																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1438">
											<a href="/blog.html"
												class="menu-item-link"><span class="menu-item-text">Blog</span><span
													class="sub-menu-icon"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24">
														<path
															d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
														</path>
													</svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path
															d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
														</path>
													</svg></span></a>
											<ul class="sub-menu">
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1439">
													<a href="/blog.html"
														class="menu-item-link"><span class="menu-item-text">Blog
															Classic</span></a>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1440">
													<a href="https://techzenwp.rstheme.com/it-solutions/top-tech-trends-you-need-to-watch-in-2026/"
														class="menu-item-link"><span class="menu-item-text">Blog
															Single</span></a>
												</li>
											</ul>
										</li>
										<li
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2385">
											<a href="/contact.html"
												class="menu-item-link"><span class="menu-item-text">Contact
													Us</span></a>
										</li>
									</ul>
									<div class="menu-toggler-wrap">
										<button class="menu-toggler">
											<span class="open-icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
													<path
														d="M6 1.8001C6 1.13738 6.53728 0.600098 7.2 0.600098H22.8C23.4627 0.600098 24 1.13738 24 1.8001C24 2.46282 23.4627 3.0001 22.8 3.0001H7.2C6.53728 3.0001 6 2.46277 6 1.8001ZM22.8 7.8001H1.2C0.537281 7.8001 0 8.33743 0 9.0001C0 9.66282 0.537281 10.2001 1.2 10.2001H22.8C23.4627 10.2001 24 9.66282 24 9.0001C24 8.33743 23.4627 7.8001 22.8 7.8001ZM22.8 15.0001H12C11.3373 15.0001 10.8 15.5374 10.8 16.2001C10.8 16.8628 11.3373 17.4001 12 17.4001H22.8C23.4627 17.4001 24 16.8628 24 16.2001C24 15.5374 23.4627 15.0001 22.8 15.0001Z">
													</path>
												</svg> </span>
											<span class="close-icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path
														d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
													</path>
												</svg>
											</span>
										</button>
									</div>
									<div class="mobile-panel-wrapper panel-offcanvas position-right">
										<div class="mobile-panel-overly"></div>
										<div class="mobile-panel-content">
											<button class="mobile-panel-close">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path
														d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
													</path>
												</svg>
											</button>
											<div class="mobile-panel-logo"><img
													src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/logos_002.png"
													title="logos_002" alt="logos_002" loading="lazy" /></div>
											<ul id="menu-mobile-menu-1" class="mobile-menu has-vertical-divider">
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-4916">
													<a href="/index.html"
														class="menu-item-link"><span
															class="menu-item-text">Home</span></a>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4919">
													<a href="/about.html"
														class="menu-item-link"><span class="menu-item-text">About
															Us</span><span class="sub-menu-icon"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																<path
																	d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																</path>
															</svg><svg xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 24 24">
																<path
																	d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																</path>
															</svg></span></a>
													<ul class="sub-menu">
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4931">
															<a href="/about.html"
																class="menu-item-link"><span
																	class="menu-item-text">About Us 01</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4932">
															<a href="https://techzenwp.rstheme.com/it-solutions/about-us-02/"
																class="menu-item-link"><span
																	class="menu-item-text">About Us 02</span></a>
														</li>
													</ul>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4948">
													<a href="/services.html"
														class="menu-item-link"><span
															class="menu-item-text">Services</span><span
															class="sub-menu-icon"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																<path
																	d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																</path>
															</svg><svg xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 24 24">
																<path
																	d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																</path>
															</svg></span></a>
													<ul class="sub-menu">
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4949">
															<a href="/services.html"
																class="menu-item-link"><span
																	class="menu-item-text">Services 01</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4950">
															<a href="https://techzenwp.rstheme.com/it-solutions/services-02/"
																class="menu-item-link"><span
																	class="menu-item-text">Services 02</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-4951">
															<a href="/software-development.html"
																class="menu-item-link"><span
																	class="menu-item-text">Service Details</span><span
																	class="sub-menu-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24">
																		<path
																			d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																		</path>
																	</svg><svg xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24">
																		<path
																			d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																		</path>
																	</svg></span></a>
															<ul class="sub-menu">
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4952">
																	<a href="https://techzenwp.rstheme.com/it-solutions/service/cloud-solutions/"
																		class="menu-item-link"><span
																			class="menu-item-text">Cloud
																			Solutions</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4953">
																	<a href="https://techzenwp.rstheme.com/it-solutions/service/cybersecurity-services/"
																		class="menu-item-link"><span
																			class="menu-item-text">Cybersecurity
																			Services</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4954">
																	<a href="https://techzenwp.rstheme.com/it-solutions/service/it-support-managed/"
																		class="menu-item-link"><span
																			class="menu-item-text">IT Support &#038;
																			Managed</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4955">
																	<a href="/software-development.html"
																		class="menu-item-link"><span
																			class="menu-item-text">Software
																			Development</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4956">
																	<a href="https://techzenwp.rstheme.com/it-solutions/service/ui-ux-product-design/"
																		class="menu-item-link"><span
																			class="menu-item-text">UI/UX &#038; Product
																			Design</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-services menu-item-4957">
																	<a href="https://techzenwp.rstheme.com/it-solutions/service/web-development/"
																		class="menu-item-link"><span
																			class="menu-item-text">Web
																			Development</span></a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li
													class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4965">
													<a href="#" class="menu-item-link"><span
															class="menu-item-text">Pages</span><span
															class="sub-menu-icon"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																<path
																	d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																</path>
															</svg><svg xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 24 24">
																<path
																	d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																</path>
															</svg></span></a>
													<ul class="sub-menu">
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4936">
															<a href="/mission-vision.html"
																class="menu-item-link"><span
																	class="menu-item-text">Mission &amp;
																	Vision</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4937">
															<a href="https://techzenwp.rstheme.com/it-solutions/our-team/"
																class="menu-item-link"><span class="menu-item-text">Our
																	Team</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-teams menu-item-4938">
															<a href="https://techzenwp.rstheme.com/it-solutions/teams/carmen-william/"
																class="menu-item-link"><span class="menu-item-text">Team
																	Details</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4973">
															<a href="/portfolio.html"
																class="menu-item-link"><span
																	class="menu-item-text">Projects</span><span
																	class="sub-menu-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24">
																		<path
																			d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																		</path>
																	</svg><svg xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24">
																		<path
																			d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																		</path>
																	</svg></span></a>
															<ul class="sub-menu">
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4977">
																	<a href="/portfolio.html"
																		class="menu-item-link"><span
																			class="menu-item-text">Projects
																			01</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4970">
																	<a href="https://techzenwp.rstheme.com/it-solutions/project-02/"
																		class="menu-item-link"><span
																			class="menu-item-text">Project 02</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4972">
																	<a href="https://techzenwp.rstheme.com/it-solutions/project-slider/"
																		class="menu-item-link"><span
																			class="menu-item-text">Project
																			Slider</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4971">
																	<a href="https://techzenwp.rstheme.com/it-solutions/project-filter/"
																		class="menu-item-link"><span
																			class="menu-item-text">Project
																			Filter</span></a>
																</li>
																<li
																	class="menu-item menu-item-type-post_type menu-item-object-portfolios menu-item-4978">
																	<a href="/software-development.html"
																		class="menu-item-link"><span
																			class="menu-item-text">Project
																			Details</span></a>
																</li>
															</ul>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4966">
															<a href="https://techzenwp.rstheme.com/it-solutions/appointment/"
																class="menu-item-link"><span
																	class="menu-item-text">Appointment</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4967">
															<a href="https://techzenwp.rstheme.com/it-solutions/industries-we-serve/"
																class="menu-item-link"><span
																	class="menu-item-text">Industries</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4968">
															<a href="https://techzenwp.rstheme.com/it-solutions/work-process/"
																class="menu-item-link"><span class="menu-item-text">Work
																	Process</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4979">
															<a href="/client-reviews-partners.html"
																class="menu-item-link"><span
																	class="menu-item-text">Client &#038;
																	Partners</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4980">
															<a href="https://techzenwp.rstheme.com/it-solutions/faq/"
																class="menu-item-link"><span
																	class="menu-item-text">Faq</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4981">
															<a href="https://techzenwp.rstheme.com/it-solutions/pricing-plan/"
																class="menu-item-link"><span
																	class="menu-item-text">Pricing Plan</span></a>
														</li>
													</ul>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4958">
													<a href="/blog.html"
														class="menu-item-link"><span
															class="menu-item-text">Blog</span><span
															class="sub-menu-icon"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																<path
																	d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
																</path>
															</svg><svg xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 24 24">
																<path
																	d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z">
																</path>
															</svg></span></a>
													<ul class="sub-menu">
														<li
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4959">
															<a href="/blog.html"
																class="menu-item-link"><span class="menu-item-text">Blog
																	Classic</span></a>
														</li>
														<li
															class="menu-item menu-item-type-post_type menu-item-object-post menu-item-4960">
															<a href="https://techzenwp.rstheme.com/it-solutions/how-technology-is-changing-the-future-of-work-2/"
																class="menu-item-link"><span class="menu-item-text">Blog
																	Single</span></a>
														</li>
													</ul>
												</li>
												<li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4964">
													<a href="/contact.html"
														class="menu-item-link"><span class="menu-item-text">Contact
															Us</span></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="elementor-element elementor-element-1f49f58c e-con-full e-flex e-con e-child"
							data-id="1f49f58c" data-element_type="container" data-e-type="container">
							<div class="elementor-element elementor-element-4a6231a6 elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-button"
								data-id="4a6231a6" data-element_type="widget" data-e-type="widget"
								data-widget_type="rs-button.default">
								<div class="elementor-widget-container">
									<div class="rs-button style1 unique-60958">


										<a class="rs-btn anim-dir-angle "
											href="https://techzenwp.rstheme.com/it-solutions/appointment/">
											<span class="rs-btn-active"><span>Get Free Quote</span> </span>
											<em>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
													<path
														d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
													</path>
												</svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
													<path
														d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
													</path>
												</svg> </em>


										</a>
									</div>
								</div>
							</div>
							<div class="elementor-element elementor-element-5457824 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-mini-search"
								data-id="5457824" data-element_type="widget" data-e-type="widget"
								data-widget_type="rstb-mini-search.default">
								<div class="rstb-mini-search type-btn-toggle">
									<button class="search-btn">
										<span class="open-icon"><svg xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512"
												x="0" y="0" viewBox="0 0 612.01 612.01"
												style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
												<g>
													<path
														d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
														opacity="1" class=""></path>
												</g>
											</svg></span>
										<span class="close-icon"><svg xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
												viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"
												xml:space="preserve" class="">
												<g>
													<g data-name="02 User">
														<path
															d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"
															opacity="1"></path>
														<path
															d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"
															opacity="1"></path>
													</g>
												</g>
											</svg></span>
									</button>
									<div class="search-form-area">
										<form role="search" method="get"
											action="https://techzenwp.rstheme.com/it-solutions/">
											<input type="search" class="search-field" placeholder="Search..." value=""
												name="s" />
											<button type="submit" class="submit-btn">
												<svg xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512"
													x="0" y="0" viewBox="0 0 612.01 612.01"
													style="enable-background:new 0 0 512 512" xml:space="preserve"
													class="">
													<g>
														<path
															d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
															opacity="1" class=""></path>
													</g>
												</svg> </button>
										</form>
									</div>
								</div>
							</div>
							<div class="elementor-element elementor-element-1c01f901 elementor-widget-mobile__width-initial elementor-hidden-tablet elementor-hidden-mobile gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-offcanvas"
								data-id="1c01f901" data-element_type="widget" data-e-type="widget"
								data-widget_type="rstb-offcanvas.default">
								<div class="rstb-offcanvas-wrap">
									<div class="offcanvas-toggle-wrap">
										<button class="offcanvas-toggle">
											<span class="toggle-btn-icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="none">
													<path
														d="M6 1.8001C6 1.13738 6.53728 0.600098 7.2 0.600098H22.8C23.4627 0.600098 24 1.13738 24 1.8001C24 2.46282 23.4627 3.0001 22.8 3.0001H7.2C6.53728 3.0001 6 2.46277 6 1.8001ZM22.8 7.8001H1.2C0.537281 7.8001 0 8.33743 0 9.0001C0 9.66282 0.537281 10.2001 1.2 10.2001H22.8C23.4627 10.2001 24 9.66282 24 9.0001C24 8.33743 23.4627 7.8001 22.8 7.8001ZM22.8 15.0001H12C11.3373 15.0001 10.8 15.5374 10.8 16.2001C10.8 16.8628 11.3373 17.4001 12 17.4001H22.8C23.4627 17.4001 24 16.8628 24 16.2001C24 15.5374 23.4627 15.0001 22.8 15.0001Z">
													</path>
												</svg> </span>
										</button>
									</div>
									<div class="rstb-offcanvas-panel position-right">
										<div class="offcanvas-overly"></div>
										<div class="offcanvas-container" style=width:400px>
											<button class="offcanvas-close">
												<svg xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
													viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"
													xml:space="preserve" class="">
													<g>
														<g data-name="02 User">
															<path
																d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"
																opacity="1"></path>
															<path
																d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"
																opacity="1"></path>
														</g>
													</g>
												</svg> </button>
											<div data-elementor-type="wp-post" data-elementor-id="260"
												class="elementor elementor-260">
												<div class="elementor-element elementor-element-f35194e e-con-full e-flex e-con e-parent"
													data-id="f35194e" data-element_type="container"
													data-e-type="container"
													data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
													<div class="elementor-element elementor-element-197f5a0f gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-site-logo"
														data-id="197f5a0f" data-element_type="widget"
														data-e-type="widget" data-widget_type="rstb-site-logo.default">
														<div class="rstb-site-logo">
															<a href="/index.html"><img
																	src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/logos_002.png"
																	alt="IT Solutions"></a>
														</div>
													</div>
													<div class="elementor-element elementor-element-1d793780 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
														data-id="1d793780" data-element_type="widget"
														data-e-type="widget" data-widget_type="rs-heading.default">
														<div class="elementor-widget-container">

															<div class="prelements-heading default   animate-  ">
																<div class="title-inner">
																</div>
																<div class="descripti">
																	<p>We love to bring to life as a developer and I aim
																		the today do this using what ever front tools
																		necessary.</p>
																</div>
															</div>
														</div>
													</div>
													<div class="elementor-element elementor-element-41ed0909 gallery-spacing-custom gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-image-gallery"
														data-id="41ed0909" data-element_type="widget"
														data-e-type="widget" data-widget_type="image-gallery.default">
														<div class="elementor-image-gallery">
															<div id='gallery-1'
																class='gallery galleryid-13 gallery-columns-3 gallery-size-thumbnail'>
																<figure class='gallery-item'>
																	<div class='gallery-icon landscape'>
																		<a data-elementor-open-lightbox="yes"
																			data-elementor-lightbox-slideshow="41ed0909"
																			data-elementor-lightbox-title="blog_06"
																			data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTEzMSwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDYuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																			href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_06.jpg'><img
																				width="150" height="150"
																				src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_06-150x150.jpg"
																				class="attachment-thumbnail size-thumbnail"
																				alt="" decoding="async"
																				srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_06-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_06-500x500.jpg 500w"
																				sizes="(max-width: 150px) 100vw, 150px" /></a>
																	</div>
																</figure>
																<figure class='gallery-item'>
																	<div class='gallery-icon landscape'>
																		<a data-elementor-open-lightbox="yes"
																			data-elementor-lightbox-slideshow="41ed0909"
																			data-elementor-lightbox-title="blog_05"
																			data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTEyOCwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDUuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																			href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_05.jpg'><img
																				width="150" height="150"
																				src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_05-150x150.jpg"
																				class="attachment-thumbnail size-thumbnail"
																				alt="" decoding="async"
																				srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_05-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_05-500x500.jpg 500w"
																				sizes="(max-width: 150px) 100vw, 150px" /></a>
																	</div>
																</figure>
																<figure class='gallery-item'>
																	<div class='gallery-icon landscape'>
																		<a data-elementor-open-lightbox="yes"
																			data-elementor-lightbox-slideshow="41ed0909"
																			data-elementor-lightbox-title="blog_04"
																			data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTEyMywidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDQuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																			href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_04.jpg'><img
																				width="150" height="150"
																				src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_04-150x150.jpg"
																				class="attachment-thumbnail size-thumbnail"
																				alt="" decoding="async"
																				srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_04-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_04-500x500.jpg 500w"
																				sizes="(max-width: 150px) 100vw, 150px" /></a>
																	</div>
																</figure>
																<figure class='gallery-item'>
																	<div class='gallery-icon landscape'>
																		<a data-elementor-open-lightbox="yes"
																			data-elementor-lightbox-slideshow="41ed0909"
																			data-elementor-lightbox-title="blog_03"
																			data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTEyMCwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDMuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																			href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_03.jpg'><img
																				loading="lazy" width="150" height="150"
																				src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_03-150x150.jpg"
																				class="attachment-thumbnail size-thumbnail"
																				alt="" decoding="async"
																				srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_03-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_03-500x500.jpg 500w"
																				sizes="(max-width: 150px) 100vw, 150px" /></a>
																	</div>
																</figure>
																<figure class='gallery-item'>
																	<div class='gallery-icon landscape'>
																		<a data-elementor-open-lightbox="yes"
																			data-elementor-lightbox-slideshow="41ed0909"
																			data-elementor-lightbox-title="blog_02"
																			data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTExNiwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDIuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																			href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_02.jpg'><img
																				loading="lazy" width="150" height="150"
																				src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_02-150x150.jpg"
																				class="attachment-thumbnail size-thumbnail"
																				alt="" decoding="async"
																				srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_02-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_02-500x500.jpg 500w"
																				sizes="(max-width: 150px) 100vw, 150px" /></a>
																	</div>
																</figure>
																<figure class='gallery-item'>
																	<div class='gallery-icon landscape'>
																		<a data-elementor-open-lightbox="yes"
																			data-elementor-lightbox-slideshow="41ed0909"
																			data-elementor-lightbox-title="blog_01"
																			data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTA5NSwidXJsIjoiaHR0cHM6XC9cL3RlY2h6ZW53cC5yc3RoZW1lLmNvbVwvaXQtc29sdXRpb25zXC93cC1jb250ZW50XC91cGxvYWRzXC9zaXRlc1wvMlwvMjAyNlwvMDRcL2Jsb2dfMDEuanBnIiwic2xpZGVzaG93IjoiNDFlZDA5MDkifQ%3D%3D"
																			href='https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_01.jpg'><img
																				loading="lazy" width="150" height="150"
																				src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_01-150x150.jpg"
																				class="attachment-thumbnail size-thumbnail"
																				alt="" decoding="async"
																				srcset="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_01-150x150.jpg 150w, https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/blog_01-500x500.jpg 500w"
																				sizes="(max-width: 150px) 100vw, 150px" /></a>
																	</div>
																</figure>
															</div>
														</div>
													</div>
													<div class="elementor-element elementor-element-20d7061 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-contact-box"
														data-id="20d7061" data-element_type="widget"
														data-e-type="widget" data-widget_type="rs-contact-box.default">
														<div class="elementor-widget-container">



															<!-- Style 1 Start -->
															<div class="rs-contact-box">

																<div class="address-item boxstyle2">


																	<div class="address-text">
																		<div class="text">

																			<a href="tel:+990123456789%20">
																				<span class="des">
																					Call us: +990 123 456 789 </span>
																			</a>
																		</div>




																	</div>
																	<span class="des-right-icon"></span>
																</div>
																<div class="address-item boxstyle2">


																	<div class="address-text">
																		<div class="text">

																			<a href="mailto:consulting@gmail.com">
																				<span class="des">
																					Email: construction@gmail.com
																				</span>
																			</a>
																		</div>




																	</div>
																	<span class="des-right-icon"></span>
																</div>
																<div class="address-item boxstyle2">


																	<div class="address-text">
																		<div class="text">

																			<span class="des">
																				Hours: Mon-Fri: 8.00am - 18.00pm </span>
																		</div>




																	</div>
																	<span class="des-right-icon"></span>
																</div>
															</div>

															<!-- Style 1 End -->

														</div>
													</div>
													<div class="elementor-element elementor-element-4d45e235 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-social-icons"
														data-id="4d45e235" data-element_type="widget"
														data-e-type="widget" data-widget_type="rs-social-icons.default">
														<div class="elementor-widget-container">
															<div class="rs-social-menu style1">
																<div class="social-wrapper">
																	<a href="#">
																		<div class="icon-wrapper">
																			<svg aria-hidden="true"
																				class="e-font-icon-svg e-fab-facebook-f"
																				viewBox="0 0 320 512"
																				xmlns="http://www.w3.org/2000/svg">
																				<path
																					d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
																				</path>
																			</svg>
																		</div>
																	</a>
																	<a href="#">
																		<div class="icon-wrapper">
																			<svg aria-hidden="true"
																				class="e-font-icon-svg e-fab-instagram"
																				viewBox="0 0 448 512"
																				xmlns="http://www.w3.org/2000/svg">
																				<path
																					d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
																				</path>
																			</svg>
																		</div>
																	</a>
																	<a href="#">
																		<div class="icon-wrapper">
																			<svg aria-hidden="true"
																				class="e-font-icon-svg e-fab-pinterest-p"
																				viewBox="0 0 384 512"
																				xmlns="http://www.w3.org/2000/svg">
																				<path
																					d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z">
																				</path>
																			</svg>
																		</div>
																	</a>
																	<a href="#">
																		<div class="icon-wrapper">
																			<svg aria-hidden="true"
																				class="e-font-icon-svg e-fab-x-twitter"
																				viewBox="0 0 512 512"
																				xmlns="http://www.w3.org/2000/svg">
																				<path
																					d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
																				</path>
																			</svg>
																		</div>
																	</a>
																</div>
															</div>
														</div>
													</div>
													<div class="elementor-element elementor-element-6bcd10ed gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-button"
														data-id="6bcd10ed" data-element_type="widget"
														data-e-type="widget" data-widget_type="rs-button.default">
														<div class="elementor-widget-container">
															<div class="rs-button style1 unique-62483">


																<a class="rs-btn anim-dir-angle "
																	href="/contact.html">
																	<span class="rs-btn-active"><span>Get In
																			Touch</span> </span>
																	<em>
																		<svg xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 16 17">
																			<path
																				d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
																			</path>
																		</svg> <svg xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 16 17">
																			<path
																				d="M13.338 5.04405L1.88204 16.5L0 14.618L11.4546 3.16201H1.35896V0.5H16V15.141H13.338V5.04405Z">
																			</path>
																		</svg> </em>


																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;

const TECHZEN_FOOTER = `
			<div data-elementor-type="wp-post" data-elementor-id="35" class="elementor elementor-35">
				<div class="elementor-element elementor-element-5f633736 e-con-full e-flex e-con e-parent"
					data-id="5f633736" data-element_type="container" data-e-type="container"
					data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="elementor-element elementor-element-eb80c4e e-con-full e-flex e-con e-child"
						data-id="eb80c4e" data-element_type="container" data-e-type="container">
						<div class="elementor-element elementor-element-6dfe07cd e-flex e-con-boxed e-con e-child"
							data-id="6dfe07cd" data-element_type="container" data-e-type="container">
							<div class="e-con-inner">
								<div class="elementor-element elementor-element-43f31072 e-con-full e-flex e-con e-child"
									data-id="43f31072" data-element_type="container" data-e-type="container"
									data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
									<div class="elementor-element elementor-element-66f95441 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-site-logo"
										data-id="66f95441" data-element_type="widget" data-e-type="widget"
										data-widget_type="rstb-site-logo.default">
										<div class="rstb-site-logo">
											<a href="/index.html"><img
													src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/logos_002.png"
													alt="IT Solutions"></a>
										</div>
									</div>
									<div class="elementor-element elementor-element-50238243 elementor-widget__width-initial elementor-widget-tablet__width-inherit gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
										data-id="50238243" data-element_type="widget" data-e-type="widget"
										data-widget_type="rs-heading.default">
										<div class="elementor-widget-container">

											<div class="prelements-heading default   animate-  ">
												<div class="title-inner">
												</div>
												<div class="descripti">
													Techzen solution specializes in helping startups and enterprises
													craft strate solutions donec eu magna. </div>
											</div>
										</div>
									</div>
									<div class="elementor-element elementor-element-507227a1 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-contact-box"
										data-id="507227a1" data-element_type="widget" data-e-type="widget"
										data-widget_type="rs-contact-box.default">
										<div class="elementor-widget-container">



											<!-- Style 1 Start -->
											<div class="rs-contact-box">

												<div class="address-item boxstyle1">


													<div class="address-text">
														<div class="text">

															<a href="">
																<span class="des">
																	Call us: +990 123 456 789 </span>
															</a>
														</div>




													</div>
													<span class="des-right-icon"></span>
												</div>
												<div class="address-item boxstyle1">


													<div class="address-text">
														<div class="text">

															<a href="">
																<span class="des">
																	Email: contruction@gmail.com </span>
															</a>
														</div>




													</div>
													<span class="des-right-icon"></span>
												</div>
												<div class="address-item boxstyle1">


													<div class="address-text">
														<div class="text">

															<span class="des">
																Hours: Mon-Fri: 8.00am - 18.00pm </span>
														</div>




													</div>
													<span class="des-right-icon"></span>
												</div>
											</div>

											<!-- Style 1 End -->

										</div>
									</div>
									<div class="elementor-element elementor-element-286ac938 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-social-icons"
										data-id="286ac938" data-element_type="widget" data-e-type="widget"
										data-widget_type="rs-social-icons.default">
										<div class="elementor-widget-container">
											<div class="rs-social-menu style1">
												<div class="social-wrapper">
													<a href="#">
														<div class="icon-wrapper">
															<svg aria-hidden="true"
																class="e-font-icon-svg e-fab-facebook-f"
																viewBox="0 0 320 512"
																xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
																</path>
															</svg>
														</div>
													</a>
													<a href="#">
														<div class="icon-wrapper">
															<svg aria-hidden="true"
																class="e-font-icon-svg e-fab-instagram"
																viewBox="0 0 448 512"
																xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
																</path>
															</svg>
														</div>
													</a>
													<a href="#">
														<div class="icon-wrapper">
															<svg aria-hidden="true"
																class="e-font-icon-svg e-fab-linkedin-in"
																viewBox="0 0 448 512"
																xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
																</path>
															</svg>
														</div>
													</a>
													<a href="#">
														<div class="icon-wrapper">
															<svg aria-hidden="true"
																class="e-font-icon-svg e-fab-pinterest-p"
																viewBox="0 0 384 512"
																xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z">
																</path>
															</svg>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="elementor-element elementor-element-490f5f56 e-con-full e-flex e-con e-child"
									data-id="490f5f56" data-element_type="container" data-e-type="container"
									data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
									<div class="elementor-element elementor-element-9a14cde e-con-full e-flex e-con e-child"
										data-id="9a14cde" data-element_type="container" data-e-type="container">
										<div class="elementor-element elementor-element-249cfe97 e-con-full e-flex e-con e-child"
											data-id="249cfe97" data-element_type="container" data-e-type="container">
											<div class="elementor-element elementor-element-7ce7ca6d elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget-laptop__width-inherit elementor-widget-tablet_extra__width-inherit gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
												data-id="7ce7ca6d" data-element_type="widget" data-e-type="widget"
												data-widget_type="rs-heading.default">
												<div class="elementor-widget-container">

													<div class="prelements-heading default   animate-  ">
														<div class="title-inner">
															<h4 class="title  ">Quick Links</h4>
														</div>
													</div>
												</div>
											</div>
											<div class="elementor-element elementor-element-253b7696 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
												data-id="253b7696" data-element_type="widget" data-e-type="widget"
												data-widget_type="rstb-nav-menu.default">
												<div
													class="rstb-nav-menu nav-vertical nav-breakpoint-none has-vertical-divider">
													<ul id="menu-footer_menu_02" class="primary-menu">
														<li id="menu-item-1757"
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1757">
															<a href="/about.html"
																class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span class="menu-item-text">About
																	Us</span></a>
														</li>
														<li id="menu-item-1760"
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1760">
															<a href="/services.html"
																class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span
																	class="menu-item-text">Services</span></a>
														</li>
														<li id="menu-item-1759"
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759">
															<a href="/portfolio.html"
																class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span
																	class="menu-item-text">Projects</span></a>
														</li>
														<li id="menu-item-1758"
															class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1758">
															<a href="/contact.html"
																class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span class="menu-item-text">Contact
																	Us</span></a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="elementor-element elementor-element-560c911c e-con-full e-flex e-con e-child"
											data-id="560c911c" data-element_type="container" data-e-type="container">
											<div class="elementor-element elementor-element-73da3693 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget-laptop__width-inherit elementor-widget-tablet_extra__width-inherit gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
												data-id="73da3693" data-element_type="widget" data-e-type="widget"
												data-widget_type="rs-heading.default">
												<div class="elementor-widget-container">

													<div class="prelements-heading default   animate-  ">
														<div class="title-inner">
															<h4 class="title  ">Industries</h4>
														</div>
													</div>
												</div>
											</div>
											<div class="elementor-element elementor-element-2b149e24 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
												data-id="2b149e24" data-element_type="widget" data-e-type="widget"
												data-widget_type="rstb-nav-menu.default">
												<div
													class="rstb-nav-menu nav-vertical nav-breakpoint-none has-vertical-divider">
													<ul id="menu-footer_menu_03" class="primary-menu">
														<li id="menu-item-1764"
															class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1764">
															<a href="#" class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span
																	class="menu-item-text">E-Commerce</span></a>
														</li>
														<li id="menu-item-1761"
															class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1761">
															<a href="#" class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span
																	class="menu-item-text">Healthcare</span></a>
														</li>
														<li id="menu-item-1762"
															class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1762">
															<a href="#" class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span
																	class="menu-item-text">Education</span></a>
														</li>
														<li id="menu-item-1763"
															class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1763">
															<a href="#" class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span
																	class="menu-item-text">Finance</span></a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="elementor-element elementor-element-48f61563 e-con-full e-flex e-con e-child"
											data-id="48f61563" data-element_type="container" data-e-type="container">
											<div class="elementor-element elementor-element-77b10101 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget-laptop__width-inherit elementor-widget-tablet_extra__width-inherit gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
												data-id="77b10101" data-element_type="widget" data-e-type="widget"
												data-widget_type="rs-heading.default">
												<div class="elementor-widget-container">

													<div class="prelements-heading default   animate-  ">
														<div class="title-inner">
															<h4 class="title  ">Services</h4>
														</div>
													</div>
												</div>
											</div>
											<div class="elementor-element elementor-element-2d6ec1a1 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-nav-menu"
												data-id="2d6ec1a1" data-element_type="widget" data-e-type="widget"
												data-widget_type="rstb-nav-menu.default">
												<div
													class="rstb-nav-menu nav-vertical nav-breakpoint-none has-vertical-divider">
													<ul id="menu-footer_menu_01" class="primary-menu">
														<li id="menu-item-1756"
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1756">
															<a href="/software-development.html"
																class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span class="menu-item-text">Software
																	Development</span></a>
														</li>
														<li id="menu-item-1754"
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1754">
															<a href="https://techzenwp.rstheme.com/it-solutions/service/cybersecurity-services/"
																class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span
																	class="menu-item-text">Cybersecurity
																	Services</span></a>
														</li>
														<li id="menu-item-1753"
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1753">
															<a href="https://techzenwp.rstheme.com/it-solutions/service/web-development/"
																class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span class="menu-item-text">Web
																	Development</span></a>
														</li>
														<li id="menu-item-1755"
															class="menu-item menu-item-type-post_type menu-item-object-services menu-item-1755">
															<a href="https://techzenwp.rstheme.com/it-solutions/service/cloud-solutions/"
																class="menu-item-link"><span
																	class="menu-prefix-icon"><svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 24 24" fill="currentColor">
																		<path
																			d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z">
																		</path>
																	</svg></span><span class="menu-item-text">Cloud
																	Solutions</span></a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="elementor-element elementor-element-545a5f17 e-con-full e-flex e-con e-child"
										data-id="545a5f17" data-element_type="container" data-e-type="container"
										data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
										<div class="elementor-element elementor-element-422f099c gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-heading"
											data-id="422f099c" data-element_type="widget" data-e-type="widget"
											data-widget_type="rs-heading.default">
											<div class="elementor-widget-container">

												<div class="prelements-heading default   animate-  ">
													<div class="title-inner">
														<h4 class="title  ">Subscribe Newsletter</h4>
													</div>
												</div>
											</div>
										</div>
										<div class="elementor-element elementor-element-6d4d0636 elementor-widget-tablet_extra__width-inherit gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-cf7"
											data-id="6d4d0636" data-element_type="widget" data-e-type="widget"
											data-widget_type="rs-cf7.default">
											<div class="elementor-widget-container">

												<div class="wpcf7 no-js" id="wpcf7-f47-o3" lang="en-US" dir="ltr"
													data-wpcf7-id="47">
													<div class="screen-reader-response">
														<p role="status" aria-live="polite" aria-atomic="true"></p>
														<ul></ul>
													</div>
													<form action="/it-solutions/#wpcf7-f47-o3" method="post"
														class="wpcf7-form init" aria-label="Contact form"
														novalidate="novalidate" data-status="init">
														<fieldset class="hidden-fields-container"><input type="hidden"
																name="_wpcf7" value="47" /><input type="hidden"
																name="_wpcf7_version" value="6.1.5" /><input
																type="hidden" name="_wpcf7_locale"
																value="en_US" /><input type="hidden"
																name="_wpcf7_unit_tag" value="wpcf7-f47-o3" /><input
																type="hidden" name="_wpcf7_container_post"
																value="0" /><input type="hidden"
																name="_wpcf7_posted_data_hash" value="" />
														</fieldset>
														<span class="wpcf7-form-control-wrap"
															data-name="your-email"><input size="40" maxlength="400"
																class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
																autocomplete="email" aria-required="true"
																aria-invalid="false" placeholder="Your email address.."
																value="" type="email" name="your-email" /></span>
														<div class="form-btn-area anim-dir-angle">
															<input class="wpcf7-form-control wpcf7-submit has-spinner"
																type="submit" value="Let’s Join" />
															<em>
																<svg xmlns="http://www.w3.org/2000/svg" width="12"
																	height="12" viewBox="0 0 12 12" fill="none">
																	<path
																		d="M9.67029 3.6295L1.78054 11.5192L0.484375 10.2231L8.37321 2.33333H1.42029V0.5H11.5036V10.5833H9.67029V3.6295Z"
																		fill="#2B3944"></path>
																</svg>
																<svg xmlns="http://www.w3.org/2000/svg" width="12"
																	height="12" viewBox="0 0 12 12" fill="none">
																	<path
																		d="M9.67029 3.6295L1.78054 11.5192L0.484375 10.2231L8.37321 2.33333H1.42029V0.5H11.5036V10.5833H9.67029V3.6295Z"
																		fill="#2B3944"></path>
																</svg> </em>
														</div>
														<div class="wpcf7-response-output" aria-hidden="true"></div>
													</form>
												</div>
											</div>
										</div>
									</div>
									<div class="elementor-element elementor-element-1e2ce7ee e-con-full e-flex e-con e-child"
										data-id="1e2ce7ee" data-element_type="container" data-e-type="container">
										<div class="elementor-element elementor-element-27883eb6 elementor-widget__width-initial elementor-widget-tablet__width-inherit gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-logo"
											data-id="27883eb6" data-element_type="widget" data-e-type="widget"
											data-widget_type="rs-logo.default">
											<div class="elementor-widget-container">
												<div class="rsaddon-unique-slider">
													<div class="rs-logo-slider addon-slider-121346 style1">
														<div class="row">
															<div
																class="logo-item col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
																<a href="#" class="logo-item-wrapper">
																	<div class="image-wrapper">
																		<img src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/footer-logo.png"
																			alt="footer-logo.png">
																	</div>
																</a>
															</div>
															<div
																class="logo-item col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
																<a href="#" class="logo-item-wrapper">
																	<div class="image-wrapper">
																		<img src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/brand-logo1-1.png"
																			alt="brand-logo1-1.png">
																	</div>
																</a>
															</div>
															<div
																class="logo-item col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
																<a href="#" class="logo-item-wrapper">
																	<div class="image-wrapper">
																		<img src="https://techzenwp.rstheme.com/it-solutions/wp-content/uploads/sites/2/2026/04/brand-logo1-2.png"
																			alt="brand-logo1-2.png">
																	</div>
																</a>
															</div>
														</div>
													</div> <!-- .rs-logo-slider -->
												</div> <!-- .rsaddon-unique-slider -->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="elementor-element elementor-element-f693fca e-con-full e-flex e-con e-child"
						data-id="f693fca" data-element_type="container" data-e-type="container">
						<div class="elementor-element elementor-element-3fb6641 e-flex e-con-boxed e-con e-child"
							data-id="3fb6641" data-element_type="container" data-e-type="container">
							<div class="e-con-inner">
								<div class="elementor-element elementor-element-6341b62e e-con-full e-flex e-con e-child"
									data-id="6341b62e" data-element_type="container" data-e-type="container">
									<div class="elementor-element elementor-element-c459401 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-contact-box"
										data-id="c459401" data-element_type="widget" data-e-type="widget"
										data-widget_type="rs-contact-box.default">
										<div class="elementor-widget-container">



											<!-- Style 1 Start -->
											<div class="rs-contact-box">

												<div class="address-item boxstyle1">


													<div class="address-text">
														<div class="text">

															<span class="des">
																<a href="#">Terms &amp; Agreements</a> </span>
														</div>




													</div>
													<span class="des-right-icon"></span>
												</div>
												<div class="address-item boxstyle1">


													<div class="address-text">
														<div class="text">

															<span class="des">
																<a href="#">Privacy Policy</a> </span>
														</div>




													</div>
													<span class="des-right-icon"></span>
												</div>
											</div>

											<!-- Style 1 End -->

										</div>
									</div>
								</div>
								<div class="elementor-element elementor-element-1e45d0ab e-con-full e-flex e-con e-child"
									data-id="1e45d0ab" data-element_type="container" data-e-type="container">
									<div class="elementor-element elementor-element-7b4d6ab1 gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rstb-copyright"
										data-id="7b4d6ab1" data-element_type="widget" data-e-type="widget"
										data-widget_type="rstb-copyright.default">
										<p class="rstb-copyright">© Copyright 2026 <a
												href="https://rstheme.com/">RSTheme</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;

(function () {
  // 1. Inject Header
  const headerEl = document.querySelector('header.rstb-header');
  if (headerEl) {
    headerEl.innerHTML = TECHZEN_HEADER;
  }

  // 2. Inject Footer
  const footerEl = document.querySelector('footer.rstb-footer');
  if (footerEl) {
    footerEl.innerHTML = TECHZEN_FOOTER;
  }

  // 3. Set Active Navigation Item
  const path = window.location.pathname;
  let page = path.split('/').pop() || 'index.html';
  if (page === '') page = 'index.html';

  // Normalize page name
  if (page.startsWith('/')) page = page.substring(1);

  // Remove existing active classes from all menu items
  document.querySelectorAll('.rstb-header .menu-item').forEach(li => {
    li.classList.remove(
      'current-menu-item',
      'current_page_item',
      'current-menu-ancestor',
      'current-menu-parent',
      'current_page_parent',
      'current_page_ancestor'
    );
  });

  // Add active classes to the matching menu item based on filename
  document.querySelectorAll('.rstb-header .menu-item a').forEach(a => {
    let href = a.getAttribute('href');
    if (href && href !== '#' && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
      // Clean query parameters and hash fragments
      let cleanHref = href.split('#')[0].split('?')[0];
      
      // Strip trailing slash
      if (cleanHref.endsWith('/')) {
        cleanHref = cleanHref.slice(0, -1);
      }
      
      // Get the last segment of the path
      let hrefPage = cleanHref.split('/').pop() || 'index.html';
      
      // If the clean URL points to the empty root or base it-solutions directory, map to index.html
      if (hrefPage === '' || hrefPage === 'it-solutions') {
        hrefPage = 'index.html';
      }
      
      if (hrefPage.startsWith('/')) hrefPage = hrefPage.substring(1);
      
      if (hrefPage === page) {
        let parent = a.parentElement;
        if (parent && parent.tagName === 'LI') {
          // Direct parent LI gets the exact active classes
          parent.classList.add('current-menu-item', 'current_page_item');
          
          // Ancestors only get parent/ancestor classes, not active classes
          let ancestor = parent.parentElement.closest('li');
          while (ancestor) {
            // Do not propagate active parent highlighting to structural "Pages" grouping items
            let textEl = ancestor.querySelector('.menu-item-link > .menu-item-text') || ancestor.querySelector('.menu-item-text');
            let isPages = textEl && textEl.textContent.trim().toLowerCase() === 'pages';
            
            if (!isPages) {
              ancestor.classList.add('current-menu-ancestor', 'current-menu-parent', 'current_page_parent', 'current_page_ancestor');
            }
            ancestor = ancestor.parentElement.closest('li');
          }
        }
      }
    }
  });
})();

