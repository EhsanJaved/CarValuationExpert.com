import React, { useState, useEffect } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './LP.css';
import './Page1.css';

const CarRequirementsForm = ({ sendDataToParent }) => {

  const [data, setdata] = useState({
    Brand : '', Fuel : '', Year : 0, Model : '',Mileage : 0});

    const [dropdownData, setDropdownData] = useState({
      Brand: {},
      Model: {},
      Fuel: {},
    });

    useEffect(() => {
      // Fetch data from the backend API
      // Example API endpoint: '/api/getDropdownData'
      fetch('/dropdown')
        .then((response) => response.json())
        .then((backendData) => {
          setDropdownData(backendData);
        })
        .catch((error) => {
          console.error('Error fetching dropdown data:', error);
        });
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(data); // Optional: Log the data
      navigate({
        pathname: '/prediction/process',
        state: data
      });
      sendDataToParent(data)
    };

  return (
    <Container>
      <Form  style={{ width: '450px' }}>
        <section className="content-card home" id="welcome-section">
          <h1>CarValuationExpert</h1>
        </section>
        <Row>
        <Col>
            <Form.Group controlId="Model">
              <Form.Label style={{ padding: '5px' }}>Model</Form.Label>
              <Form.Control 
                as='select'
                value={data.Model}
                onChange={e =>
                  setdata({
                    ...data,
                    Model: e.target.value
                  })
                }
                required
              >
              <option value="">Select Model</option>
              <option value="demo Model">demo Model</option>
              {Object.values(dropdownData.Model).map((Model, index) => (
                  <option key={index} value={Model}>
                    {Model}
                  </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="Brand">
              <Form.Label style={{ padding: '5px' }}>Brand</Form.Label>
              <Form.Control
                as="select"
                value={data.Brand}
                onChange={e =>
                  setdata({
                    ...data,
                    Brand: e.target.value
                  })
                }
                required
              >
                <option value="">Select Brand</option>
                {Object.values(dropdownData.Brand).map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
        <Col>
            <Form.Group controlId="FuelType">
              <Form.Label style={{ padding: '5px' }}>Fuel Type</Form.Label>
              <Form.Control
                as="select"
                value={data.Fuel}
                onChange={e =>
                  setdata({
                    ...data,
                    Fuel: e.target.value
                  })
                }
                required
              >
                <option value="">Fuel type</option>
                {Object.values(dropdownData.Fuel).map((Fuel, index) => (
                  <option key={index} value={Fuel}>
                    {Fuel}
                  </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="Year">
              <Form.Label style={{ padding: '5px' }}>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Year"
                value={data.Year}
                onChange={e =>
                  setdata({
                    ...data,
                    Year: e.target.value
                  })
                }
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="Mileage">
              <Form.Label style={{ padding: '5px' }}>Mileage</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mileage"
                value={data.Mileage}
                onChange={e =>
                  setdata({
                    ...data,
                    Mileage: e.target.value
                  })
                }
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <br />
        <Link to={{ pathname:"/prediction/process", state:data}}>
          <div className="button-container" style={{ paddingLeft: '6%' }}>
            <button className="specific-button" variant="primary" type="submit" onClick={handleSubmit}>
              <b>Click to Get Your Prediction!</b>
            </button>
          </div>
        </Link>
      </Form>
    </Container>
  );
};

export default CarRequirementsForm;
