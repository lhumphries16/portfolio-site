import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { ScrollManager } from './components/ScrollManager';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ContactPage } from './pages/ContactPage';
import { ControlsPage } from './pages/ControlsPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { WebPage } from './pages/WebPage';
import { WorkPage } from './pages/WorkPage';

function RedirectWithQuery({ to }: { to: string }) {
  const location = useLocation();

  return <Navigate replace to={{ pathname: to, search: location.search, hash: location.hash }} />;
}

function LegacyProjectRedirect() {
  const location = useLocation();
  const { slug } = useParams();

  if (slug === 'homeems') {
    return <Navigate replace to={{ pathname: '/work/homeems', search: location.search, hash: location.hash }} />;
  }

  if (slug === 'brazilian-sweet-bites-order-system') {
    return (
      <Navigate
        replace
        to={{
          pathname: '/work/brazilian-sweet-bites-order-system',
          search: location.search,
          hash: location.hash,
        }}
      />
    );
  }

  return <Navigate replace to={{ pathname: '/work', search: location.search, hash: location.hash }} />;
}

function PdfRedirect() {
  useEffect(() => {
    window.location.replace('/cv/tre-humphries-cv.pdf');
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/controls" element={<ControlsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/industrial" element={<RedirectWithQuery to="/controls" />} />
          <Route path="/consulting" element={<RedirectWithQuery to="/controls" />} />
          <Route path="/client-work" element={<RedirectWithQuery to="/work" />} />
          <Route path="/projects" element={<RedirectWithQuery to="/work" />} />
          <Route path="/projects/:slug" element={<LegacyProjectRedirect />} />
          <Route path="/experience" element={<RedirectWithQuery to="/about" />} />
          <Route path="/index" element={<RedirectWithQuery to="/work" />} />
          <Route path="/living-cv" element={<RedirectWithQuery to="/work" />} />
          <Route path="/cv" element={<PdfRedirect />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
