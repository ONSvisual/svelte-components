<script>
  import { onMount, getContext } from "svelte";
  import Theme from "../../wrappers/Theme/Theme.svelte";
  import ONSLogo from "./ONSLogo.svelte";
  import SkipLink from "../SkipLink/SkipLink.svelte";

  const page = getContext("page");

  /**
   * Display compact header without menus
   * @type {boolean}
   */
  export let compact = false;
  /**
   * Optional product title
   * @type {string}
   */
  export let title = "";
  /**
   * Optional link for product title
   * @type {string}
   */
  export let titleHref = "";
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"}
   */
  export let theme = null;
  /**
   * Define additional props to override the base theme
   * @type {object}
   */
  export let themeOverrides = null;
  /**
   * Set to true to include an English/Welsh language link
   * @type {boolean}
   */
  export let bilingual = true;
  /**
   * Set to false to disable skipLink (eg. if you need to move its location)
   * @type {boolean}
   */
  export let skipLinkEnabled = true;

  let lang = "en";
  let baseurl = "//www.ons.gov.uk";
  let baseother = "//cy.ons.gov.uk";
  let path = "";
  let mounted = false;

  function setPaths(mounted, page) {
    if (mounted) {
      const url = page?.url || document.location;
      lang = url.host.startsWith("cy") ? "cy" : "en";
      baseurl = lang === "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";
      baseother = lang === "cy" ? "//www.ons.gov.uk" : "//cy.ons.gov.uk";
      path = url.pathname;
    }
  }
  $: setPaths(mounted, $page);
  onMount(() => {
    mounted = true;

    /// Add keyboard event listeners
    const navItems = document.querySelectorAll(".js-nav");
    navItems.forEach((item) => {
      item.addEventListener("keydown", handleKeydown);
    });

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener("keydown", handleKeydown);
      });
    };
  });

  let menuExpanded = false;
  let searchExpanded = false;

  let menu = [
    {
      label_en: "Business, industry and trade",
      label_cy: "Busnes, diwydiant a masnach",
      url: "/businessindustryandtrade",
      expanded: false,
      children: [
        { label_en: "Business", label_cy: "Busnes", url: "/businessindustryandtrade/business" },
        {
          label_en: "Changes to business",
          label_cy: "Newidiadau i fusnesau",
          url: "/businessindustryandtrade/changestobusiness",
        },
        {
          label_en: "Construction industry",
          label_cy: "Diwydiant adeiladu",
          url: "/businessindustryandtrade/constructionindustry",
        },
        {
          label_en: "IT and internet industry",
          label_cy: "Y diwydiant TG a'r rhyngrwyd",
          url: "/businessindustryandtrade",
        },
        {
          label_en: "International trade",
          label_cy: "Masnach ryngwladol",
          url: "/businessindustryandtrade/itandinternetindustry",
        },
        {
          label_en: "Manufacturing and production industry",
          label_cy: "Y diwydiant gweithgynhyrchu a chynhyrchu",
          url: "/businessindustryandtrade/manufacturingandproductionindustry",
        },
        {
          label_en: "Retail industry",
          label_cy: "Y diwydiant manwerthu",
          url: "/businessindustryandtrade/retailindustry",
        },
        {
          label_en: "Tourism industry",
          label_cy: "Y diwydiant twristiaeth",
          url: "/businessindustryandtrade/tourismindustry",
        },
      ],
    },
    {
      label_en: "Economy",
      label_cy: "Yr economi",
      url: "/economy",
      expanded: false,
      children: [
        {
          label_en: "Economic output and productivity",
          label_cy: "Allgynnyrch economaidd a chynhyrchiant",
          url: "/economy/economicoutputandproductivity",
        },
        {
          label_en: "Environmental accounts",
          label_cy: "Cyfrifon amgylcheddol",
          url: "/economy/environmentalaccounts",
        },
        {
          label_en: "Government, public sector and taxes",
          label_cy: "Llywodraeth, y sector cyhoeddus a threthi",
          url: "/economy/governmentpublicsectorandtaxes",
        },
        {
          label_en: "Gross Domestic Product (GDP)",
          label_cy: "Cynnyrch Domestig Gros (CDG)",
          url: "/economy/grossdomesticproductgdp",
        },
        {
          label_en: "Gross Value Added (GVA)",
          label_cy: "Gwerth Ychwanegol Gros",
          url: "/economy/grossvalueaddedgva",
        },
        {
          label_en: "Inflation and price indices",
          label_cy: "Mynegeion chwyddiant a phrisiau",
          url: "/economy/inflationandpriceindices",
        },
        {
          label_en: "Investments, pensions and trusts",
          label_cy: "Buddsoddiadau, pensiynau ac ymddiriedolaethau",
          url: "/economy/investmentspensionsandtrusts",
        },
        {
          label_en: "National accounts",
          label_cy: "Cyfrifon gwladol",
          url: "/economy/nationalaccounts",
        },
        {
          label_en: "Regional accounts",
          label_cy: "Cyfrifon rhanbarthol",
          url: "/economy/regionalaccounts",
        },
      ],
    },
    {
      label_en: "Employment and labour market",
      label_cy: "Cyflogaeth a'r farchnad lafur",
      url: "/employmentandlabourmarket",
      expanded: false,
      children: [
        {
          label_en: "People in work",
          label_cy: "Pobl mewn gwaith",
          url: "/employmentandlabourmarket/peopleinwork",
        },
        {
          label_en: "People not in work",
          label_cy: "Pobl nad ydynt mewn gwaith",
          url: "/employmentandlabourmarket/peoplenotinwork",
        },
      ],
    },
    {
      label_en: "People, population and community",
      label_cy: "Pobl, y boblogaeth a chymunedau",
      url: "/peoplepopulationandcommunity",
      expanded: false,
      children: [
        {
          label_en: "Births, deaths and marriages",
          label_cy: "Genedigaethau, marwolaethau a phriodasau",
          url: "/peoplepopulationandcommunity/birthsdeathsandmarriages",
        },
        {
          label_en: "Crime and justice",
          label_cy: "Troseddu a chyfiawnder",
          url: "/peoplepopulationandcommunity/crimeandjustice",
        },
        {
          label_en: "Cultural identity",
          label_cy: "Hunaniaeth ddiwylliannol",
          url: "/peoplepopulationandcommunity/culturalidentity",
        },
        {
          label_en: "Education and childcare",
          label_cy: "Addysg a gofal plant",
          url: "/peoplepopulationandcommunity/educationandchildcare",
        },
        {
          label_en: "Elections",
          label_cy: "Etholiadau",
          url: "/peoplepopulationandcommunity/elections",
        },
        {
          label_en: "Health and social care",
          label_cy: "Iechyd a gofal cymdeithasol",
          url: "/peoplepopulationandcommunity/healthandsocialcare",
        },
        {
          label_en: "Household characteristics",
          label_cy: "Nodweddion aelwydydd",
          url: "/peoplepopulationandcommunity/householdcharacteristics",
        },
        { label_en: "Housing", label_cy: "Tai", url: "/peoplepopulationandcommunity/housing" },
        {
          label_en: "Leisure and tourism",
          label_cy: "Hamdden a thwristiaeth",
          url: "/peoplepopulationandcommunity/leisureandtourism",
        },
        {
          label_en: "Personal and household finances",
          label_cy: "Cyllid personol a chyllid aelwydydd",
          url: "/peoplepopulationandcommunity/personalandhouseholdfinances",
        },
        {
          label_en: "Population and migration",
          label_cy: "Poblogaeth ac ymfudo",
          url: "/peoplepopulationandcommunity/populationandmigration",
        },
        {
          label_en: "Well-being",
          label_cy: "Lles",
          url: "/peoplepopulationandcommunity/wellbeing",
        },
      ],
    },
    { label_en: "Taking part in a survey?", label_cy: "Cymryd rhan mewn arolwg?", url: "/surveys" },
    {
      label_en: "Release calendar",
      label_cy: "Calendar datganiadau",
      url: "/releasecalendar",
      secondary: true,
    },
    { label_en: "Methodology", label_cy: "Methodoleg", url: "/methodology", secondary: true },
    { label_en: "Media", label_cy: "Media", url: "/news", secondary: true },
    { label_en: "About", label_cy: "Amdanom ni", url: "/aboutus", secondary: true },
    { label_en: "Blog", label_cy: "Blog", url: "https://blog.ons.gov.uk/", secondary: true },
  ];

  const texts = {
    Home: "Hafan",
    Search: "Chwilio",
    Menu: "Dewislen",
    "Hide search": "Cuddio",
    "Office for National Statistics logo - Homepage": "Logo Swyddfa Ystadegau Gwladol - Hafan",
    "Search for a keyword(s) or time series ID": "Chwilio am allweddair neu ID cyfres amser",
  };

  const i18n = (text) => (lang === "cy" && texts[text] ? texts[text] : text);

  function toggle_sm(e, i) {
    if (window.matchMedia("(max-width:767px)").matches) {
      e.preventDefault();
      menu[i].expanded = !menu[i].expanded;
    }
  }

  function handleKeydown(event) {
    const target = event.currentTarget;
    // Find the currently focused expandable child link within the navigation item
    const focusedExpandableChild = target.querySelector(".js-expandable__child a:focus");

    // Find all child links in the current navigation item
    const childLinks = Array.from(target.querySelectorAll(".js-expandable__child a"));

    // Close any expanded items from mouse events
    const allExpandedItems = document.querySelectorAll(".js-expandable-active");
    allExpandedItems.forEach((item) => {
      if (item !== target) {
        item.classList.remove("js-expandable-active");
        const content = item.querySelector(".js-expandable__content");
        if (content) {
          content.classList.add("js-nav-hidden");
          content.setAttribute("aria-expanded", "false");
        }
      }
    });

    switch (event.key) {
      case "Tab":
        if (focusedExpandableChild) {
          target.classList.remove("primary-nav__item--focus");
        }
        break;

      case "Escape":
        event.preventDefault();
        target.classList.remove("primary-nav__item--focus");
        const firstNavLink = target.closest(".js-nav").querySelector("a:first-child");
        if (firstNavLink) {
          firstNavLink.classList.add("hide-children");
          firstNavLink.focus();
          firstNavLink.addEventListener(
            "focusout",
            () => {
              firstNavLink.classList.remove("hide-children");
            },
            { once: true }
          );
        }
        break;

      case "ArrowDown":
        event.preventDefault();
        if (!focusedExpandableChild) {
          // If no child is focused, focus the first child. Needs to start from 0 as first child is link to primary nav.
          const firstChild = childLinks[1];
          if (firstChild) {
            console.log("add focus");
            target.classList.add("primary-nav__item--focus");
            firstChild.focus({ focusVisible: true });
          }
        } else {
          // Find the current index and move to the next child
          const currentIndex = childLinks.indexOf(focusedExpandableChild);
          if (currentIndex < childLinks.length - 1) {
            childLinks[currentIndex + 1].focus();
          }
        }
        break;

      case "ArrowUp":
        event.preventDefault();

        if (focusedExpandableChild) {
          const currentIndex = childLinks.indexOf(focusedExpandableChild);
          if (currentIndex > 0) {
            // Move to previous child
            childLinks[currentIndex - 1].focus();
          } else {
            // If at first child, move focus back to main nav link
            target.classList.remove("primary-nav__item--focus");
            const mainLink = target.querySelector("a:first-child");
            if (mainLink) {
              mainLink.focus();
            }
          }
        }
        break;

      case "ArrowRight":
        event.preventDefault();
        target.classList.remove("primary-nav__item--focus");
        const nextNav = target.closest(".js-nav").nextElementSibling;
        if (nextNav) {
          const firstLink = nextNav.querySelector("a:first-child");
          if (firstLink) firstLink.focus();
        }
        break;

      case "ArrowLeft":
        event.preventDefault();
        target.classList.remove("primary-nav__item--focus");
        const prevNav = target.closest(".js-nav").previousElementSibling;
        if (prevNav) {
          const firstLink = prevNav.querySelector("a:first-child");
          if (firstLink) firstLink.focus();
        }
        break;
    }
  }
