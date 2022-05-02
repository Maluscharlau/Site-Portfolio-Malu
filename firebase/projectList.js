import app from "./firebase.js"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


//entrar en lo repositorio
const db = getFirestore(app);

// traer la lista de productos
async function getProjects(db) {
  const projects = collection(db, 'projects');
  const projectsSnapshot = await getDocs(projects);
  projectsSnapshot.docs.forEach(doc => projectList.push(doc.data()));
  return projectList
}
getProjects(db)

//lista de projectos para exportacion
let projectList = []

//promesa para tener cargar la lista
export const getFetch = new Promise((resolve, reject)=>{
  setTimeout(()=>{
  resolve(projectList)
},1500)})
export default projectList
