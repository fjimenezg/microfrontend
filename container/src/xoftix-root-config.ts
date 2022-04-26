import { registerApplication, start } from "single-spa";



registerApplication({
  name: "@xoftix/mf-header",
  app: () => System.import("@xoftix/mf-header"),
  activeWhen: ["/"]
});


registerApplication({
  name: "@xoftix/mf-main",
  app: () => System.import("@xoftix/mf-main"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@xoftix/mf-otro",
  app: () => System.import("@xoftix/mf-otro"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
