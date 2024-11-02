import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_uuybvppI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content=" Portfolio "><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/maverick/Desktop/temp_blog/new/KunalMaverick.github.io/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Profile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const { name, imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="profile" data-astro-cid-b3uuc2c6> <img${addAttribute(imageUrl, "src")}${addAttribute(name, "alt")} class="profile-image" data-astro-cid-b3uuc2c6> <h1 class="name" data-astro-cid-b3uuc2c6>${name}</h1> </div> `;
}, "/Users/maverick/Desktop/temp_blog/new/KunalMaverick.github.io/src/components/Profile.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const sections = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Posts", href: "#posts" },
    { name: "Publications", href: "#publications" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="navigation" data-astro-cid-pux6a34n> <ul class="nav-links" data-astro-cid-pux6a34n> ${sections.map((section) => renderTemplate`<li data-astro-cid-pux6a34n> <a${addAttribute(section.href, "href")} class="nav-link" data-astro-cid-pux6a34n>${section.name}</a> </li>`)} <li data-astro-cid-pux6a34n> <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme" data-astro-cid-pux6a34n> <i class="fas fa-moon" data-astro-cid-pux6a34n></i> </button> </li> </ul> </nav>  `;
}, "/Users/maverick/Desktop/temp_blog/new/KunalMaverick.github.io/src/components/Navigation.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const SocialLinks2 = [
    {
      platform: "GitHub",
      url: "https://github.com/KunalMaverick",
      icon: "fa-brands fa-github"
    },
    {
      platform: "Twitter",
      url: "https://x.com/DeVere_Maverick",
      icon: "fa-brands fa-x-twitter"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kunal-kishore-716a83176/",
      icon: "fa-brands fa-linkedin"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kunal Kishore", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Profile", $$Profile, { "name": "Kunal Kishore", "imageUrl": "https://placekitten.com/200/200", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SocialLinks", SocialLinks2, { "links": socialLinks, "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/Users/maverick/Desktop/temp_blog/new/KunalMaverick.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/maverick/Desktop/temp_blog/new/KunalMaverick.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
