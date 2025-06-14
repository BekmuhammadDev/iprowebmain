"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import yeru from "../assets/yerdiusto.jpg"; // Kunduzgi yer rasmi
import yer from "../assets/yeror.jpg";      // Tungi yer rasmi

const CreativeEarth = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const textureLoader = new THREE.TextureLoader();
    const dayMap = textureLoader.load(yeru);
    const nightMap = textureLoader.load(yer);

    const earthMaterial = new THREE.MeshPhongMaterial({
      map: dayMap,
      emissiveMap: nightMap,
      emissive: new THREE.Color(0x111133),
      emissiveIntensity: 0.4,
      shininess: 5,
    });

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(2.5, 64, 64),
      earthMaterial
    );
    earth.position.x = 1.2;
    scene.add(earth);

    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: textureLoader.load("https://i.imgur.com/JLFp6Ws.png"),
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(2.53, 64, 64), cloudMaterial);
    earth.add(clouds);

    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.9 - dot(vNormal, vec3(0, 0, 1.0)), 6.0);
          gl_FragColor = vec4(0.2, 0.5, 1.0, 1.0) * intensity;
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(2.7, 64, 64),
      atmosphereMaterial
    );
    atmosphere.position.x = 1.2;
    scene.add(atmosphere);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 3000;
    const starVertices = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starVertices[i] = (Math.random() - 0.5) * 300;
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.001;
      clouds.rotation.y += 0.0015;
      stars.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.5 }
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh] bg-black overflow-hidden">
      {/* Canvas — Yer shari */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Matn qismi — Responsiv dizayn */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-4 sm:left-8 md:left-12 -translate-y-1/2 text-white z-10 px-2"
      >
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 leading-snug">
          Pro Earth Experience
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md text-gray-300">
          3D Yer, atmosfera va yulduzlar bilan — IT kompaniyangiz uchun zamonaviy vizual tajriba!
        </p>
      </div>
    </div>
  );
};

export default CreativeEarth;
