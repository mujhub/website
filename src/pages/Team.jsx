import React from "react";
import { Container } from "../styles/Shared/Container";
import { H4, Type } from "../styles/Shared/StyledTypes";
import { Subheading } from "../styles/components/HomeStyles";

// team card
import { TeamCard } from "../components/Team/TeamCard";

// team data
import team from "../constants/teamMembers";

const Team = () => {
  return (
    <>
      <Subheading>
        <H4>Team</H4>
        <Type>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt
          possimus sapiente amet similique quo alias dignissimos dolor
          provident.
        </Type>
      </Subheading>

      <Container center>
        {team.map((member) => {
          return (
            <TeamCard
              name={member.name}
              post={member.post}
              links={member.links}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Team;
