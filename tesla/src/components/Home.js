import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-s.jpg"
          LeftBtn="Custom Order"
          RightBtn="Existing Inventory"
        />
        <Section 
          title="Model Y"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-y.jpg"
          LeftBtn="Custom Order"
          RightBtn="Existing Inventory"
        />
        <Section 
          title="Model 3"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-3.jpg"
          LeftBtn="Custom Order"
          RightBtn="Existing Inventory"
        />
        <Section 
          title="Model X"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-x.jpg"
          LeftBtn="Custom Order"
          RightBtn="Existing Inventory"
        />
        <Section 
          title="Lowest Cost Solar Panels in America"
          description="Money-back Guarantee"
          backgroundImg="solar-panel.jpg"
          LeftBtn="Order Now"
          RightBtn="Learn More"
        />
        <Section 
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="solar-roof.jpg"
          LeftBtn="Order Now"
          RightBtn="Learn More"
        />
        <Section 
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          LeftBtn="Shop Now"
        />
    </Container>
  )
}

export default Home

 const Container = styled.div`
   height: 100vh;
`