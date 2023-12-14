import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { SiPreact } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { SiSpring } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";








const map = {
  'Typescript': <SiTypescript color="cadetblue" size={40} />,
  'Javascript': <IoLogoJavascript color="gold" size={40} />,
  'Node.js': <FaNode color="green" size={50} />,
  'Express': <SiExpress color="black" size={40} />,
  'React': <SiPreact color="cadetblue" size={40} />,
  'MySQL': <SiMysql color="cadetblue" size={55} />,
  'Docker': <FaDocker color="cadetblue" size={40} />,
  'Java': <FaJava color="orange" size={40} />,
  'MongoDb': <BiLogoMongodb color="green" size={40} />,
  'Spring-boot': <SiSpring color="green" size={40} />,
  'Git': <FaGitAlt color="orange" size={40} />, 
  'Linux': <FcLinux size={40} />

}

const mapBlack = {
  'Typescript': <SiTypescript color="black" size={60} />,
  'Javascript': <IoLogoJavascript color="black" size={65} />,
  'Node.js': <FaNode color="black" size={60} />,
  'Express': <SiExpress color="black" size={50} />,
  'React': <SiPreact color="black" size={50} />,
  'MySQL': <SiMysql color="black" size={65} />,
  'Docker': <FaDocker color="black" size={60} />,
  'Java': <FaJava color="black" size={60} />,
  'MongoDb': <BiLogoMongodb color="black" size={60} />,
  'Spring-boot': <SiSpring color="black" size={60} />,
  'Git': <FaGitAlt color="black" size={60} />, 
  'Linux': <FcLinux size={70} />
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