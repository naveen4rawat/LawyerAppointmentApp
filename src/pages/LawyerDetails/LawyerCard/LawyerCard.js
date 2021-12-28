import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function LawyerCard({ item }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/lawyer/${id}`);
  };
  return (
    <CardContainer>
      <Speciality>{item.speciality}</Speciality>
      <Image src={item.picture} alt={item.name.first} />
      <Name>
        <Title>Name: </Title>
        {item.name.title} {item.name.first} {item.name.last}
      </Name>
      <Gender>
        <Title>Gender: </Title>
        {item.gender}
      </Gender>
      <Address>
        <Title>Address:</Title>
        <br />
        {item.location.street.number} - {item.location.street.name}
        <br />
        {item.location.city}, {item.location.state}
        <br />
        {item.location.country} {item.location.postcode}
        <br />
      </Address>

      <Price>
        <Title>Cost Per Appointment: </Title>
        <strong>$</strong> {item.costPerAppointment}
      </Price>
      <Button onClick={() => handleClick(item.id)}>Book an Appointment</Button>
    </CardContainer>
  );
}

export default LawyerCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 250px;
  box-shadow: ${(p) => p.theme.shadowSmall};
  background: ${(p) => p.theme.primaryColor};
  color: ${(p) => p.theme.secondaryColor};
  margin: ${(p) => p.theme.largeMargin} 0;
  padding: ${(p) => p.theme.largeMargin};
  border-radius: ${(p) => p.theme.borderRadius};
`;
const Image = styled.img`
  width: 250px;
  border-radius: ${(p) => p.theme.borderRadius};
`;
const Name = styled.div`
  font-weight: bold;
  margin: ${(p) => p.theme.smallMargin};
`;
const Gender = styled.div`
  font-weight: bold;
  margin: ${(p) => p.theme.smallMargin};
`;
const Address = styled.div`
  font-weight: bold;
  margin: ${(p) => p.theme.smallMargin};
`;
const Speciality = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: ${(p) => p.theme.smallMargin};
  text-align: center;
`;
const Price = styled.div`
  font-weight: bold;
  margin: ${(p) => p.theme.smallMargin};
`;
const Title = styled.span`
  color: ${(p) => p.theme.accentColor};
`;
const Button = styled.button`
  margin: ${(p) => p.theme.mediumMargin} 0;
  padding: ${(p) => p.theme.smallMargin};
  background: ${(p) => p.theme.ternaryColor};
  border: none;
  font-weight: 600;
  font-size: 15px;
  color: ${(p) => p.theme.secondaryColor};
`;
