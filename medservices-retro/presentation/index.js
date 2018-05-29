// Import React
import React from "react";
import ImageSlide from "spectacle-image-slide";
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  niceHouse: require("../assets/Beautiful_House.jpg"),
  smallHouse: require("../assets/small-house-nature.jpg"),
  disaster: require("../assets/architecture-fail-stairs.jpg"),
  disaster2: require("../assets/stair-fail.jpg"),
  goodTools: require("../assets/klein-tools-electricians.jpg"),
  joke: require("../assets/kat.png"),
  badTools: require("../assets/SOS-organized-tools.jpg"),
  reduxPromise: require("../assets/promise-diss.png")
};

preloader(images);

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Lessons Learned Building Medication Services UI
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            (aka Client Application)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Objectives</Heading>
          <List>
            <ListItem>Architectural Decisions</ListItem>
            <ListItem>Tools Set</ListItem>
            <ListItem>The Wins & the misses</ListItem>
            <ListItem>Conclusion</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            1. Architectural Decisions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>… it is simplicity that is difficult to make.</Quote>
            <Cite>Bertholdt Brecht</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Ladies and Gentlemen, I present you brand new shining Med-Service UI Library
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.smallHouse.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide>
          {/* <ImageSlide image={images.niceHouse} title="A shining new UI Library" /> */}
          <Image src={images.niceHouse.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide>
          <Image src={images.disaster.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide>
          <Image src={images.disaster2.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide>
          <Image src={images.smallHouse.replace("/", "")} margin="0px auto 40px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Most achitectures are accidental, not intentional.</Quote>
            <Cite>Grady Booch</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            2. Tools 🤔😬
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Tools for state management
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Complexity (at first glance) for complex application
          </Text>
          <List>
            <ListItem>
              Redux-Promise <b>==></b> Thunk <b>==></b> Observable
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={images.joke.replace("/", "")} margin="0px auto 40px" />
        </Slide>

        <Slide>
          <Image src={images.reduxPromise.replace("/", "")} margin="0px auto 40px" />
        </Slide>

        <Slide>
          <Image src={images.badTools.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide>
          <Image src={images.goodTools.replace("/", "")} margin="0px auto 40px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            3. Wins and Misses
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            To test or not to test!?
          </Heading>
          <List>
            <ListItem>
              Testing
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} lineHeight={1} textColor="secondary">
              4. Conclusion
          </Heading>
        </Slide>

        {/* <Slide transition={["fade"]} bgColor="tertiary"> */}
        {/*   <Heading size={6} textColor="primary" caps>Typography</Heading> */}
        {/*   <Heading size={1} textColor="secondary">Heading 1</Heading> */}
        {/*   <Heading size={2} textColor="secondary">Heading 2</Heading> */}
        {/*   <Heading size={3} textColor="secondary">Heading 3</Heading> */}
        {/*   <Heading size={4} textColor="secondary">Heading 4</Heading> */}
        {/*   <Heading size={5} textColor="secondary">Heading 5</Heading> */}
        {/*   <Text size={6} textColor="secondary">Standard text</Text> */}
        {/* </Slide> */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Fin.</Quote>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
