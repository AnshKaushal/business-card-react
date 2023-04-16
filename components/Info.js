import React from "react";

export default function Info(){
    return(
        <div className="info">
           <img src="https://anshkaushal.codes/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-bg-3000.ddf4cdb5.jpg&w=1080&q=75"/>
           <h1>Ansh Kaushal</h1>
           <p>Full stack developer</p>
           <a href="https://anshkaushal.codes" target="_blank">anshkaushal.codes</a>
           <div className="buttons">
           
           <button className="mail"> <img src="../icons/mail.svg"/> Email</button>
           <button className="linkedin"> <img src="../icons/linkedin.svg"/> LinkedIn</button>
           
           </div>
        </div>
    )
}