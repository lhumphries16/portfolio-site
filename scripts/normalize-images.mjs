import { cp, mkdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const copyJobs = [
  ['tmp_orientation_fix/tre-panel-work-normalized.jpg', 'public/images/tre-panel-work-normalized.jpg'],
  ['tmp_orientation_fix/tre-work-contact-normalized.jpg', 'public/images/tre-work-contact-normalized.jpg'],
  ['tmp_orientation_fix/tre-box-desk-normalized.jpg', 'public/images/tre-box-desk-normalized.jpg'],
  ['rollmate-inspection-system_innerspec.jpg', 'public/images/rollmate-inspection-system_innerspec.jpg'],
  ['mainstream_fan_submittal_example_doc_public.jpg', 'public/images/mainstream_fan_submittal_example_doc_public.jpg'],
  ['feature_road-application-1.jpg', 'public/images/feature_road-application-1.jpg'],
  ['roads-decline2.avif', 'public/images/roads-decline2.avif'],
  ['mainstream_rooftop_ahu_public.jpg', 'public/images/mainstream_rooftop_ahu_public.jpg'],
  ['yaskawa_drive_photo_public.jpg', 'public/images/yaskawa_drive_photo_public.jpg'],
  ['baldor_motor_photo_public.jpg', 'public/images/baldor_motor_photo_public.jpg'],
  ['hydro_basil_rack_photo_my_garage.jpg', 'public/images/hydro_basil_rack_photo_my_garage.jpg'],
  ['output/playwright/webflow-home-preview/home-390-post.png', 'reference/screenshots/home-390-post.png'],
  ['output/playwright/webflow-home-preview/home-768-post.png', 'reference/screenshots/home-768-post.png'],
  ['output/playwright/webflow-home-preview/home-1280-post.png', 'reference/screenshots/home-1280-post.png'],
  ['output/playwright/webflow-home-preview/home-1440-post.png', 'reference/screenshots/home-1440-post.png'],
  ['44444.pdf', 'reference/webflow-capture.pdf'],
];

async function copyFile(sourceRelativePath, destinationRelativePath) {
  const source = resolve(root, sourceRelativePath);
  const destination = resolve(root, destinationRelativePath);

  await stat(source);
  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, { force: true });
}

async function main() {
  const failures = [];

  for (const [source, destination] of copyJobs) {
    try {
      await copyFile(source, destination);
      console.log(`copied ${source} -> ${destination}`);
    } catch (error) {
      failures.push({ source, destination, error });
    }
  }

  if (failures.length > 0) {
    console.warn('Some reference assets were not copied:');
    for (const failure of failures) {
      console.warn(`- ${failure.source} -> ${failure.destination}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
