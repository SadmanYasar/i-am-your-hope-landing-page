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
        A runtime deconstruction of <a href="https://playful.software">playful.software</a>
      </BottomLeft>
      <BottomRight>
        Inspiration and ideas
        {/* ... */}
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      {/* <img className='piko' src="/PIKO_WINK.gif" alt="Velvet Banana" /> */}
    </Container>
  )
}
