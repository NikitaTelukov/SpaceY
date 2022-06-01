import {FunctionComponent} from "react";
import SocialIcon from "@components/SocialIcons/SocialIcon/SocialIcon";

const SocialIcons:FunctionComponent = () => {
    return (
        <div>
            <SocialIcon src="/images/instagram.svg" link="/instagram"/>
            <SocialIcon src="/images/linkedin-in.svg" link="/linkedin"/>
            <SocialIcon src="/images/facebook-square.svg" link="/facebook"/>
        </div>
    )
}

export default SocialIcons