</script>

<header class="ons-header" role="banner">
  {#if skipLinkEnabled}
    <SkipLink />
  {/if}
  <slot name="before" />
  <Theme theme="{theme}" overrides="{themeOverrides}">
    {#if lang}
      <div id="pagePath" class="hide">{path}</div>
      {#if compact}
        <div
          class="ons-header__top"
          style:border-bottom="{!title ? "1px solid var(--ons-color-borders)" : null}"
        >
          <div class="ons-container">
            <div
              class="ons-header__grid-top ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap"
            >
              <div class="ons-grid__col ons-col-auto">
                <a class="ons-header__org-logo-link" href="{baseurl}/"
                  ><div class="ons-header__org-logo ons-header__org-logo--large">
                    <ONSLogo theme="{theme}" width="{197}" height="{19}" />
                  </div>
                  <div class="ons-header__org-logo ons-header__org-logo--small">
                    <ONSLogo theme="{theme}" width="{120}" height="{27}" compact />
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div class="wrapper">
          <div class="header col-wrap">
            <div class="col col--lg-one-third col--md-one-third">
              <a href="{baseurl}/">
                <ONSLogo theme="{theme}" className="logo" height="{39}" compact />
              </a>
            </div>
            <div
              class="col col--lg-two-thirds col--md-two-thirds hide--sm print--hide language--js__container"
            >
              <div class="language" style:min-height="20px">
                {#if bilingual && lang == "en"}
                  <span>English (EN) | </span>
                  <a href="{baseother}{path}" class="language__link" lang="cy">Cymraeg (CY)</a>
                {:else if bilingual}
                  <a href="{baseother}{path}" class="language__link" lang="en">English (EN)</a>
                  <span> | Cymraeg (EN)</span>
                {/if}
              </div>
            </div>
            <div class="secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide">
              <ul class="secondary-nav__list js-nav-clone__list">
                {#each menu.filter((d) => d.secondary) as item}
                  <li class="secondary-nav__item">
                    <a class="secondary-nav__link js-nav-clone__link" href="{baseurl}{item.url}"
                      >{item["label_" + lang]}</a
                    >
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
        <div class="primary-nav print--hide">
          <!-- Controls -->
          <nav aria-label="Header links">
            <ul class="nav--controls">
              <li class="nav--controls__item" class:menu-is-expanded="{menuExpanded}">
                <a
                  href="#nav-primary"
                  id="menu-toggle"
                  aria-controls="nav-primary"
                  aria-expanded="{menuExpanded}"
                  class="nav--controls__menu"
                  on:click|preventDefault="{() => {
                    menuExpanded = !menuExpanded;
                    searchExpanded = false;
                  }}"
                >
                  <span class="nav--controls__text">{i18n("Menu")}</span>
                </a>
              </li>
              <li class="nav--controls__item" class:search-is-expanded="{searchExpanded}">
                <a
                  href="#nav-search"
                  id="search-toggle"
                  aria-controls="nav-search"
                  aria-expanded="{searchExpanded}"
                  class="nav--controls__search"
                  on:click|preventDefault="{() => {
                    searchExpanded = !searchExpanded;
                    menuExpanded = false;
                  }}"
                >
                  <span class="nav--controls__text"
                    >{searchExpanded ? i18n("Hide search") : i18n("Search")}</span
                  >
                </a>
              </li>
            </ul>

            <!-- Main Navigation -->
            <ul
              class="wrapper primary-nav__list"
              class:nav-main--hidden="{!menuExpanded}"
              id="nav-primary"
              aria-expanded="{menuExpanded}"
            >
              <!-- Home Link -->
              <li class="primary-nav__item js-nav">
                <a
                  class="primary-nav__link col col--md-7 col--lg-9"
                  href="{baseurl}/"
                  style="color: #e5e6e7">{i18n("Home")}</a
                >
              </li>

              <!-- Menu Items -->
              {#each [...menu
                  .filter((d) => d.children)
                  .sort( (a, b) => a["label_" + lang].localeCompare(b["label_" + lang]) ), ...menu.filter((d) => !d.children)] as item, i}
                {#if item.children}
                  <li
                    class="primary-nav__item js-nav js-expandable"
                    class:js-expandable-active="{item.expanded}"
                  >
                    <a
                      class="primary-nav__link col col--md-8 col--lg-10"
                      href="{baseurl}{item.url}"
                      aria-expanded="false"
                      aria-label="{item['label_' + lang]} sub menu"
                      on:click="{(e) => toggle_sm(e, i)}"
                    >
                      <span aria-hidden="true" class="expansion-indicator"></span>
                      <span class="submenu-title">
                        {item[`label_${lang}`]}
                      </span>
                    </a>
                    <ul
                      class="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content jsEnhance"
                      class:js-nav-hidden="{!item.expanded}"
                      aria-expanded="{item.expanded}"
                      aria-label="submenu"
                    >
                      <li class="primary-nav__child-item js-expandable__child hide--md">
                        <a class="primary-nav__child-link" tabindex="-1" href="{baseurl}{item.url}"
                          >{item[`label_${lang}`]}</a
                        >
                      </li>
                      {#each [...item.children].sort( (a, b) => a[`label_${lang}`].localeCompare(b[`label_${lang}`]) ) as child}
                        <li class="primary-nav__child-item js-expandable__child">
                          <a
                            class="primary-nav__child-link"
                            tabindex="-1"
                            href="{baseurl}{child.url}">{child[`label_${lang}`]}</a
                          >
                        </li>
                      {/each}
                    </ul>
                  </li>
                {:else}
                  <li class="primary-nav__item js-nav" class:hide--md="{item.secondary}">
                    <a
                      class="primary-nav__link col col--md-8 col--lg-10"
                      href="{baseurl}{item.url}"
                    >
                      {item["label_" + lang]}
                    </a>
                  </li>
                {/if}
              {/each}

              <!-- Language Switcher -->
              <li class="hide--md primary-nav__language">
                {#if lang == "en"}
                  <span>English (EN) | </span>
                  <a href="{baseother}{path}" class="language__link" lang="cy">Cymraeg (CY)</a>
                {:else}
                  <a href="{baseother}{path}" class="language__link" lang="en">English (EN)</a>
                  <span> | Cymraeg (EN)</span>
                {/if}
              </li>
            </ul>
          </nav>
        </div>
        <div class="search print--hide" class:nav-search--hidden="{!searchExpanded}" id="searchBar">
          <div class="wrapper" role="search">
            <form class="col-wrap search__form" action="{baseurl}/search">
              <label class="search__label col col--md-23 col--lg-24" for="nav-search"
                >{i18n("Search for a keyword(s) or time series ID")}</label
              >
              <input
                type="search"
                autocomplete="off"
                class="search__input col col--md-21 col--lg-32"
                id="nav-search"
                name="q"
                value=""
              />
              <button
                type="submit"
                class="search__button col--md-3 col--lg-3"
                id="nav-search-submit"
                aria-label="{i18n('Search')}"
              >
                <span class="icon-search--light">
                  <svg
                    class="ons-svg-icon ons-svg-icon--m"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <path
                      d="M11.86 10.23 8.62 6.99a4.63 4.63 0 1 0-6.34 1.64 4.55 4.55 0 0 0 2.36.64 4.65 4.65 0 0 0 2.33-.65l3.24 3.23a.46.46 0 0
								0 .65 0l1-1a.48.48 0 0 0 0-.62Zm-5-3.32a3.28 3.28 0 0 1-2.31.93 3.22 3.22 0 1 1 2.35-.93Z"></path>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      {/if}
      {#if title}
        <div class="ons-header__main">
          <div class="ons-container">
            <div
              class="ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap"
            >
              <div class="ons-grid__col ons-col-auto ons-u-flex-shrink">
                <a class="ons-header__title-link" href="{titleHref}"
                  ><div class="ons-header__title">{title}</div></a
                >
              </div>
            </div>
          </div>
        </div>
      {/if}
    {/if}
  </Theme>
</header>

<style>
  .ons-header__top {
    background: none;
  }
</style>
