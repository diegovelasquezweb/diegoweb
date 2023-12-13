
import React, { useEffect } from 'react';
import * as THREE from 'three';



const SpaceBackground = () => {
  useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();


    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 });

    const particlesCount = 1000;
    const particlesPositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      particlesPositions[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Configuración de la cámara y renderer
    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Manejar el scroll para el efecto de parallax
    const handleScroll = () => {
      const scrolled = window.scrollY;
      particles.position.y = -scrolled * 0.005; // Ajusta el factor según sea necesario
    };

    window.addEventListener('scroll', handleScroll);

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Actualizar lógica de animación aquí

      renderer.render(scene, camera);
    };

    // Llama a la función de animación
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default SpaceBackground;
