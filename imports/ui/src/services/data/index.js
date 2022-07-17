import { about } from './about';
import { resume } from "./resume";
import { contact } from "./contact";
import { projects } from "./projects";
import { createContext } from 'react';
const Data = () => {
  const projectRepo = 'https://github.com/Grubba27/grubba-site-meteor';
  const react95Repo = 'https://github.com/React95/React95';
  const items = [
    about,
    resume,
    contact,
    projects
  ];
  const getItems = () =>
    items.map(({ id, name, icon }) => ({ id, name, icon }));

  const getItem = (id) =>
    items.find(item => item.id === id);


  const getProjectInfo = () => {
    return {
      projectRepo,
      react95Repo,
    }
  }

  return {
    getItems,
    getItem,
    getProjectInfo,
  }
}
const Context = createContext(Data());
export {
  Context,
  Data,
}
