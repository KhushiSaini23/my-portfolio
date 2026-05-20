import {motion} from "framer-motion";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";


const testimonials = [
  {
    name: "Khushi Saini",
    role: "ReactJS Developer Certification",
    review:
      "Completed advanced ReactJS training focused on building responsive user interfaces, reusable components, and modern frontend web applications.",
    image: m1,
  },

  {
    name: "Khushi Saini",
    role: "Web Technologies Certification",
    review:
      "Successfully completed Web Technologies certification covering HTML, CSS, responsive layouts, and modern website development fundamentals.",
    image: m2,
  },

  {
    name: "Khushi Saini",
    role: "JavaScript Development Certification",
    review:
      "Earned JavaScript certification with practical experience in DOM manipulation, ES6 concepts, functions, and interactive web development.",
    image: m2,
  },

  {
    name: "Khushi Saini",
    role: "Node.js Fundamentals Certification",
    review:
      "Completed Node.js fundamentals training including backend development basics, APIs, routing, and server-side application concepts.",
    image: m1,
  },
];



export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10  max-w-6xl w-full">
{testimonials.map((t,i) => (
    <motion.div
    key={t.name +1}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: i * 0.2}}
    viewport={{ once: true }}  
    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500
    hover:scale-105 hover:-rotate-1"  >

<img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
loading="lazy"
/>

<p className= "text-gray-200 italic mb-4">
    {t.review}
</p>

<h3 className="text-lg font-semibold">
    {t.name}
</h3>

<p className="text-sm text-gray-400">
    {t.role}
</p>

    
</motion.div>


))}











</div>


    </section>
  );
}