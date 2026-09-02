import { useSearchParams } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { ContactForm } from '../components/ContactForm';
import { RouteMeta } from '../components/RouteMeta';
import { ctaLinks, siteContent } from '../data/siteContent';
import { profile } from '../data/profile';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const focus = searchParams.get('focus') === 'controls' ? 'controls' : 'web';

  return (
    <>
      <RouteMeta
        title="Contact | Tre Humphries"
        description="Contact Tre Humphries for a project call or controls consultation."
      />

      <section className="px-4 pb-10 pt-8 md:px-6 lg:px-8 lg:pb-14 lg:pt-12 xl:px-12">
        <div className="page-wrap grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
          <div className="grid gap-4">
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">Contact</p>
            <h1 className="m-0 max-w-[9ch] text-[clamp(3rem,7vw,5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-carbon">
              {siteContent.contact.title}
            </h1>
          </div>
          <p className="m-0 max-w-[40rem] text-[1.04rem] leading-relaxed text-carbon/72">
            {siteContent.contact.intro}
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-4 lg:grid-cols-2">
          <div
            className={`grid gap-4 rounded-[1.8rem] border p-5 shadow-[0_18px_50px_rgba(24,34,45,0.05)] ${
              focus === 'web' ? 'border-cobalt bg-white' : 'border-carbon/10 bg-paper'
            }`}
          >
            <div className="grid gap-2">
              <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-carbon/44">Web & Digital</p>
              <h2 className="m-0 text-[1.65rem] font-semibold leading-[0.98] tracking-[-0.04em] text-carbon">
                {ctaLinks.web.label}
              </h2>
              <p className="m-0 text-[1rem] leading-relaxed text-carbon/72">{siteContent.contact.webNote}</p>
            </div>
            <ButtonLink href="/contact?focus=web" variant={focus === 'web' ? 'primary' : 'secondary'}>
              {ctaLinks.web.label}
            </ButtonLink>
          </div>

          <div
            className={`grid gap-4 rounded-[1.8rem] border p-5 shadow-[0_18px_50px_rgba(24,34,45,0.05)] ${
              focus === 'controls' ? 'border-cobalt bg-white' : 'border-carbon/10 bg-paper'
            }`}
          >
            <div className="grid gap-2">
              <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-carbon/44">
                Controls Engineering
              </p>
              <h2 className="m-0 text-[1.65rem] font-semibold leading-[0.98] tracking-[-0.04em] text-carbon">
                {ctaLinks.controls.label}
              </h2>
              <p className="m-0 text-[1rem] leading-relaxed text-carbon/72">{siteContent.contact.controlsNote}</p>
            </div>
            <ButtonLink href="/contact?focus=controls" variant={focus === 'controls' ? 'primary' : 'secondary'}>
              {ctaLinks.controls.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-2 md:px-6 lg:px-8 lg:pb-18 xl:px-12">
        <div className="content-wrap grid gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(20rem,0.94fr)] lg:items-start">
          <ContactForm
            audience={focus}
            email={profile.brand.email}
            helper={focus === 'web' ? siteContent.contact.formHelper.web : siteContent.contact.formHelper.controls}
          />

          <aside className="grid gap-4 rounded-[1.8rem] border border-carbon/10 bg-paper p-5">
            <div className="grid gap-2">
              <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-carbon/44">Direct</p>
              <h2 className="m-0 text-[1.5rem] font-semibold leading-[0.98] tracking-[-0.04em] text-carbon">
                Reach Tre directly
              </h2>
            </div>

            <div className="grid gap-3">
              {profile.contact.methods.map((method) => (
                <a
                  key={method.href}
                  className="rounded-[1.2rem] border border-carbon/10 bg-white px-4 py-4 transition-colors duration-200 hover:border-cobalt/28"
                  href={method.href}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                >
                  <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-carbon/44">
                    {method.label}
                  </p>
                  <p className="m-0 pt-1 text-[0.98rem] leading-relaxed text-carbon">{method.value}</p>
                </a>
              ))}
            </div>

            <div className="rounded-[1.2rem] border border-carbon/10 bg-white px-4 py-4">
              <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-carbon/44">Location</p>
              <p className="m-0 pt-1 text-[0.98rem] leading-relaxed text-carbon/72">{profile.brand.location}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
