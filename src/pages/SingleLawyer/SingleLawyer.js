import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { bookAppointment } from "../../components/actions";
import { useDispatch } from "react-redux";

function SingleLawyer() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [lawyerData, setLawyerData] = React.useState({});
  const [booked, setBooked] = React.useState({});
  const [bookingTime, setBookingTime] = React.useState(0);
  const [errorMsg, setErrorMsg] = React.useState();

  const handleSubmit = async () => {
    if (booked.booked.indexOf(bookingTime) >= 0) {
      setErrorMsg("time Slot Already Booked");
    } else {
      booked.booked.push(bookingTime);
      dispatch(bookAppointment(lawyerData.name.first));
      try {
        await fetch(`http://localhost:3004/booking/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(booked),
        })
          .then((res) => res.json())
          .then((res) => console.log(res.message));
      } catch (err) {
        console.log(err.message);
      }
      setErrorMsg("");
    }
  };

  const fetchData = async () => {
    try {
      await fetch(`http://localhost:3004/lawyers/${id}`)
        .then((res) => res.json())
        .then((res) => setLawyerData(res));
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const bookingData = async () => {
    try {
      fetch(`http://localhost:3004/booking/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setBooked(res);
        });
    } catch (err) {
      console.log(err.message);
    }
  };
  React.useEffect(() => {
    fetchData();
    bookingData();
  }, []);
  return (
    <CardContainer>
      <div>
        <Speciality>{lawyerData.speciality}</Speciality>
      </div>
      <ImageAndInfoContainer>
        <Image src={lawyerData.picture} alt={lawyerData.name?.first} />
        <Info>
          <Name>
            <Title>Name: </Title>
            {lawyerData.name?.title} {lawyerData.name?.first}{" "}
            {lawyerData.name?.last}
          </Name>
          <Gender>
            <Title>Gender: </Title>
            {lawyerData?.gender}
          </Gender>
          <Address>
            <Title>Address:</Title>
            <br />
            {lawyerData.location?.street.number} -{" "}
            {lawyerData.location?.street.name}
            <br />
            {lawyerData.location?.city}, {lawyerData.location?.state}
            <br />
            {lawyerData.location?.country} {lawyerData.location?.postcode}
            <br />
          </Address>
          <Price>
            <Title>Cost Per Appointment: </Title>
            <strong>$</strong> {lawyerData.costPerAppointment}
          </Price>
          <Title>Time Slot:</Title>
          <BookingTime>
            {lawyerData.availability?.map((time) => (
              <TimeSlot key={time} onClick={() => setBookingTime(time)}>
                <Time>
                  {time}:00 - {time + 1}:00
                </Time>
                <Availability>
                  {booked.booked?.indexOf(time) >= 0 ? "Booked" : "Available"}
                </Availability>
              </TimeSlot>
            ))}
          </BookingTime>
          <Error>{errorMsg}</Error>
          <Button onClick={handleSubmit}>Book an Appointment</Button>
        </Info>
      </ImageAndInfoContainer>
    </CardContainer>
  );
}

export default SingleLawyer;
const CardContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  box-shadow: ${(p) => p.theme.shadowSmall};
  background: ${(p) => p.theme.primaryColor};
  color: ${(p) => p.theme.secondaryColor};
  padding: ${(p) => p.theme.largeMargin};
`;
const ImageAndInfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Image = styled.img`
  width: 400px;
  border-radius: ${(p) => p.theme.borderRadius};
`;
const Name = styled.div`
  font-weight: bold;
  margin: ${(p) => p.theme.mediumMargin};
`;
const Gender = styled.div`
  font-weight: bold;
  margin: ${(p) => p.theme.mediumMargin};
`;
const Address = styled.div`
  font-weight: bold;
  margin: ${(p) => p.theme.mediumMargin};
`;
const Speciality = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin: ${(p) => p.theme.mediumMargin};
  text-align: center;
`;
const Price = styled.div`
  font-weight: bold;
  margin: ${(p) => p.theme.mediumMargin};
`;
const Title = styled.span`
  font-weight: bold;
  margin: ${(p) => p.theme.mediumMargin} 0;
  color: ${(p) => p.theme.accentColor};
`;
const BookingTime = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  border: 1px white solid;
  border-radius: 5px;
  background: ${(p) => p.theme.ternaryColor};
  align-items: center;
  justify-content: space-evenly;
`;
const TimeSlot = styled.div`
  margin: ${(p) => p.theme.smallMargin};
  padding: ${(p) => p.theme.mediumMargin};
  min-width: 80px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${(p) => p.theme.primaryColor};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Time = styled.div``;
const Availability = styled.div``;
const Button = styled.button`
  margin: ${(p) => p.theme.largeMargin} 0;
  padding: ${(p) => p.theme.mediumMargin};
  background: ${(p) => p.theme.ternaryColor};
  border: none;
  font-weight: 600;
  font-size: 15px;
  color: ${(p) => p.theme.secondaryColor};
`;
const Error = styled.div`
  color: red;
`;
