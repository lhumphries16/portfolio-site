import {
  artifacts,
  buildTimelineEntries,
  filterArtifacts,
  getArtifactYearBounds,
  getArtifactsForSurface,
  getCurrentHighlights,
  normalizeArtifactYearRange,
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
      years: getArtifactYearBounds(artifacts),
    });

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((artifact) => artifact.type === 'experiment')).toBe(true);
    expect(filtered.every((artifact) => artifact.domains.includes('embedded'))).toBe(true);
  });

  it('uses the full published timeline range by default', () => {
    const bounds = getArtifactYearBounds(artifacts);
    const filtered = filterArtifacts(artifacts, {
      type: 'all',
      domain: 'all',
      years: bounds,
    });

    expect(bounds).toEqual({ min: 2014, max: 2026 });
    expect(filtered).toHaveLength(sortArtifactsChronologically(artifacts).length);
  });

  it('keeps single-year artifacts visible when the selected year matches exactly', () => {
    const filtered = filterArtifacts(artifacts, {
      type: 'all',
      domain: 'all',
      years: {
        start: 2024,
        end: 2024,
      },
    });

    expect(filtered.map((artifact) => artifact.id)).toContain('homeems');
  });

  it('keeps multi-year artifacts visible when their interval overlaps the selected range', () => {
    const filtered = filterArtifacts(artifacts, {
      type: 'all',
      domain: 'all',
      years: {
        start: 2019,
        end: 2022,
      },
    });

    expect(filtered.map((artifact) => artifact.id)).toContain('drone-videography');
    expect(filtered.map((artifact) => artifact.id)).toContain('innerspec');
  });

  it('removes artifacts when their date interval does not overlap the selected range', () => {
    const filtered = filterArtifacts(artifacts, {
      type: 'all',
      domain: 'all',
      years: {
        start: 2020,
        end: 2022,
      },
    });

    expect(filtered.map((artifact) => artifact.id)).not.toContain('drone-videography');
  });

  it('combines type, domain, and year filtering with AND behavior', () => {
    const filtered = filterArtifacts(artifacts, {
      type: 'experiment',
      domain: 'embedded',
      years: {
        start: 2019,
        end: 2019,
      },
    });

    expect(filtered.map((artifact) => artifact.id)).toEqual(['servo-spider', 'jumper-robot']);
  });

  it('normalizes invalid or reversed URL year values into a valid range', () => {
    const bounds = getArtifactYearBounds(artifacts);

    expect(normalizeArtifactYearRange('9999', '2010', bounds)).toEqual({
      start: bounds.min,
      end: bounds.max,
    });
    expect(normalizeArtifactYearRange('2024', '2021', bounds)).toEqual({
      start: 2021,
      end: 2024,
    });
    expect(normalizeArtifactYearRange('not-a-year', '2020', bounds)).toEqual({
      start: 2014,
      end: 2020,
    });
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

  it('builds shared artifact-driven web and industrial views without duplicating data', () => {
    const webArtifacts = getArtifactsForSurface(artifacts, 'web');
    const industrialArtifacts = getArtifactsForSurface(artifacts, 'industrial');

    expect(webArtifacts.some((artifact) => artifact.id === 'homeems')).toBe(true);
    expect(webArtifacts.some((artifact) => artifact.id === 'all-seasons')).toBe(true);
    expect(webArtifacts.some((artifact) => artifact.id === 'mayara-miranda')).toBe(true);
    expect(industrialArtifacts.some((artifact) => artifact.id === 'programmable-butterfly-controller')).toBe(true);
    expect(industrialArtifacts.some((artifact) => artifact.id === 'gaf-roads')).toBe(true);
    expect(industrialArtifacts.some((artifact) => artifact.id === 'homeems')).toBe(false);
  });
});
