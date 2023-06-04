import { a as jsx, j as jsxs } from "../ssr.js";
import { Link } from "@inertiajs/react";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function ProjectCard({ title }) {
  return /* @__PURE__ */ jsx("div", { className: "border border-2 shadow-lg rounded-lg py-20", children: title });
}
function Landing() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "w-full bg-gray-500  opacity-90 h-20 flex justify-between ", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-30/6 xl:w-full  h-full flex items-center px-4 ", children: /* @__PURE__ */ jsx("img", { className: "rounded-lg w-32", src: "/assets/images/logo.png", alt: "addify logo" }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full  h-full flex justify-end items-center", children: [
        /* @__PURE__ */ jsx("a", { href: "https://twitter.com/sahilnetic", children: /* @__PURE__ */ jsxs("button", { className: "relative w-7 h-7 mr-2 focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center", children: [
          /* @__PURE__ */ jsx("svg", { fill: "white", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" }) }),
          "            "
        ] }) }),
        " "
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("aside", { className: "relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto", children: [
        /* @__PURE__ */ jsx("span", { className: "sm:block text-4xl", children: "I am" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold sm:text-5xl", children: "Programmer" }),
        /* @__PURE__ */ jsx("a", { className: "mx-3 inline-flex text-white items-center px-6 py-3 font-medium bg-teal-500 rounded-lg hover:opacity-75", href: "https://twitter.com/sahilnetic", children: "   Download CV" }),
        /* @__PURE__ */ jsx("a", { className: "mx-3 inline-flex text-white items-center px-6 py-3 font-medium bg-green-500 rounded-lg hover:opacity-75", href: "https://twitter.com/sahilnetic", children: "   Hire me" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ", children: /* @__PURE__ */ jsx("img", { className: "w-96", src: "https://i.ibb.co/5BCcDYB/Remote2.png" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid  place-items-center sm:mt-20", children: /* @__PURE__ */ jsx("img", { className: "sm:w-96 w-48", src: "https://i.ibb.co/2M7rtLk/Remote1.png" }) }),
    /* @__PURE__ */ jsx("h1", { className: "text-center text-2xl sm:text-5xl py-10 font-medium", children: "Sample Projects" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10", children: /* @__PURE__ */ jsx(ProjectCard, { title: "Project 1" }) }),
    /* @__PURE__ */ jsx("footer", { className: "text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-center py-5", children: [
      "Crafted with ❤️ by ",
      /* @__PURE__ */ jsx("span", { className: "font-black", children: /* @__PURE__ */ jsx(Link, { href: "https://twitter.com/sahilnetic", children: "@sahilnetic" }) })
    ] }) }),
    /* @__PURE__ */ jsx("script", { "data-name": "BMC-Widget", "data-cfasync": "false", src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js", "data-id": "sahilnetic", "data-description": "Support me on Buy me a coffee!", "data-message": "", "data-color": "#FFDD00", "data-position": "Right", "data-x_margin": "18", "data-y_margin": "18" })
  ] }) });
}
export {
  Landing as default
};
