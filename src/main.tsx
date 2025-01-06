import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.tsx'
import ExploreSimilarImagesPage from './pages/ExploreSimilarImagesPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='flex flex-col pb-10'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/:id' element={<ExploreSimilarImagesPage/>}/>
    </Routes>
    </BrowserRouter>
    </main>
  </StrictMode>
)
