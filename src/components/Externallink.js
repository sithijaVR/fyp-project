import React from 'react';
import './ExternallikStyle.css'; 

const ExternalLinksList = () => {
  const externalLinks = [
    { text: 'Single acting cylinder', url: 'https://ip.festo-didactic.com/InfoPortal/DataSheets/INT/152887_en_v2.0_Single_acting_cylinder.pdf' },
    { text: 'Photoelectric sensor', url: 'https://cpi.com.ar/info_productos/pdf/E3Z-F.pdf' },
    { text: 'DC geared motors', url: 'https://www.nbleisonmotor.com/15W-Dc-Gear-Motor-pd6004204.html' },
    { text: 'PLC S7 1200', url: 'https://mall.industry.siemens.com/mall/en/ww/Catalog/Product/?mlfb=6ES7214-1BG40-0XB0' },
   
  ];

  return (
    <div className="link-bar">
      
      <ul>
        {externalLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExternalLinksList;