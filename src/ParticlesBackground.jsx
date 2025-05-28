import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "transparent"
          },
        },
        particles: {
          color: {
            value: "#ffb6c1"
          },
          links: {
            color: "#ff69b4",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: {
              default: "bounce"
            },
          },
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 5 }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
