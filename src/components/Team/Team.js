import React from "react";
import './Team.css';
import TeamMember from "../TeamMember/TeamMember";
import { memberlist } from "./memberList";
import RedStar from "../../images/BoldRedStar.svg";

const Team = () => {
    return (
        <div className="team">
            <div className="background"></div>
            <div className="mobilebackground"></div>
            <div className="title">MEET THE <br /> TEAM</div>

            {/* chairs */}
            <div className="chairs">Chairs & Operations</div>

            <div className="memberList">
                {memberlist["chairs"].map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        image={`${member.name.split(' ').join('')}.svg`}
                        title={member.title}
                        linkedinUrl={member.linkedin}
                        about={member.about}
                    />
                ))}
            </div>

            {/* marketing */}
            <div className="sectionTitle">Marketing</div>
            <div className="memberList">
                {memberlist["marketing"].map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        image={`${member.name.split(' ').join('')}.svg`}
                        title={member.title}
                        linkedinUrl={member.linkedin}
                        about={member.about}
                    />
                ))}
            </div>

            {/* logistics */}
            <div className="sectionTitle">Logistics</div>
            <div className="memberList">
                {memberlist["logistics"].map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        image={`${member.name.split(' ').join('')}.svg`}
                        title={member.title}
                        linkedinUrl={member.linkedin}
                        about={member.about}
                    />
                ))}
            </div>

            {/* finance */}
            <div className="sectionTitle">Finance</div>
            <div className="memberList">
                {memberlist["finance"].map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        image={`${member.name.split(' ').join('')}.svg`}
                        title={member.title}
                        linkedinUrl={member.linkedin}
                        about={member.about}
                    />
                ))}
            </div>

            {/* Speaker Relations */}
            <div className="sectionTitle">Speaker Relations</div>
            <div className="memberList">
                {memberlist["speakerRelations"].map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        image={`${member.name.split(' ').join('')}.svg`}
                        title={member.title}
                        linkedinUrl={member.linkedin}
                        about={member.about}
                    />
                ))}
            </div>

            {/* sponsorship */}
            <div className="sectionTitle">Sponsorship</div>
            <div className="memberList">
                {memberlist["sponsorship"].map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        image={`${member.name.split(' ').join('')}.svg`}
                        title={member.title}
                        linkedinUrl={member.linkedin}
                        about={member.about}
                    />
                ))}
            </div>
        </div>
    );
}

export default Team;