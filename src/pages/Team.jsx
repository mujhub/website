import React from "react";
import { Container } from "../styles/Shared/Container";
import { H4, Type } from "../styles/Shared/StyledTypes";
import { TeamGrid, TeamHeaderContainer } from "../styles/components/TeamStyles";
// team card
import { TeamCard } from "../components/Team/TeamCard";

// team data
import team from "../constants/teamMembers";

const Team = () => {
  return (
    <>
      <TeamHeaderContainer>
        <H4>Our Team</H4>
        <Type className="TeamHeaderDesc">
          Team MUJ HUB works super hard to make your life at MUJ easier. If you
          happen to like our work and see us on campus, don't forget to give us
          a high five xD
        </Type>
      </TeamHeaderContainer>

      <Container center>
        <TeamGrid>
          {team.map((member) => {
            return (
              <TeamCard
                img={member.img}
                name={member.name}
                post={member.post}
                links={member.links}
              />
            );
          })}
        </TeamGrid>
      </Container>
    </>
  );
};

export default Team;
