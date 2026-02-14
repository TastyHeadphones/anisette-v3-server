import { Container } from "@cloudflare/containers";

export class AnisetteContainer extends Container {
  defaultPort = 6969;
  sleepAfter = "10m";
}

export default {
  async fetch(request, env) {
    // Single container instance so the server keeps a stable device identity while running.
    const container = env.ANISETTE.getByName("main");
    return container.fetch(request);
  },
};

