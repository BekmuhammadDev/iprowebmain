import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function StarParticles() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#0b0f19" }, // Orqa fon rangi
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    move: { speed: 1, direction: "none", outMode: "out" },
                },
                detectRetina: true,
            }}
        />
    );
}
