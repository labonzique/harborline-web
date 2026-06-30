import { ContactForm } from "harborline-systems";

// The full /contact form, self-contained: contact fields, the service-need /
// interest / budget / timeline chip groups, the message box, and the submit
// row. All labels and options come from the site's content files.
export function Default() {
  return (
    <div className="mx-auto max-w-2xl">
      <ContactForm />
    </div>
  );
}
