import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location =>location.pathname =='/'//["/"],
});

registerApplication({
  name: "@nyp1013/vue",
  app: () => System.import("@nyp1013/vue"),
  activeWhen:  location =>location.pathname =='/vue'
});

registerApplication({
  name: "@nyp1013/react",
  app: () => System.import("@nyp1013/react"),
  activeWhen:  location =>location.pathname =='/react'
});

registerApplication({
  name: "@nyp1013/vue3",
  app: () => System.import("@nyp1013/vue3"),
  activeWhen:  location =>location.pathname =='/vue3'
});

start({
  urlRerouteOnly: true,
});
