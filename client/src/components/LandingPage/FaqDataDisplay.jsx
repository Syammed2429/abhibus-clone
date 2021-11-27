import React from 'react';

const FaqDataDisplay = ({ dat, handleShowData, handleHideData }) => {

    const [status, setStatus] = React.useState(false)

    return (
        <>
            <div>
                <div>{dat.q1}</div>
                <div>{dat.a1}</div>

                <div>{dat.q2}</div>
                <div>{dat.a2}</div>

                <div>{dat.q3}</div>
                <div>{dat.a3}</div>

                <div>{dat.q4}</div>
                <div>{dat.a4}</div>

                <div>{dat.q5}</div>
                <div>{dat.a5}</div>

                <div>{dat.q6}</div>
                <div>{dat.a6}</div>

                <div>{dat.q7}</div>
                <div>{dat.a7}</div>

                <div>{dat.q8}</div>
                <div>{dat.a8}</div>

                <div>{dat.q9}</div>
                <div>{dat.a9}</div>

                <div>{dat.q10}</div>
                <div>{dat.a10}</div>

                <div>{dat.q11}</div>
                <div>{dat.a11}</div>

                <div>{dat.q12}</div>
                <div>{dat.a12}</div>

                <div>{dat.q13}</div>

                <div>{dat.a14}</div>

                <div>{dat.a15}</div>


                <div
                    onClick={() => {
                        setStatus(prev => !prev)
                        status ? handleShowData() : handleHideData()
                    }}
                    className="d-flex justify-content-end">
                    {status ? "View All FAQs" : "Hide FAQs"}
                </div>

            </div>
        </>
    );
}

export { FaqDataDisplay }