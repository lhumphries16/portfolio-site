import {
  artifacts,
  buildTimelineEntries,
  filterArtifacts,
  getCurrentHighlights,
  sortArtifactsChronologically,
} from '../content/artifacts';

describe('living CV content model', () => {
  it('sorts artifacts from earliest to latest', () => {
    const sorted = sortArtifactsChronologically(artifacts);

    expect(sorted[0]?.id).toBe('space-exploration-website');
    expect(sorted.at(-1)?.id).toBe('mayara-miranda');
  });

  it('filters artifacts by type and domain metadata', () => {
    const filtered = filterArtifacts(artifacts, {
      type: 'experiment',
      domain: 'embedded',
    });

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((artifact) => artifact.type === 'experiment')).toBe(true);
    expect(filtered.every((artifact) => artifact.domains.includes('embedded'))).toBe(true);
  });

  it('builds year and era markers without repeating the same contiguous era', () => {
    const purdueSlice = artifacts.filter((artifact) =>
      ['drone-videography', 'servo-spider', 'jumper-robot', 'avion-uas'].includes(artifact.id)
    );

    const entries = buildTimelineEntries(purdueSlice);
    const eraEntries = entries.filter((entry) => entry.kind === 'era');

    expect(eraEntries).toHaveLength(1);
    expect(eraEntries[0]).toMatchObject({
      kind: 'era',
      era: {
        id: 'purdue',
      },
    });
    expect(entries.find((entry) => entry.kind === 'year' && entry.year === '2018')).toBeTruthy();
    expect(entries.find((entry) => entry.kind === 'year' && entry.year === '2020')).toBeTruthy();
  });

  it('selects current highlights from current and featured artifact metadata', () => {
    const highlights = getCurrentHighlights(artifacts, 3);

    expect(highlights).toHaveLength(3);
    expect(highlights[0]?.id).toBe('mayara-miranda');
    expect(highlights.some((artifact) => artifact.display.current)).toBe(true);
  });
});
