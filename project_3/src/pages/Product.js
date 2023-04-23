import React, { useState } from 'react';
import styled from 'styled-components';

const BottomButton = () => {
  return (
    <Button >
      <ButtonImg src={require('../images/bag.jpg')} />
    </Button>
  );
};

const Product = (props) => {
  const [sizeImage, setSizeImage] = useState(require('../images/product/size_default.png'));

  const handleSizeButtonClick = (size) => {
    if (size === 'short') {
      setSizeImage(require('../images/product/size_s.png'));
    } else if (size === 'tall') {
      setSizeImage(require('../images/product/size_t.png'));
    } else if (size === 'grande') {
      setSizeImage(require('../images/product/size_g.png'));
    } else if (size === 'venti') {
      setSizeImage(require('../images/product/size_v.png'));
    }
  };

  const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div style={{marginTop: '20px'}}>
        <text style={{marginLeft: '125px', fontFamily: 'Helvetica Neue, sans-serif', fontSize: '15px'}}>Menu / Americano</text>
      </div>
      <TopDiv>
        <img src={require('../images/product/order_1.png')} style={{ width: '1200px'}}/>
      </TopDiv>
      <CustomizationDiv>
        <SizesDiv>
          <SizesOptionsDiv>
            <SizesText>Size options</SizesText>
            <div style={{position: 'relative'}}>
            <img src={sizeImage} style={{ position: 'absolute', marginTop: '10px', marginLeft: '50px', marginRight: '50px', width: '70%', zIndex: '0'}} />
              <div style={{marginLeft: '42px' }}>
                <SizeButton onClick={() => handleSizeButtonClick('short')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('tall')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('grande')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('venti')}></SizeButton>
              </div>
            </div>
          </SizesOptionsDiv>
        </SizesDiv>
        <OptionsDiv>
          <OptionsCustomDiv>
            <CustomText>Customizations</CustomText>
              <div >
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '60px 0 30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Decaf</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Shots</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Syrup</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Milk</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Custom</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
              </div>
          </OptionsCustomDiv>
        </OptionsDiv>
        <Overlay showOverlay={showOverlay}>
          <CloseButton onClick={handleCloseClick}>X</CloseButton>
          <DoneButton onClick={handleCloseClick}>Done</DoneButton>
        </Overlay>
      </CustomizationDiv>
      <InfoDiv>
        <text style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}> Americano is a shot of espresso with hot water added. It has a rich and bold flavor.</text>
      </InfoDiv>
      <EndDiv>

      </EndDiv>
      <BottomDiv>
        <button 
          style={{ 
            border: 'none', 
            background: '#00754a',
            color: 'white',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            padding: '10px 20px',
            marginRight: '400px',
          }}>
          Add to Order
        </button>
        <BottomButton />
      </BottomDiv>
    </>
  );
};

const TopDiv = styled.div`
  height: 330px;
  width: 100%;
  background-color: #1e3932;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoDiv = styled.div`
  height: 230px;
  width: 100%;
  background-color: #1e3932;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EndDiv = styled.div`
  height: 330px;
  width: 100%;
  background-color: white;
  margin-top: 50px;
`;

const BottomDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #1e3932;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px; // add padding to the right to create the 50px margin
`;

const ButtonImg = styled.img`
  height: 50px;
  width: 50px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 250px;
`;

const CustomizationDiv  = styled.div`
  height: 520px;
  width: 100%;
  background-color: pink;
  display: flex;
`;

const SizesDiv = styled.div`
  height: 520px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsDiv  = styled.div`
  height: 520px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const SizesOptionsDiv  = styled.div`
  margin-top: 30px;
  height: 520px;
  width: 60%;
  background-color: white;
`;

const OptionsCustomDiv  = styled.div`
  margin-top: 30px;
  height: 520px;
  width: 60%;
  background-color: white;
  margin-left: 30px;
`;

const SizesText = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* add margin-bottom to move the line further down */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #d4e9e2;
  }
`;

const CustomText = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* add margin-bottom to move the line further down */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #d4e9e2;
  }
`;

const SizeButton = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: inline-block;
  padding: 0px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  margin-left: 26px;
  margin-top: 28px;
  
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 52%;
  background-color: white;
  z-index: 999;
  transition: transform 0.3s ease-out;
  transform: ${({ showOverlay }) =>
    showOverlay ? 'translateX(0)' : 'translateX(100%)'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const DoneButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default Product;
