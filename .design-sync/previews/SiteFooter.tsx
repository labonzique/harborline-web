import { SiteFooter } from "harborline-systems";

// The site-wide footer: brand blurb + contact email, the Navigate and Services
// link columns, the Greater Philadelphia service-area note, and the copyright
// bar. Self-sufficient — pulls its links and copy from lib/site and content.
export function Default() {
  return <SiteFooter />;
}
