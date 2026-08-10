import { Link } from 'react-router-dom';
import { ProjectHeroMedia } from '../components/ProjectHeroMedia';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { projects } from '../data/projects';

const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.22em]';
const display = 'font-display uppercase leading-[0.9] tracking-[0.04em]';

export function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter((project) => project.slug !== featuredProject.slug);

  return (
    <>
      <RouteMeta
        title="Engineering Projects | Tre Humphries"
        description="Independent engineering projects and experimental R&D across embedded systems, flight, and physical process tooling."
      />

      <section id="top" className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-18">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div className="grid gap-5">
            <SystemRail label="Projects" index="01" labelClassName="text-steel" />
            <h1 className={`${display} max-w-[10ch] text-[clamp(3.3rem,9vw,6.8rem)] text-bone`}>
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

      <section className="bg-carbon px-4 pb-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:pb-18">
        <div className="mx-auto grid max-w-[1700px] gap-8 border-t border-active/24 pt-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(22rem,0.82fr)] lg:items-start">
          <div className="grid gap-6">
            <p className={`${mono} text-active`}>
              {featuredProject.status} / Project {featuredProject.number} / {featuredProject.seekingSupport}
            </p>
            <h2 className={`${display} max-w-[10ch] text-[clamp(3rem,8vw,6.2rem)] text-bone`}>
              {featuredProject.title}
            </h2>
            <p className="m-0 max-w-[44rem] text-[1.05rem] leading-relaxed text-steel">
              {featuredProject.summary}
            </p>
            <div className="grid gap-3 border-l-4 border-l-active pl-5">
              <p className="m-0 text-base leading-relaxed text-steel">{featuredProject.currentStage}</p>
              <p className={`${mono} text-cobalt`}>{featuredProject.tags.join(' / ')}</p>
            </div>
            <Link className={`${mono} text-bone transition-colors duration-200 hover:text-active`} to={`/projects/${featuredProject.slug}`}>
              Open project
            </Link>
          </div>

          <div className="grid gap-5 border-t border-bone/10 pt-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
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
        <section className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
          <div className="mx-auto grid max-w-[1700px] gap-8">
            {otherProjects.map((project, index) => (
              <article
                key={project.slug}
                className="grid gap-8 border-t border-carbon/12 pt-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start"
              >
                <div className="grid gap-4">
                  <SystemRail label={`${project.status} / Project ${project.number}`} index={`0${index + 2}`} labelClassName="text-carbon/66" />
                  <h2 className={`${display} max-w-[10ch] text-[clamp(2.5rem,6vw,4.8rem)] text-carbon`}>
                    {project.title}
                  </h2>
                  <p className="m-0 max-w-[30rem] text-base leading-relaxed text-carbon/74">{project.summary}</p>
                  <p className={`${mono} text-carbon/50`}>Archive / quieter record</p>
                </div>

                <div className="grid gap-5">
                  {project.heroMediaType ? (
                    <ProjectHeroMedia project={project} loading="lazy" />
                  ) : null}
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                    <p className="m-0 text-sm leading-relaxed text-carbon/72">{project.currentStage}</p>
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
