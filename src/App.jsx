import './App.css'
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout"

//VIEWS
import HomeMain from './features/Home/HomeMain';
import AboutMeMain from './features/AboutMe/AboutMeMain';
import SkillsMain from './features/Skills/SkillsMain';
import ProjectsMain from './features/Projects/ProjectsMain';
import ContactSocialsMain from './features/ContactSocials/ContactSocialsMain';

export default function App() {
  const base_class = "relative h-screen w-full";

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={
          <>
            <section id="home">
              <HomeMain />
            </section>
            <section id="aboutme" className={base_class}>
              <AboutMeMain />
            </section>
            <section id="skills" className={base_class}>
              <SkillsMain />
            </section>
            <section id="projects" className={base_class}>
              <ProjectsMain />
            </section>
            <section id="contactsocials" className={base_class}>
              <ContactSocialsMain />
            </section>
          </>
        } />
      </Route>
    </Routes>
  )
}