import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { RouteMeta } from '../components/RouteMeta';
import { profile } from '../data/profile';

const pageWrap = 'page-wrap';
const contentWrap = 'content-wrap';
const kicker = 'editorial-kicker';
const actionLink = 'editorial-link';

export function AboutPage() {
  return (
    <>
      <RouteMeta
        title="About | Tre Humphries"
        description="Background, current work, and contact information for Tre Humphries, a whole-system engineer working across controls, hardware, software, and operations."
      />

      <section className="border-b border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 lg:py-18 xl:px-12 xl:py-20">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end`}>
          <div className="grid gap-4">
            <p className={kicker}>About</p>
            <h1 className="page-title max-w-[8ch] text-[clamp(3.8rem,10vw,6.4rem)]">
              Whole-System Engineer
            </h1>
          </div>
          <div className="grid gap-4">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-copy max-w-[42rem]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start`}>
          <div className="grid gap-4">
            <div className="overflow-hidden bg-carbon/4">
              <div className="aspect-[4/5]">
                <img
                  className="h-full w-full object-cover object-[62%_42%]"
                  src={profile.contact.image.src}
                  alt={profile.contact.image.alt}
                  loading="lazy"
                />
              </div>
            </div>
            <p className="m-0 text-[0.82rem] leading-relaxed text-carbon/48">
              Field context and machine-side work.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="grid gap-3 border-t border-carbon/10 pt-4">
              <h2 className="m-0 text-[1.3rem] font-semibold tracking-[-0.03em] text-carbon">Background</h2>
              <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/68">
                Mechanical engineering is the formal background, but the work kept expanding into controls,
                software, embedded behavior, field troubleshooting, operator workflows, and the systems
                around the system.
              </p>
            </div>
            <div className="grid gap-3 border-t border-carbon/10 pt-4">
              <h2 className="m-0 text-[1.3rem] font-semibold tracking-[-0.03em] text-carbon">Current independent work</h2>
              <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/68">
                Current independent work ranges from web delivery to experimental controls and hardware
                projects. The common thread is still the same: build something real, understand the
                operating context, and leave behind something usable.
              </p>
            </div>
            <div className="grid gap-3 border-t border-carbon/10 pt-4">
              <h2 className="m-0 text-[1.3rem] font-semibold tracking-[-0.03em] text-carbon">Useful links</h2>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a className={actionLink} href={profile.site.cvUrl}>
                  CV
                </a>
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.href}
                    className={actionLink}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
                <Link className={actionLink} to="/index">
                  The Index
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-carbon/10 bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start`}>
          <div className="grid gap-4">
            <h2 className="section-title max-w-[8ch] text-[clamp(2.2rem,4vw,3.4rem)]">
              {profile.contact.title}
            </h2>
            <p className="support-copy max-w-[30rem]">{profile.contact.intro}</p>
            <div className="grid gap-2 border-t border-carbon/10 pt-4">
              <p className="m-0 text-[0.84rem] font-medium tracking-[0.01em] text-carbon/56">Location</p>
              <p className="m-0 text-sm text-carbon/66">{profile.brand.location}</p>
            </div>
            <div className="grid gap-2 border-t border-carbon/10 pt-4">
              <p className="m-0 text-[0.84rem] font-medium tracking-[0.01em] text-carbon/56">Direct contact</p>
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

          <div className="border-t border-carbon/10 pt-4">
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
