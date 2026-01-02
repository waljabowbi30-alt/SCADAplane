// Default values
const DEFAULT_SITE_NAME = "Plane | Simple, extensible, open-source project management tool.";
const DEFAULT_SITE_TITLE = "Plane | Simple, extensible, open-source project management tool.";
const DEFAULT_SITE_DESCRIPTION =
  "Open-source project management tool to manage work items, cycles, and product roadmaps easily";
const DEFAULT_SITE_KEYWORDS =
  "software development, plan, ship, software, accelerate, code management, release management, project management, work items tracking, agile, scrum, kanban, collaboration";
const DEFAULT_SITE_URL = "https://app.plane.so/";
const DEFAULT_TWITTER_USER_NAME = "Plane | Simple, extensible, open-source project management tool.";

// Helper to safely access env vars
const getEnv = (key: string) => {
  if (typeof process !== "undefined" && process.env) {
    return process.env[key];
  }
  // @ts-expect-error - import.meta is not defined in all environments
  if (typeof import.meta !== "undefined" && import.meta.env) {
    // @ts-expect-error - import.meta.env is not defined in all environments
    return import.meta.env[key];
  }
  return undefined;
};

export const SITE_NAME: string = getEnv("VITE_SITE_NAME") || getEnv("NEXT_PUBLIC_SITE_NAME") || DEFAULT_SITE_NAME;

export const SITE_TITLE: string = getEnv("VITE_SITE_TITLE") || getEnv("NEXT_PUBLIC_SITE_TITLE") || DEFAULT_SITE_TITLE;

export const SITE_DESCRIPTION: string =
  getEnv("VITE_SITE_DESCRIPTION") || getEnv("NEXT_PUBLIC_SITE_DESCRIPTION") || DEFAULT_SITE_DESCRIPTION;

export const SITE_KEYWORDS: string =
  getEnv("VITE_SITE_KEYWORDS") || getEnv("NEXT_PUBLIC_SITE_KEYWORDS") || DEFAULT_SITE_KEYWORDS;

export const SITE_URL: string = getEnv("VITE_SITE_URL") || getEnv("NEXT_PUBLIC_SITE_URL") || DEFAULT_SITE_URL;

export const TWITTER_USER_NAME: string =
  getEnv("VITE_TWITTER_USER_NAME") || getEnv("NEXT_PUBLIC_TWITTER_USER_NAME") || DEFAULT_TWITTER_USER_NAME;

// Plane Sites Metadata
export const SPACE_SITE_NAME = "Plane Publish | Make your Plane boards and roadmaps pubic with just one-click. ";
export const SPACE_SITE_TITLE = "Plane Publish | Make your Plane boards public with one-click";
export const SPACE_SITE_DESCRIPTION = "Plane Publish is a customer feedback management tool built on top of plane.so";
export const SPACE_SITE_KEYWORDS =
  "software development, customer feedback, software, accelerate, code management, release management, project management, work items tracking, agile, scrum, kanban, collaboration";
export const SPACE_SITE_URL = "https://app.plane.so/";
export const SPACE_TWITTER_USER_NAME = "planepowers";
