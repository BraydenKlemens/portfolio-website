import Profile from "./components/Profile/Profile";
import ContentSelector from "./components/Content/ContentSelector";
import ProjectCard from "./components/UI/ProjectCard";
// import Theme from "./components/ThemeChanger/Theme";

function App() {
  return (
    <>
      <Profile name={"Brayden Klemens"} />
      <ContentSelector />
      <ProjectCard />
    </>
  );
}

export default App;
