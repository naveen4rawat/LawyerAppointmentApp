import React from "react";
import styled from "styled-components";
import LawyerCard from "./LawyerCard/LawyerCard";

import { useSelector } from "react-redux";

function LawyerDetails() {
  const appointment = useSelector((state) => state.appointment);

  const [lawyer, setLawyer] = React.useState([]);
  const fetchData = async () => {
    try {
      await fetch("http://localhost:3004/lawyers")
        .then((res) => res.json())
        .then((res) => setLawyer(res));
    } catch (err) {
      console.log(err.message);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Heading>Lawyers</Heading>

      {appointment.appointBook && (
        <ReduxValue>
          your appointment is booked with {appointment.name}
        </ReduxValue>
      )}

      <LawyerCardContainer>
        {lawyer.map((item) => (
          <LawyerCard item={item} key={item.id} />
        ))}
      </LawyerCardContainer>
    </>
  );
}

export default LawyerDetails;
const LawyerCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-item: center;
  justify-content: space-evenly;
  background: ${(p) => p.theme.accentColor};
`;
const Heading = styled.h1`
  text-align: center;
  background: ${(p) => p.theme.primaryColor};
  margin: 0;
  padding: ${(p) => p.theme.mediumMargin};
  color: ${(p) => p.theme.accentColor};
`;
const ReduxValue = styled.div`
  padding: ${(p) => p.theme.mediumMargin};
  background: ${(p) => p.theme.ternaryColor};
  text-align: center;
  font-weight: bold;
`;
