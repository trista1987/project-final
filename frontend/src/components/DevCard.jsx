import {Github} from "./iconFolder/Github"
import {Linkedin} from "./iconFolder/Linkedin"
import {Portfolio} from "./iconFolder/Portfolio"


export const DevCard = ({ devImage, devName, developerName, devIntro, gitLink, linkedinLink, portfolioLink}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={devImage}
          alt={devName}
          className="w-[300px] h-[300px] object-cover rounded-full"
        />
      </div>
      <div className="flex justify-center">
        <h4>{developerName}</h4>
        <p>{devIntro}</p>
      </div>
      <div className="flex justify-center space-x-4 mt-[16px]">
        <a href={gitLink} className="text-gray-600 hover:text-bg2">
          <Github />
        </a>
        <a href={linkedinLink} className="text-gray-600 hover:text-black">
          <Linkedin />
        </a>
        <a href={portfolioLink} className="text-gray-600 hover:text-black">
          <Portfolio />
        </a>
      </div>
    </>
  );
};
