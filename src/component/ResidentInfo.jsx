import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ ResidentList }) => {

    const [residentCard, setResidentCard] = useState({})

    useEffect(() => {
        axios
            .get(ResidentList)
            .then(res => setResidentCard(res.data))

    }, [])

    console.log(residentCard)

    return (
        <div className='cardGrid'>
            <div className='card'>
                <div>
                    <img src={residentCard.image} alt="" />
                </div>
                <div>
                    <div>
                       <b>{residentCard?.name}</b> 
                    </div>
                    <div>
                        {residentCard.status}
                    </div>
                    <div>
                    <b style={{ color: "#6F7412"}}>Origen:</b>    <br /> {residentCard.origin?.name}
                    </div>
                    <div>
                    <b style={{ color: "#6F7412"}}>Episodies where Appear:</b>    <br />{residentCard.episode?.length}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ResidentInfo;