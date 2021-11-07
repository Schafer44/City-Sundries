import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Spring, animated } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Backboard from "./Pictures/BackboardSquare.jpg";
import Blackboard from "./Pictures/BlackboardSquare.jpg";
import BlackboardPhone from "./Pictures/BlackboardSquarePhone.jpg";
import HomeOne from "./Pictures/Home1.jpg";
import HomeTwo from "./Pictures/Home2.jpg";
import HomeThree from "./Pictures/Home3.jpg";
import HomeFour from "./Pictures/Home4.jpg";
import HomeFive from "./Pictures/Home5.jpg";
import Merch from "./Pictures/Merch.jpg";
import MerchPhone from "./Pictures/MerchPhone.jpg";
import Icecream from "./Pictures/Icecream.jpg";
import IcecreamPhone from "./Pictures/IcecreamPhone.jpg";
import Services from "./Pictures/Services.jpg";
import ServicesPhone from "./Pictures/ServicesPhone.jpg";
import IMG_8889 from "./Pictures/IMG_8889.jpeg";
import IMG_8884 from "./Pictures/IMG_8884.jpeg";
import IMG_8870 from "./Pictures/IMG_8870.jpeg";
import IMG_8855 from "./Pictures/IMG_8855.jpeg";
import { Footer } from "./Footer";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, imgWidth: 0, imgHeight: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const images = [
      { url: HomeTwo },
      { url: HomeOne },
      { url: HomeThree },
      { url: HomeFour },
      { url: HomeFive },
      { url: IMG_8870 },
      { url: IMG_8884 },
      { url: IMG_8889 },
    ];
    const imagesPhone = [
      { url: HomeTwo },
      { url: HomeOne },
      { url: HomeThree },
      { url: HomeFive },
      { url: IMG_8870 },
    ];
    if (this.state.width === 0) {
      return (
        <>
          <b></b>
        </>
      );
    } else if (this.state.width > 600) {
      console.log(window.width);
      return (
        <div className="hello">
          <Spring
            from={{ marginTop: 0 }}
            to={{ marginTop: 0 }}
            config={{ mass: 1, friction: 20 }}
          >
            {(props) => (
              <animated.div style={props}>
                <div class="WhiteScreen"></div>
                <Parallax pages={7} style={{ top: "0", left: "0" }}>
                  <ParallaxLayer
                    offset={0.99}
                    speed={1}
                    style={{
                      zIndex: 5,
                      background: "linear-gradient(to top, #E1A6B6, #223850)",
                    }}
                  />
                  <ParallaxLayer
                    offset={0.99}
                    speed={1}
                    style={{
                      zIndex: 5,
                      background:
                        "linear-gradient(to bottom, #E1A6B6, #223850)",
                    }}
                  />
                  <ParallaxLayer
                    offset={0}
                    speed={0}
                    style={{
                      zIndex: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <SimpleImageSlider
                        style={{ maxWidth: "99%", maxHeight: "66%" }}
                        width={this.state.width}
                        height={this.state.height}
                        images={images}
                        zIndex={2}
                        showNavs={true}
                        navStyle={2}
                      />
                    </div>
                  </ParallaxLayer>

                  <ParallaxLayer
                    sticky={{ start: 1.5, end: 2.4 }}
                    speed={1}
                    style={{
                      zIndex: 5,
                      background: "linear-gradient(to top, #E1A6B6, #223850)",
                    }}
                  />
                  <ParallaxLayer
                    sticky={{ start: 3.4, end: 4 }}
                    speed={1}
                    style={{
                      zIndex: 5,
                      background:
                        "linear-gradient(to bottom, #E1A6B6, #223850)",
                    }}
                  />
                  <ParallaxLayer
                    sticky={{ start: 1.1, end: 1.5 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <div className="textboxLeft">
                      <img
                        className="TextboxBackboard"
                        src={Backboard}
                        alt=""
                      />
                      <img
                        className="TextboxBlackboard"
                        src={Blackboard}
                        alt=""
                      />
                      <div className="blackboardTextTitle">Food </div>
                      <div className="blackboardText">
                        {" "}
                        Stop in for lunch and try one of our ice cold cherry
                        limeades, grilled chicke wraps, or a bowel of homeade
                        ice cream! Other fan favorites include malts, freshly
                        made sandwiches, and fountain drinks. City Sundries is
                        know for their homemade ice cream, with new flavors
                        available every week! Come try some before it's gone!{" "}
                      </div>
                    </div>
                  </ParallaxLayer>

                  <ParallaxLayer
                    sticky={{ start: 1.1, end: 2 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={Icecream} className="imgRight" alt="" />
                  </ParallaxLayer>

                  <ParallaxLayer
                    sticky={{ start: 3, end: 3.5 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <div className="textboxRight">
                      <img
                        className="TextboxBackboard"
                        src={Backboard}
                        alt=""
                      />
                      <img
                        className="TextboxBlackboard"
                        src={Blackboard}
                        alt=""
                      />
                      <div className="blackboardTextTitle">Merchandise</div>
                      <div className="blackboardText">
                        We offer unique gifts and merchandise for all ages! Some
                        favorites include women’s apparel, home decor, baby
                        items, toys, candles, cards, and much more!
                      </div>
                    </div>
                  </ParallaxLayer>

                  <ParallaxLayer
                    sticky={{ start: 2.5, end: 3 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={Merch} className="imgLeft" alt="" />
                  </ParallaxLayer>

                  <ParallaxLayer
                    sticky={{ start: 4, end: 4.5 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <div className="textboxLeftBottom">
                      <img
                        className="TextboxBackboard"
                        src={Backboard}
                        alt=""
                      />
                      <img
                        className="TextboxBlackboard"
                        src={Blackboard}
                        alt=""
                      />
                      <div className="blackboardTextTitle">Services</div>
                      <div className="blackboardText">
                        Additional services are also available! Ask about our
                        balloon bouquets, custom tee shirts, and gift wrapping.
                        We also feature an upstairs game room great for parties,
                        groups, or just hanging out!
                      </div>
                    </div>
                  </ParallaxLayer>
                  <ParallaxLayer
                    sticky={{ start: 4.5, end: 5 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={Services} className="imgRightBottom" alt="" />
                  </ParallaxLayer>
                  <ParallaxLayer
                    sticky={{ start: 6, end: 6 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <div className="textboxRightBottom">
                      <img
                        className="TextboxBackboard"
                        src={Backboard}
                        alt=""
                      />
                      <img
                        className="TextboxBlackboard"
                        src={Blackboard}
                        alt=""
                      />
                      <div className="blackboardTextTitle">Contact us!</div>
                      <div className="blackboardText">
                        785-546-2234
                        <br></br>
                        104 N. Washington Street Marquette, Ks 67464
                        <br></br>
                        Hours:
                        <br></br>
                        Tuesday 11-5
                        <br></br>
                        Wednesday 11-5
                        <br></br>
                        Thursday 11-5
                        <br></br>
                        Friday 11-5
                        <br></br>
                        Saturday 11-5
                        <br></br>
                        Closed Sunday and Monday
                        <br></br>
                        <br></br>
                        Visit our Facebook page at facebook.com/citysundries/
                      </div>
                    </div>
                  </ParallaxLayer>
                  <ParallaxLayer
                    sticky={{ start: 5.5, end: 6 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={IMG_8855} className="imgLeftBottom" alt="" />
                  </ParallaxLayer>
                  <ParallaxLayer
                    sticky={{ start: 5.5, end: 6 }}
                    speed={1}
                    style={{
                      zIndex: 6,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <Footer PageTracker={"Home"} />
                  </ParallaxLayer>
                </Parallax>
              </animated.div>
            )}
          </Spring>
        </div>
      );
    } else if (this.state.width > 450 && this.state.width < 600) {
      console.log("please");
      return (
        <Spring
          from={{ marginTop: 0 }}
          to={{ marginTop: 0 }}
          config={{ mass: 10, friction: 100 }}
        >
          {(props) => (
            <animated.div style={props}>
              <div class="WhiteScreen"></div>
              <Parallax pages={11.5} style={{ top: "0", left: "0" }}>
                <ParallaxLayer
                  offset={0.99}
                  speed={1}
                  style={{
                    zIndex: 5,
                    background: "linear-gradient(to top, #E1A6B6, #223850)",
                  }}
                />
                <ParallaxLayer
                  offset={0.995}
                  speed={1}
                  style={{
                    zIndex: 5,
                    background: "linear-gradient(to bottom, #E1A6B6, #223850)",
                  }}
                />
                <ParallaxLayer
                  offset={0}
                  speed={0}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <SimpleImageSlider
                      style={{ maxWidth: "99%", maxHeight: "66%" }}
                      width={this.state.width}
                      height={this.state.height}
                      images={images}
                      zIndex={1}
                      showNavs={true}
                      navStyle={2}
                    />
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  sticky={{ start: 1.5, end: 2.4 }}
                  speed={1}
                  style={{
                    zIndex: 5,
                    background: "linear-gradient(to top, #E1A6B6, #223850)",
                  }}
                />
                <ParallaxLayer
                  sticky={{ start: 3.4, end: 4 }}
                  speed={1}
                  style={{
                    zIndex: 5,
                    background: "linear-gradient(to bottom, #E1A6B6, #223850)",
                  }}
                />
                <ParallaxLayer
                  sticky={{ start: 1.1, end: 1.44 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div className="textboxLeft">
                    <img className="TextboxBackboard" src={Backboard} alt="" />
                    <img
                      className="TextboxBlackboard"
                      src={Blackboard}
                      alt=""
                    />
                    <div className="blackboardTextTitle">Food</div>
                    <div className="blackboardText">
                      {" "}
                      Stop in for lunch and try one of our ice cold cherry
                      limeades, grilled chicke wraps, or a bowl of homeade ice
                      cream! Other fan favorites include malts, freshly made
                      sandwiches, and fountain drinks. City Sundries is know for
                      their homemade ice cream, with new flavors available every
                      week! Come try some before it's gone!{" "}
                    </div>
                  </div>
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 2.4, end: 2.74 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={Icecream} className="imgRight" alt="" />
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 3.7, end: 4.04 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div className="textboxRight">
                    <img className="TextboxBackboard" src={Backboard} alt="" />
                    <img
                      className="TextboxBlackboard"
                      src={Blackboard}
                      alt=""
                    />
                    <div className="blackboardTextTitle">Merchandise</div>
                    <div className="blackboardText">
                      We offer unique gifts and merchandise for all ages! Some
                      favorites include women’s apparel, home decor, baby items,
                      toys, candles, cards, and much more!{" "}
                    </div>
                  </div>
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 5, end: 5.34 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={Merch} className="imgLeft" alt="" />
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 6.3, end: 6.64 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div className="textboxLeftBottom">
                    <img className="TextboxBackboard" src={Backboard} alt="" />
                    <img
                      className="TextboxBlackboard"
                      src={Blackboard}
                      alt=""
                    />
                    <div className="blackboardTextTitle">Services</div>
                    <div className="blackboardText">
                      Additional services are also available! Ask about our
                      balloon bouquets, custom tee shirts, and gift wrapping. We
                      also feature an upstairs game room great for parties,
                      groups, or just hanging out!
                    </div>
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  sticky={{ start: 7.6, end: 7.94 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={Services} className="imgRightBottom" alt="" />
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 8.9, end: 9.24 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div className="textboxLeft">
                    <img className="TextboxBackboard" src={Backboard} alt="" />
                    <img
                      className="TextboxBlackboard"
                      src={Blackboard}
                      alt=""
                    />
                    <div className="blackboardTextTitle">Contact us!</div>
                    <div className="blackboardText">
                      785-546-2234
                      <br></br>
                      104 N. Washington Street Marquette, Ks 67464
                      <br></br>
                      Hours:
                      <br></br>
                      Tuesday 11-5
                      <br></br>
                      Wednesday 11-5
                      <br></br>
                      Thursday 11-5
                      <br></br>
                      Friday 11-5
                      <br></br>
                      Saturday 11-5
                      <br></br>
                      Closed Sunday and Monday
                      <br></br>
                      <br></br>
                      Visit our Facebook page at facebook.com/citysundries/
                    </div>
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  sticky={{ start: 10.2, end: 10.54 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={IMG_8855} className="imgLeftBottom" alt="" />
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 10.2, end: 10.54 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <Footer PageTracker={"Home"} />
                </ParallaxLayer>
              </Parallax>
            </animated.div>
          )}
        </Spring>
      );
    } else {
      console.log("please");
      return (
        <Spring
          from={{ marginTop: 0 }}
          to={{ marginTop: 0 }}
          config={{ mass: 10, friction: 100 }}
        >
          {(props) => (
            <animated.div style={props}>
              <div class="WhiteScreen"></div>
              <Parallax pages={11.5} style={{ top: "0", left: "0" }}>
                <ParallaxLayer
                  offset={0.99}
                  speed={1}
                  style={{
                    zIndex: 5,
                    background: "linear-gradient(to top, #E1A6B6, #223850)",
                  }}
                />
                <ParallaxLayer
                  offset={0.995}
                  speed={1}
                  style={{
                    zIndex: 5,
                    background: "linear-gradient(to bottom, #E1A6B6, #223850)",
                  }}
                />
                <ParallaxLayer
                  offset={0}
                  speed={0}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <SimpleImageSlider
                      style={{ maxWidth: "99%", maxHeight: "66%" }}
                      width={this.state.width}
                      height={this.state.height}
                      images={imagesPhone}
                      zIndex={1}
                      showNavs={true}
                      navStyle={2}
                    />
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  sticky={{ start: 1.5, end: 2.4 }}
                  speed={1}
                  style={{
                    zIndex: 5,
                    background: "linear-gradient(to top, #E1A6B6, #223850)",
                  }}
                />
                <ParallaxLayer
                  sticky={{ start: 3.4, end: 4 }}
                  speed={1}
                  style={{
                    zIndex: 5,
                    background: "linear-gradient(to bottom, #E1A6B6, #223850)",
                  }}
                />
                <ParallaxLayer
                  sticky={{ start: 1.1, end: 1.8 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div className="textboxLeft">
                    <img className="TextboxBackboard" src={Backboard} alt="" />
                    <img
                      className="TextboxBlackboard"
                      src={BlackboardPhone}
                      alt=""
                    />
                    <div className="blackboardTextTitle">Food</div>
                    <div className="blackboardText">
                      {" "}
                      Stop in for lunch and try one of our ice cold cherry
                      limeades, grilled chicke wraps, or a bowel of homeade ice
                      cream! Other fan favorites include malts, freshly made
                      sandwiches, and fountain drinks. City Sundries is know for
                      their homemade ice cream, with new flavors available every
                      week! Come try some before it's gone!{" "}
                    </div>
                  </div>
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 2.4, end: 3.1 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={IcecreamPhone} className="imgRight" alt="" />
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 3.7, end: 4.4 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div className="textboxRight">
                    <img className="TextboxBackboard" src={Backboard} alt="" />
                    <img
                      className="TextboxBlackboard"
                      src={BlackboardPhone}
                      alt=""
                    />
                    <div className="blackboardTextTitle">Merchandise</div>
                    <div className="blackboardText">
                      We offer unique gifts and merchandise for all ages! Some
                      favorites include women’s apparel, home decor, baby items,
                      toys, candles, cards, and much more!
                    </div>
                  </div>
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 5, end: 5.7 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={MerchPhone} className="imgLeft" alt="" />
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 6.3, end: 7 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div className="textboxLeftBottom">
                    <img className="TextboxBackboard" src={Backboard} alt="" />
                    <img
                      className="TextboxBlackboard"
                      src={BlackboardPhone}
                      alt=""
                    />
                    <div className="blackboardTextTitle">Services</div>
                    <div className="blackboardText">
                      Additional services are also available! Ask about our
                      balloon bouquets, custom tee shirts, and gift wrapping. We
                      also feature an upstairs game room great for parties,
                      groups, or just hanging out!
                    </div>
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  sticky={{ start: 7.6, end: 8.3 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={ServicesPhone} className="imgRightBottom" alt="" />
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 8.9, end: 9.6 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div className="textboxLeft">
                    <img className="TextboxBackboard" src={Backboard} alt="" />
                    <img
                      className="TextboxBlackboard"
                      src={BlackboardPhone}
                      alt=""
                    />
                    <div className="blackboardTextTitle">Contact us!</div>
                    <div className="blackboardText">
                      785-546-2234
                      <br></br>
                      104 N. Washington Street Marquette, Ks 67464
                      <br></br>
                      Hours:
                      <br></br>
                      Tuesday 11-5
                      <br></br>
                      Wednesday 11-5
                      <br></br>
                      Thursday 11-5
                      <br></br>
                      Friday 11-5
                      <br></br>
                      Saturday 11-5
                      <br></br>
                      Closed Sunday and Monday
                      <br></br>
                      <br></br>
                      Visit our Facebook page at facebook.com/citysundries/
                    </div>
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  sticky={{ start: 10.2, end: 10.54 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <img src={IMG_8855} className="imgLeftBottom" alt="" />
                </ParallaxLayer>

                <ParallaxLayer
                  sticky={{ start: 10.2, end: 10.54 }}
                  speed={1}
                  style={{
                    zIndex: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <Footer PageTracker={"Home"} />
                </ParallaxLayer>
              </Parallax>
            </animated.div>
          )}
        </Spring>
      );
    }
  }
}
