import { SiExpress } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaNode } from 'react-icons/fa6'
import { SiPreact } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { FaDocker } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa6'
import { BiLogoMongodb } from 'react-icons/bi'
import { SiSpring } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { FcLinux } from 'react-icons/fc'

const map = {
  Typescript: <SiTypescript color='cadetblue' />,
  Javascript: <IoLogoJavascript color='gold' />,
  'Node.js': <FaNode color='green' />,
  Express: <SiExpress color='black' />,
  React: <SiPreact color='cadetblue' />,
  MySQL: <SiMysql color='cadetblue' />,
  Docker: <FaDocker color='cadetblue' />,
  Java: <FaJava color='orange' />,
  MongoDb: <BiLogoMongodb color='green' />,
  'Spring-boot': <SiSpring color='green' />,
  Git: <FaGitAlt color='orange' />,
  Linux: <FcLinux />,
}

const mapBlack = {
  Typescript: <SiTypescript color='black' />,
  Javascript: <IoLogoJavascript color='black' />,
  'Node.js': <FaNode color='black' />,
  Express: <SiExpress color='black' />,
  React: <SiPreact color='black' />,
  MySQL: <SiMysql color='black' />,
  Docker: <FaDocker color='black' />,
  Java: <FaJava color='black' />,
  MongoDb: <BiLogoMongodb color='black' />,
  'Spring-boot': <SiSpring color='black' />,
  Git: <FaGitAlt color='black' />,
  Linux: <FcLinux />,
}

// const map = {
//   'Typescript': <SiTypescript color="cadetblue" size={40} />,
//   'Javascript': <IoLogoJavascript color="gold" size={40} />,
//   'Node.js': <FaNode color="green" size={50} />,
//   'Express': <SiExpress color="black" size={40} />,
//   'React': <SiPreact color="cadetblue" size={40} />,
//   'MySQL': <SiMysql color="cadetblue" size={55} />,
//   'Docker': <FaDocker color="cadetblue" size={40} />,
//   'Java': <FaJava color="orange" size={40} />,
//   'MongoDb': <BiLogoMongodb color="green" size={40} />,
// }

export { mapBlack }
export default map
