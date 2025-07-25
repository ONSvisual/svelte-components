<script>
	import { onMount, getContext } from "svelte";
	import Theme from "$lib/wrappers/Theme/Theme.svelte";

	const page = getContext("page");

	/**
	 * Display compact header without menus
	 * @type {boolean}
	 */
	export let compact = false;
	/**
	 * Sets a predefined theme
	 * @type {"light"|"dark"|"paleblue"|"blue"|"navyblue"|"grey"|null}
	 */
	export let theme = null;
	/**
	 * Define additional props to override the base theme
	 * @type {object}
	 */
	export let themeOverrides = {};

	let lang = "en";
	let baseurl = "https://www.ons.gov.uk";
	let path = "";

	const texts = {
		"Footer links": "",
		Help: "Cymorth",
		Accessibility: "Hygyrchedd",
		Cookies: "Cwcis",
		Privacy: "Preifatrwydd",
		"Terms and conditions": "Telerau ac amodau",
		"About ONS": "Ynglŷn ag SYG",
		"What we do": "Beth rydym yn ei wneud",
		Careers: "Gyrfaoedd",
		"Contact us": "Cysylltu â ni",
		News: "Newyddion",
		"Freedom of Information": "Rhyddid Gwybodaeth",
		"Connect with us": "Cysylltu â ni",
		Consultations: "Ymgynghoriadau",
		"Discussion forums": "Fforymau trafod",
		"Email alerts": "Rhybuddion ebost",
		"All content is available under the": "Mae'r holl gynnwys ar gael o dan delerau'r",
		"Open Government Licence v3.0": "Drwydded Llywodraeth Agored v3.0",
		"except where otherwise stated": "ac eithrio lle y nodir fel arall"
	};

	$: i18n = (text) => (lang === "cy" && texts[text] ? texts[text] : text);

	function setPaths() {
		const url = page?.url || document.location;
		lang = url.host.startsWith("cy") ? "cy" : "en";
		baseurl = lang === "cy" ? "https://cy.ons.gov.uk" : "https://www.ons.gov.uk";
		path = url.pathname;
	}
	onMount(setPaths);
</script>

