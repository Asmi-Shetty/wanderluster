
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Add canvas to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create a sphere to represent a globe
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    
    // Create a basic blue material for the globe
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0077be,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // Add some floating particles around the globe to represent travel destinations
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the globe
      sphere.rotation.y += 0.002;
      
      // Rotate the particles
      particlesMesh.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current?.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return <div ref={mountRef} id="threeCanvas" />;
};

export default ThreeScene;
