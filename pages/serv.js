import React from 'react'
import Record from "../json/record.json"
import Image from 'next/image'

function Serv() {
    return (
        <>
        <div>
            {
                Record && Record.map(record => {
                    return(
                        <div className='box' key={record.id}>
                            <strong>{record.ServiceName}</strong>
                            {record.Description}
                            <Image src={record.ServiceImage} width={100} height={100}/>
                            </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Serv