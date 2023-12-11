import React from 'react';
import {fetchData} from '@/app/data';
export default async function Page() {
    const {jsonData} = await fetchData();
    return(
        <div>
        <h1>Json data</h1>
        {jsonData ? (
            <body>
            {jsonData.map((item:any, index:any) => (
                <div key={index}>
                    <p>{item.startDate}</p>
                    <p>{item.endDate}</p>
                    <p>{item.price}</p>
                </div>
            ))}
            </body>
        ):<p>Loading...</p>}
        </div>
    )
}