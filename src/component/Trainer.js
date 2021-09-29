import React, { useState } from 'react'
import TrainerApi from './TrainerApi'
import "./Trainer.css"
function Trainer() {
    const [trainer, setTrainer] = useState(TrainerApi)
    return (
        <>
        <div className="trainer_comp">
            <h1>Trainers</h1>
            <div className="trainer_comp_content">
                {
                    trainer.map((item)=>{
                        return(
                            <>
                                <div className="trainer" key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div className="trainer_description">
                                        <h4>{item.name}</h4>
                                        <p>{item.work}</p>
                                        <div className="social_media">
                                            <a href={item.fbLink} target="_blank"><i className={item.fb}></i></a>
                                            <a href={item.instaLink} target="_blank"><i className={item.insta}></i></a>
                                            <a href={item.twiterLink} target="_blank"><i className={item.twiter}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Trainer
