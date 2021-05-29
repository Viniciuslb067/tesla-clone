import React from "react";

import { Container, Heading, Buttons } from "./styles"

interface Props {
  label: string
  description: string
}

function DefaultOverlayContent({label, description}: Props) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Alguma coisa</button>
        <button className="white">Outra coisa</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
