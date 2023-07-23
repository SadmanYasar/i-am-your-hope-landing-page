import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          I AM
          <br />
          YOUR
          <br />
          HOPE
        </h1>
      </TopLeft>
      <BottomLeft>
        © 2023 I Am Your Hope. All rights reserved.
      </BottomLeft>
      <BottomRight>
        <a href='https://www.instagram.com/hope._.fam/' target='_blank'>Find us on Instagram</a>
        {/* ... */}
      </BottomRight>
      <Hamburger>
        {/* <div />
        <div />
        <div /> */}
        <a href='https://www.facebook.com/profile.php?id=100070850437739' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg></a>
      </Hamburger>
      {/* <img className='piko' src="/PIKO_WINK.gif" alt="Velvet Banana" /> */}
    </Container>
  )
}
