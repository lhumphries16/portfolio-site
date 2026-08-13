import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { RouteMeta } from '../components/RouteMeta';
import { profile } from '../data/profile';

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.18em]';
const actionLink =
  'inline-flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-200';

export function AboutPage() {
  return (
    <>
      <RouteMeta
        title="About | Tre Humphries"
        description="Background, current work, and contact information for Tre Humphries, a whole-system engineer working across controls, hardware, software, and operations."
      />

      <section className="border-b border-carbon/10 bg-bone px-4 py-10 text-carbon md:px-6 lg:px-8 lg:py-14 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end`}>
          <div className="grid gap-4">
            <p className={`${mono} text-carbon/52`}>About</p>
            <h1 className="m-0 max-w-[8ch] font-display text-[clamp(3.6rem,10vw,6.6rem)] uppercase leading-[0.92] tracking-[-0.04em] text-carbon">
              Whole-System Engineer
            </h1>
          </div>
          <div className="grid gap-4">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 max-w-[42rem] text-[1.02rem] leading-relaxed text-carbon/72">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start`}>
          <div className="grid gap-4">
            <div className="overflow-hidden border border-carbon/10 bg-carbon/4">
              <div className="aspect-[4/5]">
                <img
                  className="h-full w-full object-cover object-[62%_42%]"
                  src={profile.contact.image.src}
                  alt={profile.contact.image.alt}
                  loading="lazy"
                />
              </div>
            </div>
            <p className={`${mono} text-carbon/46`}>Field context and machine-side work</p>
          </div>

          <div className="grid gap-8">
            <div className="grid gap-3 border-t border-carbon/10 pt-4">
              <p className={`${mono} text-carbon/52`}>Background</p>
              <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/70">
                Mechanical engineering is the formal background, but the work kept expanding into controls,
                software, embedded behavior, field troubleshooting, operator workflows, and the systems
                around the system.
              </p>
            </div>
            <div className="grid gap-3 border-t border-carbon/10 pt-4">
              <p className={`${mono} text-carbon/52`}>Current Independent Work</p>
              <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/70">
                Current independent work ranges from web delivery to experimental controls and hardware
                projects. The common thread is still the same: build something real, understand the
                operating context, and leave behind something usable.
              </p>
            </div>
            <div className="grid gap-3 border-t border-carbon/10 pt-4">
              <p className={`${mono} text-carbon/52`}>Useful Links</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a className={`${actionLink} text-carbon hover:text-cobalt`} href={profile.site.cvUrl}>
                  CV
                </a>
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.href}
                    className={`${actionLink} text-carbon hover:text-cobalt`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
                <Link className={`${actionLink} text-carbon hover:text-cobalt`} to="/index">
                  The Index
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start`}>
          <div className="grid gap-4">
            <p className={`${mono} text-carbon/52`}>Contact</p>
            <h2 className="m-0 max-w-[8ch] text-[clamp(2.2rem,4vw,3.6rem)] font-semibold tracking-[-0.04em] text-carbon">
              {profile.contact.title}
            </h2>
            <p className="m-0 max-w-[30rem] text-base leading-relaxed text-carbon/70">
              {profile.contact.intro}
            </p>
            <div className="grid gap-2 border-t border-carbon/10 pt-4">
              <p className={`${mono} text-cobalt`}>Location</p>
              <p className="m-0 text-sm text-carbon/66">{profile.brand.location}</p>
            </div>
            <div className="grid gap-2 border-t border-carbon/10 pt-4">
              <p className={`${mono} text-cobalt`}>Direct Contact</p>
              <div className="grid gap-2">
                {profile.contact.methods.map((method) => (
                  <a
                    key={method.href}
                    className="text-sm text-carbon/66 transition-colors duration-200 hover:text-cobalt"
                    href={method.href}
                  >
                    {method.label}: {method.value}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-carbon/10 bg-white px-5 py-6 md:px-7 md:py-7">
            <ContactForm
              helper={profile.contact.helper}
              success={profile.contact.success}
              error={profile.contact.error}
              submitLabel={profile.contact.submitLabel}
              email={profile.brand.email}
            />
          </div>
        </div>
      </section>
    </>
  );
}
