import { Suspense, lazy } from 'react';
import type { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { RouteLoading } from './components/RouteLoading';
import { ScrollManager } from './components/ScrollManager';
import { HomePage } from './pages/HomePage';

const ExperiencePage = lazy(async () => ({
  default: (await import('./pages/ExperiencePage')).ExperiencePage,
}));
const ClientWorkPage = lazy(async () => ({
  default: (await import('./pages/ClientWorkPage')).ClientWorkPage,
}));
const ConsultingPage = lazy(async () => ({
  default: (await import('./pages/ConsultingPage')).ConsultingPage,
}));
const CvPage = lazy(async () => ({
  default: (await import('./pages/CvPage')).CvPage,
}));
const ProjectsPage = lazy(async () => ({
  default: (await import('./pages/ProjectsPage')).ProjectsPage,
}));
const LivingCvPage = lazy(async () => ({
  default: (await import('./pages/LivingCvPage')).LivingCvPage,
}));
const ProjectDetailPage = lazy(async () => ({
  default: (await import('./pages/ProjectDetailPage')).ProjectDetailPage,
}));
const NotFoundPage = lazy(async () => ({
  default: (await import('./pages/NotFoundPage')).NotFoundPage,
}));

const routeFallback = <RouteLoading />;

function withRouteSuspense(element: ReactElement) {
  return <Suspense fallback={routeFallback}>{element}</Suspense>;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/experience" element={withRouteSuspense(<ExperiencePage />)} />
          <Route path="/client-work" element={withRouteSuspense(<ClientWorkPage />)} />
          <Route path="/consulting" element={withRouteSuspense(<ConsultingPage />)} />
          <Route path="/cv" element={withRouteSuspense(<CvPage />)} />
          <Route path="/projects" element={withRouteSuspense(<ProjectsPage />)} />
          <Route path="/living-cv" element={withRouteSuspense(<LivingCvPage />)} />
          <Route path="/projects/:slug" element={withRouteSuspense(<ProjectDetailPage />)} />
          <Route path="*" element={withRouteSuspense(<NotFoundPage />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
