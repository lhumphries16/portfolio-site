import { Suspense, lazy } from 'react';
import type { ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { RouteLoading } from './components/RouteLoading';
import { ScrollManager } from './components/ScrollManager';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(async () => ({
  default: (await import('./pages/AboutPage')).AboutPage,
}));
const IndustrialPage = lazy(async () => ({
  default: (await import('./pages/IndustrialPage')).IndustrialPage,
}));
const WebPage = lazy(async () => ({
  default: (await import('./pages/WebPage')).WebPage,
}));
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

function LivingCvRedirect() {
  const location = useLocation();

  return <Navigate replace to={{ pathname: '/index', search: location.search, hash: location.hash }} />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/industrial" element={withRouteSuspense(<IndustrialPage />)} />
          <Route path="/web" element={withRouteSuspense(<WebPage />)} />
          <Route path="/index" element={withRouteSuspense(<LivingCvPage />)} />
          <Route path="/about" element={withRouteSuspense(<AboutPage />)} />
          <Route path="/experience" element={withRouteSuspense(<ExperiencePage />)} />
          <Route path="/client-work" element={withRouteSuspense(<ClientWorkPage />)} />
          <Route path="/consulting" element={withRouteSuspense(<ConsultingPage />)} />
          <Route path="/cv" element={withRouteSuspense(<CvPage />)} />
          <Route path="/projects" element={withRouteSuspense(<ProjectsPage />)} />
          <Route path="/living-cv" element={<LivingCvRedirect />} />
          <Route path="/projects/:slug" element={withRouteSuspense(<ProjectDetailPage />)} />
          <Route path="*" element={withRouteSuspense(<NotFoundPage />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
