import React from 'react';
import './TeamMember.css';
import Linkedin from "../../images/LinkedIn.svg";
import RedStar from "../../images/BoldRedStar.svg";

const TeamMember = ({ name, image, title, linkedinUrl, about }) => {
    return (
        <div className="team-member">
            <div className="image-container">
                <img className="profile-pic" src={require(`../Team/photos/${image}`)} alt={name} />
                {['Vithuna Kirupakaran', "Joanne Son", "Arpit Sandhu", "Chinmayi Manda", "Kevina Li", 'Mireille Botros', "Jonathan Wang"].includes(name) &&
                    <img src={RedStar} className="toprightstar" alt="Star" />
                }
                <div className={['Vithuna Kirupakaran', "Joanne Son", "Arpit Sandhu", "Chinmayi Manda", "Kevina Li", 'Mireille Botros', "Jonathan Wang"].includes(name) ? "overlaytoprightstar" : "overlay"}>
                    <div style={{maxWidth: "80%", marginTop: "5vw", marginLeft: "2.5vw"}}>
                        {about}
                    </div>
                </div>
                {['Rawan Miznazi', 'Natalie Fedorin', "Iris Mo", "Douglas Tisdale"].includes(name) &&
                    <img src={RedStar} className="bottomleftstar" alt="Star" />
                }
                {['Gavneet Bhandal', "Luxman Nirumalan", "Geertika Jeyaganesha", "Mithunan Jegatheesan"].includes(name) &&
                    <img src={RedStar} className="topleftstar" alt="Star" />
                }
            </div>
            <div className="details">
                <h3 className="name">
                    {name} 
                    {linkedinUrl !== "" && (
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} className="linkedin-icon" alt="LinkedIn" />
                        </a>
                    )}
                </h3>
                <p className="position">{title}</p>
            </div>
        </div>
    );
};

export default TeamMember;
