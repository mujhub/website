import React from "react";
import { Container } from "../styles/Shared/Container";
import { H4, Type } from "../styles/Shared/StyledTypes";
import {
  TeamGrid,
  TeamHeaderContainer,
  TeamContainer,
} from "../styles/components/TeamStyles";
// team card
import { TeamCard } from "../components/Team/TeamCard";

// team data
import team from "../constants/teamMembers";

const Team = () => (
  <TeamContainer>
    <TeamHeaderContainer>
      <H4>Our Team</H4>
    </TeamHeaderContainer>

    <Container center>
      <TeamGrid>
        {team.map((member, i) => (
          <div key={i.toString()}>
            <TeamCard
              img={member.img}
              name={member.name}
              post={member.post}
              links={member.links}
            />
          </div>
        ))}
      </TeamGrid>
    </Container>
  </TeamContainer>
);

export default Team;