<Theme {theme} overrides={themeOverrides}>
	<footer class="ons-footer">
		<div class="ons-footer__body" data-analytics="footer">
			<div class="ons-container">
				{#if !compact}
					<div class="ons-grid">
						<div class="ons-grid__col ons-col-4@m">
							<h2 class="ons-footer__heading ons-u-fs-r--b">{i18n("Help")}</h2>
							<ul class="ons-list ons-u-mb-no ons-list--bare">
								<li class="ons-list__item">
									<a href="{baseurl}/help/accessibility" class="ons-list__link"
										>{i18n("Accessibility")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="{baseurl}/manage-cookie-settings/" class="ons-list__link"
										>{i18n("Cookies")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="{baseurl}/help/privacynotice" class="ons-list__link">{i18n("Privacy")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="{baseurl}/help/termsandconditions" class="ons-list__link"
										>{i18n("Terms and conditions")}</a
									>
								</li>
							</ul>
						</div>
						<!-- Full footer columns -->
						<div class="ons-grid__col ons-col-4@m ons-u-mt-l@2xs@m">
							<h2 class="ons-footer__heading ons-u-fs-r--b">{i18n("About ONS")}</h2>
							<ul class="ons-list ons-u-mb-no ons-list--bare">
								<li class="ons-list__item">
									<a href="{baseurl}/aboutus/whatwedo" class="ons-list__link"
										>{i18n("What we do")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="https://careers.ons.gov.uk" class="ons-list__link">{i18n("Careers")}</a>
								</li>
								<li class="ons-list__item">
									<a href="{baseurl}/aboutus/contactus" class="ons-list__link"
										>{i18n("Contact us")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="{baseurl}/news" class="ons-list__link">{i18n("News")}</a>
								</li>
								<li class="ons-list__item">
									<a
										href="{baseurl}/aboutus/transparencyandgovernance/freedomofinformationfoi"
										class="ons-list__link">{i18n("Freedom of information")}</a
									>
								</li>
							</ul>
						</div>
						<!-- Full footer columns -->
						<div class="ons-grid__col ons-col-4@m ons-u-mt-l@2xs@m">
							<h2 class="ons-footer__heading ons-u-fs-r--b">{i18n("Connect with us")}</h2>
							<ul class="ons-list ons-u-mb-no ons-list--bare">
								<li class="ons-list__item">
									<a href="https://x.com/ONS" class="ons-list__link">{i18n("X")}</a>
								</li>
								<li class="ons-list__item">
									<a
										href="https://www.instagram.com/officefornationalstatistics/"
										class="ons-list__link">{i18n("Instagram")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="https://www.facebook.com/ONS" class="ons-list__link"
										>{i18n("Facebook")}</a
									>
								</li>
								<li class="ons-list__item">
									<a
										href="https://www.linkedin.com/company/office-for-national-statistics"
										class="ons-list__link">{i18n("Linkedin")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="https://consultations.ons.gov.uk/" class="ons-list__link"
										>{i18n("Consultations")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="https://www.statsusernetwork.ons.gov.uk/" class="ons-list__link"
										>{i18n("Discussion forums")}</a
									>
								</li>
								<li class="ons-list__item">
									<a
										href="https://public.govdelivery.com/accounts/UKONS/subscribers/new"
										class="ons-list__link">{i18n("Email alerts")}</a
									>
								</li>
							</ul>
						</div>
						<div class="ons-grid__col ons-u-mb-l">
							<hr class="ons-footer__hr" />
						</div>
					</div>
				{/if}
				<div class="ons-grid ons-grid-flex--vertical-top ons-grid-flex--between">
					<div class="ons-grid__col">
						{#if compact}
							<!-- Legal -->
							<ul class="ons-list ons-u-mb-s ons-footer--rows ons-list--bare ons-list--inline">
								<li class="ons-list__item">
									<a href="{baseurl}/help/accessibility" class="ons-list__link"
										>{i18n("Accessibility")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="{baseurl}/cookies" class="ons-list__link">{i18n("Cookies")}</a>
								</li>
								<li class="ons-list__item">
									<a href="{baseurl}/help/privacynotice" class="ons-list__link">{i18n("Privacy")}</a
									>
								</li>
								<li class="ons-list__item">
									<a href="{baseurl}/help/termsandconditions" class="ons-list__link"
										>{i18n("Terms and conditions")}</a
									>
								</li>
							</ul>
						{/if}
						<!-- OGL -->
						<div class="ons-footer__license ons-u-mb-l">
							<svg
								class="ons-footer__ogl-img"
								xmlns="http://www.w3.org/2000/svg"
								width="50px"
								height="20px"
								viewBox="0 0 60 24"
								focusable="false"
								aria-hidden="true"
								role="img"
							>
								<title>Open Government License logo</title>
								<path
									d="M51.7,17.5V0l-6.2,4v19.8h13.8v-6.2H51.7z M36.7,16.3c-1,0.9-2.4,1.4-3.8,1.4c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8c2,0,3.9,1.1,4.9,2.7L43,5.6C40.9,2.2,37.1,0,32.9,0c-4.5,0-8.4,2.5-10.4,6.1C20.4,2.5,16.5,0,12,0C5.4,0,0,5.4,0,12s5.4,12,12,12c4.5,0,8.4-2.5,10.4-6.1c2.1,3.6,6,6.1,10.4,6.1c3,0,5.8-1.1,7.9-3l2.4,2.7h0.4V13h-9.8L36.7,16.3zM12,17.8c-3.2,0-5.8-2.6-5.8-5.8S8.8,6.2,12,6.2s5.8,2.6,5.8,5.8S15.2,17.8,12,17.8"
									fill="var(--ons-color-text-light)"
								></path>
							</svg>
							{i18n("All content is available under the")}
							<a
								href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
								class="ons-external-link"
								target="_blank"
								rel="noopener"
							>
								<span class="ons-external-link__text">{i18n("Open Government Licence v3.0")}</span
								><span class="ons-external-link__icon"
									>&nbsp;<svg
										class="ons-icon"
										viewBox="0 0 12 12"
										xmlns="http://www.w3.org/2000/svg"
										focusable="false"
										aria-hidden="true"
										role="img"
										title="ons-icon-external-link"
									>
										<path
											d="M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z"
											transform="translate(-2 -1.99)"
										></path>
										<path
											d="M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z"
											transform="translate(-2 -1.99)"
										></path>
									</svg></span
								><span class="ons-external-link__new-window-description ons-u-vh"
									>({i18n("opens in a new tab")})</span
								></a
							>
							, {i18n("except where otherwise stated")}
						</div>

						<div
							class="ons-footer__logo-container ons-u-mb-l ons-grid-flex ons-grid-flex--vertical-top"
						>
							<a class="ons-footer__logo-link" href={baseurl}>
								<svg
									class="ons-icon--logo"
									xmlns="http://www.w3.org/2000/svg"
									width="250"
									height="24"
									viewBox="33 2 552 60"
									aria-labelledby="ons-logo-en-footer-alt"
									role="img"
								>
									<title id="ons-logo-en-footer-alt">
										{i18n("Office for National Statistics")}
									</title>
									<g class="ons-icon--logo__group ons-icon--logo__group--secondary" fill="#a8bd3a">
										<path
											d="M0,34.6c.8-1.69,1.39-3,2.32-4.6A38.28,38.28,0,0,1,0,23.4V34.6M5,3S0,3,0,9.25v1A62.12,62.12,0,0,0,4.2,27a43.77,43.77,0,0,1,9.42-10.79C21.69,9.21,31.16,5.13,45.9,3Z"
										></path>
									</g>
									<g class="ons-icon--logo__group ons-icon--logo__group--primary" fill="#003c57">
										<path
											d="M53.06,6.42C36.2,8,24.68,12.92,16.43,20.07A41.46,41.46,0,0,0,6.4,32.2C12.87,44.93,28.88,57,46.6,57H47s6.32.21,6.32-6.91V6.36a1.22,1.22,0,0,1-.26.06M9.72,42.67a44.25,44.25,0,0,1-5-7.42A80.59,80.59,0,0,0,0,46.38V56.91L31.06,57c-9.83-3-15.74-7.64-21.34-14.3"
										></path>
									</g>
									<g class="ons-icon--logo__group ons-icon--logo__group--text" fill="#003c57">
										<path
											d="M82,47.49c-9.07,0-13.13-7.51-13.13-16.77S72.91,14,82,14s13.1,7.61,13.1,16.77S91.1,47.54,82,47.54m0-30.91c-6.69,0-9.07,7.33-9.07,14.05s2.16,13.9,9.07,13.9,9-7.28,9-13.9-2.34-14-9-14"
										></path>
										<path
											d="M106.36,23.81V46.88h-3.67V23.81H98.93V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"
										></path>
										<path
											d="M121.53,23.81V46.88h-3.67V23.81H114.1V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"
										></path>
										<path
											d="M132.85,16.72a2.28,2.28,0,0,1-2.33-2.23v0a2.34,2.34,0,0,1,4.67,0,2.28,2.28,0,0,1-2.3,2.26h0M131,21.56h3.71V46.88H131Z"
										></path>
										<path
											d="M150.53,47.49c-6,0-10.63-5.16-10.63-13.29S144.52,21,150.66,21a9.76,9.76,0,0,1,6.17,1.74l-1,2.25a7.53,7.53,0,0,0-4.4-1.36c-5.15,0-7.78,4.46-7.78,10.48,0,6.2,3,10.62,7.65,10.62a8,8,0,0,0,4.49-1.37l1,2.45a10.21,10.21,0,0,1-6.3,1.73"
										></path>
										<path
											d="M162.84,35.75c.48,6,3.76,9,8.9,9a14.66,14.66,0,0,0,6.88-1.55l1.08,2.59a18,18,0,0,1-8.22,1.73c-7.12,0-12.18-4.23-12.18-13.34,0-8.69,4.67-13.2,11-13.2s10.37,3.95,10.37,12.4Zm7.35-12.41c-4.1,0-7.56,3.2-7.52,10.29l14.39-2c0-5.87-2.81-8.32-6.87-8.32"
										></path>
										<path
											d="M198.57,23.81V46.88H194.9V23.81h-3.76V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.39,0,.87.05.87.05v2.35h-.44c-2.54,0-4.84,1.64-4.84,5.12v4.09h5.28v2.25Z"
										></path>
										<path
											d="M217.28,47.49c-7.47,0-10.89-5.78-10.89-13.24S209.81,21,217.28,21s10.85,5.82,10.85,13.3-3.37,13.24-10.85,13.24m0-24c-5.53,0-7.13,5.59-7.13,10.81s1.73,10.56,7.13,10.56,7.13-5.35,7.13-10.56-1.6-10.81-7.13-10.81"
										></path>
										<path
											d="M244.08,23.91c-2.34-.61-5.75-.52-7.35.47v22.5H233V22.69c2.67-1.13,5.36-1.74,10.11-1.74H245Z"
										></path>
										<path
											d="M277.42,47.13,263.07,25a32.2,32.2,0,0,1-1.85-3.29h-.09s.13,1.88.13,3.85V47.13h-4.71V14.8h5.31l13.61,20.82A28.76,28.76,0,0,1,277.38,39h.08s-.17-1.84-.17-3.77V14.8H282V47.13Z"
										></path>
										<path
											d="M297.52,47.79c-7.43,0-10.93-3-10.93-7.81,0-6.8,7.12-8.64,15.59-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L288.23,23a24,24,0,0,1,9.12-1.83c5.61,0,9.93,2.3,9.93,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.26.67-10.45,1.84-10.45,6.73,0,3.42,2.42,4.88,6.22,4.88a10.09,10.09,0,0,0,4.23-.84Z"
										></path>
										<path
											d="M322,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.55V21.81h3.55V16.12l5.4-1.5v7.19H325v3.28h-5V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"
										></path>
										<path
											d="M331.91,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"
										></path>
										<path
											d="M350.88,47.79c-7.73,0-11.57-5.74-11.57-13.3s3.84-13.34,11.57-13.34,11.54,5.78,11.54,13.34-3.8,13.3-11.54,13.3m0-23.17c-4.66,0-6.05,4.89-6.05,9.82s1.47,9.63,6.05,9.63,6.05-4.7,6.05-9.63-1.38-9.82-6.05-9.82"
										></path>
										<path
											d="M382.52,47.13V29c0-3.24-2.77-4.47-5.88-4.47a12.3,12.3,0,0,0-4.37.76v21.8h-5.39V23a26.81,26.81,0,0,1,10.06-1.83c6.61,0,11,2.25,11,7.8V47.13Z"
										></path>
										<path
											d="M403.18,47.79c-7.43,0-10.94-3-10.94-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L393.89,23A24,24,0,0,1,403,21.15c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.43,4.88,6.23,4.88a10.09,10.09,0,0,0,4.23-.84Z"
										></path>
										<polygon
											points="418.52 47.13 418.52 34.91 418.52 10.25 423.92 10.25 423.92 22.76 423.92 47.13 418.52 47.13"
										></polygon>
										<path
											d="M445.39,47.79A19.11,19.11,0,0,1,436.58,46l1.51-4a13.48,13.48,0,0,0,6.22,1.55c3.76,0,6.44-2.21,6.44-5.41,0-7.09-13.44-4.36-13.44-14.42,0-5.13,4.15-9.59,10.72-9.59A15.82,15.82,0,0,1,455.8,16l-1.38,3.52a11.93,11.93,0,0,0-5.66-1.5c-3.5,0-5.79,2.11-5.79,5.12,0,7,13.74,3.94,13.74,14.65,0,5.74-4.71,10-11.32,10"
										></path>
										<path
											d="M470.41,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.12,5.12,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"
										></path>
										<path
											d="M487.27,47.79c-7.44,0-10.93-3-10.93-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.38-4.51-5.84-4.51a18,18,0,0,0-6.87,1.46L478,23a23.94,23.94,0,0,1,9.11-1.83c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83M492,33.16c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.42,4.88,6.22,4.88a10,10,0,0,0,4.24-.84Z"
										></path>
										<path
											d="M511.73,47.69c-5.32,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"
										></path>
										<path
											d="M521.66,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.45V47.13h-5.45Z"
										></path>
										<path
											d="M536.19,47.79A15.9,15.9,0,0,1,528.54,46L530,42.48a10.53,10.53,0,0,0,5.52,1.5c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.86-7.42A13.56,13.56,0,0,1,545.34,23l-1.42,3.14a8.47,8.47,0,0,0-4.62-1.45c-2.81,0-4.54,1.69-4.54,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"
										></path>
										<path
											d="M559.83,47.69c-5.31,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.93v3.28h-4.93V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.64,5.64,0,0,0,1.47-.23v3.33a7.72,7.72,0,0,1-3,.52"
										></path>
										<path
											d="M569.77,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"
										></path>
										<path
											d="M588.14,47.79c-6.23,0-11-5.08-11-13.35s4.88-13.29,11-13.29A10.51,10.51,0,0,1,594.66,23l-1.21,3a6.87,6.87,0,0,0-4-1.22c-4.4,0-6.69,3.81-6.69,9.49s2.63,9.59,6.61,9.59a6.74,6.74,0,0,0,4-1.28L594.7,46c-1.12.94-3.33,1.84-6.56,1.84"
										></path>
										<path
											d="M605.1,47.79A15.9,15.9,0,0,1,597.45,46l1.42-3.47A10.54,10.54,0,0,0,604.4,44c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.85-7.42a13.49,13.49,0,0,1,7.1,1.83l-1.42,3.14a8.42,8.42,0,0,0-4.63-1.45c-2.8,0-4.53,1.69-4.53,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"
										></path>
									</g>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</Theme>

<style>
	/* Reassignment of variables for theming */
	.ons-footer .ons-icon,
	.ons-footer .ons-icon--logo__group {
		fill: var(--ons-color-text) !important;
	}
</style>
