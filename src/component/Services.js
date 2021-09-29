import React, { useState } from "react"
import CardData from './ServiceApi'
import "./Services.css"
function Services() {
    const [card, setCard] = useState(CardData)
    return (
        <>
            <div className="services_comp_main">
                <div className="services_comp">
                    <div className="services_cont">
                        <h1>Services</h1>
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nam, repellat odio praesentium laboriosam aliquam temporibus suscipit ad exercitationem laborum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil quae officia. Sed deleniti facilis amet sit dicta? Repellat in voluptate neque maxime dolor! Autem totam dolorem laboriosam aperiam eligendi, provident, dolorum, blanditiis quasi accusantium saepe neque sed sunt exercitationem ex ab excepturi magni hic voluptatem expedita tempore suscipit perferendis sed sunt exercitationem ex ab excepturi magni hic voluptatem expedita tempore suscipit perferendis?</p>
                    </div>
                    <img src="./media/service.png" alt="" />
                </div>
                
                <div className="card_content">
                {
                    card.map((item)=>{
                        return(
                            <>
                                <div className="card" key={item.id}>
                                    <i className={item.logo}></i>
                                    <h2>{item.title} <span>{item.title1}</span></h2>
                                    <p>{item.description}</p>
                                </div>
                            </>
                        )
                    })
                }
                </div>
                <div className="faslity_comp">
                    <img src="./media/faslity.png" alt="" />
                    <div className="faslity_comp_content">
                        <h1>faslity</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit facilis</h4>
                        <ul>
                            <li><span>swiming pool </span>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li><span>free wifi </span>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li><span>steam bath </span>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li><span>energy drinks </span>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </div>
                               
            </div>
        </>
    )
}

export default Services
