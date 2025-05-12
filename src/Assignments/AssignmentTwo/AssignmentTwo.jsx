import React from "react";
import { useState } from "react";
import "./AssignmentTwo.css";

// Box Component that receives title and content as props
function Box({ title, content , hoverColor}) {
  const [isHovered, setIsHovered] = useState(false);

  const boxStyle = {
    backgroundColor: isHovered ? hoverColor : '#f0f0f0', // Change color on hover
    padding: '16px',
    borderRadius: '8px',
    margin: '10px',
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
    cursor: 'pointer', // Make it clear the item is clickable
  };

  // preserved
  return (
    <div className="box" style={boxStyle}
    onMouseEnter={() => setIsHovered(true)}  
    onMouseLeave={() => setIsHovered(false)}>
      <h2 className="box-title">{title}</h2>
      <p className="box-content">{content}</p>
    </div>
  );
}

function AssignmentTwo() {
  const data = [
    {
      title: "Bam Aquino",
      content: 'Paolo Benigno "Bam" Aguirre Aquino IV ([bɛˈnigno ʔaˈɡirɛ ʔaˈkino], born May 7, 1977) is a Filipino politician and social entrepreneur who served as a senator from 2013 to 2019. Born in the Aquino family, he graduated from the Ateneo de Manila University as valedictorian.',
      hoverColor: "#F89CC1"
    },
    {
      title: "Kiko Pangilinan",
      content: 'Francis Pancratius "Kiko" Nepomuceno Pangilinan ([paŋɪˈlinan]; born August 24, 1963)[1] is a Filipino lawyer, politician, and farm owner who served as a senator from 2001 to 2013 and again from 2016 to 2022. He was Senate Majority Floor Leader from 2004 to 2008.',
      hoverColor: "#029845"
    },
    {
      title: "Heidi Mendoza",
      content: 'Heidi Reyes Lloce-Mendoza (born November 3, 1962)[1][2] is a Filipina auditor, Certified Public Accountant, and former civil servant. She served as Under-Secretary-General of the United Nations Office of Internal Oversight Services (OIOS) from 2015 to 2019.',
      hoverColor: '#9264A5'
    },
    {
      title: "Luke Espiritu", 
      content: 'Renecio "Luke" Santos Espiritu Jr. (born October 18, 1974) is a Filipino labor leader, lawyer, and political figure. He serves as the president of Bukluran ng Manggagawang Pilipino and is a board of trustees member of the Freedom from Debt Coalition. In 2024, he formalized his bid for the Philippine Senate in the 2025 elections.'
    },
    {
      title: "Danilo Ramos", 
      content: 'Danilo "Ka Daning" Ramos (born September 17, 1956) is a peasant activist from the Philippines who is the Chairperson of the militant group Kilusang Magbubukid ng Pilipinas (KMP), the largest farmers association in the country. In the 2025 Philippine Senate election, he is running under Makabayan.'
    },
    {
      title: "Ronnel Arambulo",
      content: 'Ronnel Gondraneos Arambulo (born May 18, 1976) is a Filipino fisherman, environmentalist, and activist who is currently vice chaiperson of Pambasang Lakas ng Kilusang Mamamalakaya Pilipinas (PAMALAKAYA, “National Force of Fisherfolk Movement in the Philippines”).'
    }, 
    {
      title: "Ka Leody De Guzman",
      content: 'Leodegario "Ka Leody" Quitain de Guzman (Tagalog pronunciation: [ˈljodɪ de ɡusˈman]; born July 25, 1959) is a Filipino socialist labor rights activist who ran for president in the 2022 Philippine presidential elections, under the Partido Lakas ng Masa.'
    }
  ]

  return (
    <div className="title-container">
      <h1>My Top Senatorial Candidates</h1>
      <p>
        A list of my top senators I see that will change the Philippine Politics and Government
      </p>
      <div className="box-container">
        {data.map((item, index) => (
          <Box key={index} title={item.title} content={item.content} hoverColor={item.hoverColor}/>
        ))}
      </div>
    </div>
  )
}

// function AssignmentTwo() {
//   const data = [
//     {
//       title: "Portfolio Website",
//       content:
//         "A personal website to showcase my projects, skills, and experience. It will include an interactive UI, blog section, and a contact form.",
//     },
//     {
//       title: "Chess Learning Website",
//       content:
//         "An interactive 3D chess website built with Three.js that teaches users how to play chess through tutorials, challenges, and AI-driven practice games.",
//     },
//     {
//       title: "Startup Website",
//       content:
//         "A professional website for my team and I to showcase our freelance work, services, and completed projects. It will include a portfolio section and a client contact form.",
//     },
//   ];

//   return (
//     <div className="title-container">
//       <h1>Top 3 Major Projects for 2025</h1>
//       <p>
//         Learn how to pass and manage data between parent and child components
//         using props. This exercise focuses on modular, reusable components by
//         dynamically rendering project details inside child components.
//       </p>
//       <div className="box-container">
//         {data.map((item, index) => (
//           <Box key={index} title={item.title} content={item.content} />
//         ))}
//       </div>
//     </div>
//   );
// }

export default AssignmentTwo;
