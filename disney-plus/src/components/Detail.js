import React from 'react'
import styled from 'styled-components';
const Detail = () => {
  return (
    <Container>
        <BackgroundImg>
            <img src="./images/aldin_post.png" alt="" />
        </BackgroundImg>
        <ImageTitle>
            <img src="./images/aladdin5.png" alt="" />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="./images/play-icon-black.png" alt="" />
                <span>Play</span>
            </PlayButton>
            <TrailerButton>
                <img src="./images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="./images/group-icon.png" alt="" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 . 7m . Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
        A kind-hearted street urchin Aladdin vies for the love of the beautiful princess Jasmine, the princess of Agrabah. When he finds a magic lamp, he uses the genie's magic power to make himself a prince in order to marry her. He's also on a mission to stop the powerful Jafar who plots to steal the magic lamp that could make his deepest wishes come true.
        </Description>
    </Container>
  )
}

export default Detail


const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const BackgroundImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;


  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 200px;
  width: 30vw;
  min-width: 230px;



  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin: 0px 22px 0px 0px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }


  &:hover {
    background: rgb(198, 198, 198);
  }


  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  margin : 0 20px 0 5px;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  cursor: pointer;

  span{
    font-size: 30px;
    color: white;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    span {
        font-size: 20px;
    }
  }

`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);

  @media (max-width: 768px) {
    img{
        width: 30px;
        height: 30px;
    }
  }

`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;