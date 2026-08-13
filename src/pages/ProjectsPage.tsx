import { Link } from 'react-router-dom';
import { ProjectHeroMedia } from '../components/ProjectHeroMedia';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { projects } from '../data/projects';

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const mono = 'font-mono text-[0.68rem] uppercase tracking-[0.18em]';
const heroDisplay = 'font-display leading-[0.92] tracking-[-0.03em]';
const recordTitle = 'text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold tracking-[-0.03em]';

export function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter((project) => project.slug !== featuredProject.slug);

  return (
    <>
      <RouteMeta
        title="Engineering Projects | Tre Humphries"
        description="Independent engineering projects and experimental R&D across embedded systems, flight, and physical process tooling."
      />

      <section id="top" className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-end`}>
          <div className="grid gap-4">
            <SystemRail label="Projects" index="01" labelClassName="text-steel" />
            <h1 className={`${heroDisplay} max-w-[10ch] text-[clamp(3rem,7vw,5.4rem)] text-bone`}>
              Independent technical work built out of curiosity.
            </h1>
          </div>
          <div className="grid gap-4 lg:max-w-[44rem]">
            <p className="m-0 text-[1.04rem] leading-relaxed text-steel">
              Projects are separate from professional employment and separate from client work.
            </p>
            <p className="m-0 text-base leading-relaxed text-steel">
              They are where experiments, active builds, field notes, and useful overlaps with
              collaborators or spaces can live without being mistaken for consulting offers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-carbon px-4 pb-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:pb-16">
        <div className={`${contentWrap} grid gap-8 border-t border-bone/10 pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.9fr)] lg:items-start`}>
          <div className="grid gap-4">
            <SystemRail
              label={`${featuredProject.status} / Project ${featuredProject.number}`}
              labelClassName="text-active"
              lineClassName="bg-active"
            />
            <p className={`${mono} text-active`}>{featuredProject.seekingSupport}</p>
            <h2 className={`${recordTitle} text-bone`}>{featuredProject.title}</h2>
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-steel">
              {featuredProject.summary}
            </p>
            <p className="m-0 max-w-[40rem] text-sm leading-relaxed text-steel">
              {featuredProject.currentStage}
            </p>
            <p className={`${mono} text-cobalt`}>{featuredProject.tags.join(' / ')}</p>
            <Link className={`${mono} text-bone transition-colors duration-200 hover:text-active`} to={`/projects/${featuredProject.slug}`}>
              Open project
            </Link>
          </div>

          <div className="grid gap-4 border border-bone/10 bg-bone/5 px-5 py-6 md:px-7 md:py-7">
            <p className={`${mono} text-active`}>Current engineering focus</p>
            {featuredProject.currentWork.map((item) => (
              <p key={item} className="m-0 text-sm leading-relaxed text-steel">
                {item}
              </p>
            ))}
            <div className="grid gap-2 border-t border-bone/10 pt-4">
              <p className={`${mono} text-steel`}>Looking for</p>
              {featuredProject.lookingFor.map((item) => (
                <p key={item} className="m-0 text-sm leading-relaxed text-steel">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {otherProjects.length > 0 ? (
        <section className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
          <div className={`${contentWrap} grid gap-8`}>
            {otherProjects.map((project, index) => (
              <article
                key={project.slug}
                className="grid gap-8 border-t border-carbon/12 pt-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start"
              >
                <div className="grid gap-4">
                  <SystemRail label={`${project.status} / Project ${project.number}`} index={`0${index + 2}`} labelClassName="text-carbon/62" />
                  <h2 className={`${recordTitle} text-carbon`}>{project.title}</h2>
                  <p className="m-0 max-w-[30rem] text-base leading-relaxed text-carbon/74">{project.summary}</p>
                  <p className={`${mono} text-carbon/50`}>Archive / quieter record</p>
                </div>

                <div className="grid gap-5">
                  {project.heroMediaType ? (
                    <ProjectHeroMedia project={project} loading="lazy" />
                  ) : null}
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                    <p className="m-0 max-w-[34rem] text-sm leading-relaxed text-carbon/72">{project.currentStage}</p>
                    <Link className={`${mono} text-carbon transition-colors duration-200 hover:text-cobalt`} to={`/projects/${project.slug}`}>
                      Read project
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
