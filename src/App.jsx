import React from 'react';
import Header from './components/header';
import { Content } from './components/content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import './App.css'

export default function App (){
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main>
          <Header/>
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};