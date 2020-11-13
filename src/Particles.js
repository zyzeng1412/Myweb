import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
  state = { height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      height: `${window.document.body.offsetHeight}px`
    });
  };
  render() {
    return (
      <Particles
        {...this.state}
        params={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#856BC1"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#aaa"
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 2,
                size_min: 1,
                sync: false
              }
            },
            line_linked: {
              enable_auto: true,
              distance: 150,
              color: "#aaa",
              opacity: 0.4,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            },
            move: {
              enable: true,
              speed: 0.15,
              direction: "right",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                "mode": "grab"
              },
              onclick: {
                enable: true,
                "mode": "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
    );
  }
}

export default Canvas;
