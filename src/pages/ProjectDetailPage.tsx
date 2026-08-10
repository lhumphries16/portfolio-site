import { Link, useParams } from 'react-router-dom';
import { ProjectHeroMedia } from '../components/ProjectHeroMedia';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { getProjectBySlug } from '../data/projects';

const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.22em]';
const display = 'font-display uppercase leading-[0.9] tracking-[0.04em]';

function DetailList({ items, active = false }: { items: readonly string[]; active?: boolean }) {
  return (
    <ul className="m-0 grid list-none gap-3 p-0">
      {items.map((item) => (
        <li
          key={item}
          className={`grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 text-sm leading-relaxed ${
            active ? 'text-steel' : 'text-carbon/74'
          }`}
        >
          <span className={`mt-[0.72rem] h-px ${active ? 'bg-active' : 'bg-orange'}`} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <RouteMeta
          title="Project Not Found | Tre Humphries"
          description="The requested project route does not match a published project entry."
        />

        <section className="bg-bone px-4 py-16 text-carbon md:px-6 lg:px-8 xl:px-12">
          <div className="mx-auto grid max-w-[1700px] gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div className="grid gap-5">
              <SystemRail label="Projects" labelClassName="text-carbon/68" />
              <h1 className={`${display} max-w-[10ch] text-[clamp(2.8rem,7vw,5.4rem)] text-carbon`}>
                That project page does not exist.
              </h1>
            </div>
            <div className="grid gap-4 lg:max-w-[34rem]">
              <p className="m-0 text-base leading-relaxed text-carbon/74">
                The route is valid, but there is no matching project entry in the data source.
              </p>
              <Link className={`${mono} text-carbon transition-colors duration-200 hover:text-cobalt`} to="/projects">
                Back to projects
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  const isActive = project.statusTone === 'active';

  return (
    <>
      <RouteMeta title={`${project.title} | Tre Humphries`} description={project.summary} />

      <section id="top" className={`${isActive ? 'bg-carbon text-bone' : 'bg-bone text-carbon'} px-4 py-14 md:px-6 lg:px-8 xl:px-12 xl:py-18`}>
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
          <div className="grid gap-5">
            <SystemRail
              label={`${project.status} / Project ${project.number}`}
              labelClassName={isActive ? 'text-active' : 'text-carbon/66'}
              lineClassName={isActive ? 'bg-active' : ''}
            />
            <p className={`${mono} ${isActive ? 'text-active' : 'text-orange'}`}>
              {project.seekingSupport ?? project.timelineLabel}
            </p>
            <h1 className={`${display} max-w-[10ch] text-[clamp(3rem,8vw,6.2rem)] ${isActive ? 'text-bone' : 'text-carbon'}`}>
              {project.title}
            </h1>
            <p className={`m-0 max-w-[32rem] text-[1.04rem] leading-relaxed ${isActive ? 'text-steel' : 'text-carbon/74'}`}>
              {project.summary}
            </p>
          </div>

          {project.heroMediaType ? (
            <div className="grid gap-3">
              <ProjectHeroMedia project={project} loading="eager" />
            </div>
          ) : (
            <div className={`${isActive ? 'bg-carbon border-active/28' : 'bg-carbon text-bone border-bone/12'} grid gap-5 border px-5 py-6 md:px-7 md:py-8`}>
              <p className={`${mono} ${isActive ? 'text-active' : 'text-cobalt'}`}>Current stage</p>
              <p className={`m-0 text-[1rem] leading-relaxed ${isActive ? 'text-steel' : 'text-bone/82'}`}>
                {project.currentStage}
              </p>
              <div className="grid gap-2 border-t border-bone/10 pt-4">
                {project.heroPlaceholder?.meta.map((item) => (
                  <div key={item.label} className="grid gap-1">
                    <span className={`${mono} ${isActive ? 'text-steel' : 'text-cobalt'}`}>{item.label}</span>
                    <span className={`text-sm leading-relaxed ${isActive ? 'text-bone' : 'text-bone/84'}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={`${isActive ? 'bg-carbon text-bone' : 'bg-bone text-carbon'} px-4 pb-14 md:px-6 lg:px-8 xl:px-12 xl:pb-18`}>
        <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)]">
          <aside className={`grid content-start gap-4 border-t pt-5 lg:sticky lg:top-28 ${isActive ? 'border-bone/10' : 'border-carbon/12'}`}>
            <div className="grid gap-2">
              <p className={`${mono} ${isActive ? 'text-active' : 'text-cobalt'}`}>Current stage</p>
              <p className={`m-0 text-sm leading-relaxed ${isActive ? 'text-steel' : 'text-carbon/74'}`}>{project.currentStage}</p>
            </div>
            <div className={`grid gap-2 border-t pt-4 ${isActive ? 'border-bone/10' : 'border-carbon/12'}`}>
              <p className={`${mono} ${isActive ? 'text-steel' : 'text-cobalt'}`}>Technical areas</p>
              <p className={`m-0 text-sm leading-relaxed ${isActive ? 'text-bone' : 'text-carbon/74'}`}>{project.tags.join(' / ')}</p>
            </div>
            <div className={`grid gap-2 border-t pt-4 ${isActive ? 'border-bone/10' : 'border-carbon/12'}`}>
              <p className={`${mono} ${isActive ? 'text-steel' : 'text-cobalt'}`}>Last updated</p>
              <p className={`m-0 text-sm leading-relaxed ${isActive ? 'text-steel' : 'text-carbon/72'}`}>{project.lastUpdated}</p>
            </div>
            <div className={`grid gap-2 border-t pt-4 ${isActive ? 'border-bone/10' : 'border-carbon/12'}`}>
              <p className={`${mono} ${isActive ? 'text-steel' : 'text-cobalt'}`}>Status</p>
              <p className={`m-0 text-sm leading-relaxed ${isActive ? 'text-active' : 'text-carbon/72'}`}>{project.status}</p>
            </div>
          </aside>

          <div className="grid gap-10">
            <section className={`grid gap-4 border-t pt-5 ${isActive ? 'border-bone/10' : 'border-carbon/12'}`}>
              <SystemRail label="Overview" index="01" labelClassName={isActive ? 'text-steel' : 'text-carbon/66'} />
              <div className="grid gap-4">
                {project.overview.map((paragraph) => (
                  <p key={paragraph} className={`m-0 max-w-[42rem] text-base leading-relaxed ${isActive ? 'text-steel' : 'text-carbon/74'}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className={`grid gap-4 border-t pt-5 ${isActive ? 'border-bone/10' : 'border-carbon/12'}`}>
              <SystemRail label="Current stage" index="02" labelClassName={isActive ? 'text-steel' : 'text-carbon/66'} />
              <p className={`m-0 max-w-[42rem] text-base leading-relaxed ${isActive ? 'text-steel' : 'text-carbon/74'}`}>
                {project.currentStage}
              </p>
            </section>

            <section className={`grid gap-4 border-t pt-5 ${isActive ? 'border-bone/10' : 'border-carbon/12'}`}>
              <SystemRail label="Working on" index="03" labelClassName={isActive ? 'text-steel' : 'text-carbon/66'} />
              <DetailList items={project.currentWork} active={isActive} />
            </section>

            <section className={`grid gap-4 border-t pt-5 ${isActive ? 'border-bone/10' : 'border-carbon/12'}`}>
              <SystemRail label="Section 04" index="04" labelClassName={isActive ? 'text-steel' : 'text-carbon/66'} />
              <h2 className={`${display} text-[clamp(2rem,5vw,3.8rem)] ${isActive ? 'text-bone' : 'text-carbon'}`}>
                Questions
              </h2>
              <DetailList items={project.questions} active={isActive} />
            </section>

            <section className={`grid gap-5 border-t-2 pt-5 ${isActive ? 'border-active' : 'border-orange'}`}>
              <SystemRail
                label="Looking for"
                index="05"
                labelClassName={isActive ? 'text-active' : 'text-orange'}
                lineClassName={isActive ? 'bg-active' : 'bg-cobalt'}
              />
              <h2 className={`${display} max-w-[12ch] text-[clamp(2.4rem,6vw,4.8rem)] ${isActive ? 'text-bone' : 'text-carbon'}`}>
                If this overlaps with your world, I&apos;d like to hear from you.
              </h2>
              <p className={`m-0 max-w-[40rem] text-base leading-relaxed ${isActive ? 'text-steel' : 'text-carbon/74'}`}>
                The point of sharing the project here is to make useful connections around the work itself.
              </p>
              <DetailList items={project.lookingFor} active={isActive} />
              <Link className={`${mono} ${isActive ? 'text-bone hover:text-active' : 'text-carbon hover:text-cobalt'} transition-colors duration-200`} to="/#contact">
                Reach out
              </Link>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
