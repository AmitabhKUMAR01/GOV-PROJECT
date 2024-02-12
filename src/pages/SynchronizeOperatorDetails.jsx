import React from 'react'
import './SynchronizeOperatorDetails.scss'
const SynchronizeOperatorDetails = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Form submitted');
    };

    return (
        <div className="sync-body">
            <div className="sync-main">
            <div className="sync-sub-zero">Synchronize Operator Details</div>
                <div className='sync-hero'>
                    <div className="one-main">

                        <div className="sync-sub-one one">
                            <div>

                                <label htmlFor="">Register</label>
                                <input type="text" className='' />
                            </div>
                            <div>

                                <label htmlFor="">station id</label>
                                <input type="text" />
                            </div>
                            <div>

                                <label htmlFor="">center name

                                    <span>*</span>
                                </label>
                                <input type="text" />
                            </div>
                        </div    >
                        <div className="sync-sub-two two">
                            <div>

                                <label htmlFor="">Enrolement Agency</label>
                                <input type="text" className="" />
                            </div>
                            <div>

                                <label htmlFor="">Center Type

                                    <span>*</span>
                                </label>
                                <select name="" id="">
                                    <option value="">
                                        permanent
                                    </option>
                                    <option value="">option2</option>
                                    <option value="">option3</option>
                                </select>
                            </div>
                            <div >

                                <label htmlFor="">Center ID</label>
                                <input type="text" className="" />
                            </div>
                        </div>
                    </div>
                    <div id='center-address' className='three'>

                        <label htmlFor="">center Address

                            <span>*</span>
                        </label>
                        <input type="text" id='center' />
                    </div>
                    <div className="four-main">

                        <div className="four">

                            <div>

                                <label htmlFor="">Village/Town
                                    <span>*</span>

                                </label>
                                <input type="text" />
                            </div>
                            <div>

                                <label htmlFor="">District

                                    <span>*</span>
                                </label>
                                <input type="text" />
                            </div>
                            <div>

                                <label htmlFor="">Pin Code

                                    <span>*</span>
                                </label>
                                <input type="text" />
                            </div>
                            <div>

                                <label htmlFor="">Operator Name</label>
                                <input type="text" />
                            </div>
                            <div>

                                <label htmlFor="">Operator Mobile</label>
                                <input type="text" />
                            </div>
                            <div>

                                <label htmlFor="">Latitude</label>
                                <input type="text" />
                            </div>
                            <div>

                                <label htmlFor="">Altitude</label>
                                <input type="text" />
                            </div>

                        </div>

                        <div className="five">

                            <div>

                                <label htmlFor="">
                                    Sub District
                                    <span>*</span>
                                </label>
                                <input type="text" className="" />
                            </div>

                            <div>

                                <label htmlFor="">
                                    State
                                    <span>*</span>
                                </label>
                                <input type="text" className="" />
                            </div>
                            <div>

                                <label htmlFor="">Post Office

                                    <span>*</span>
                                </label>
                                <input type="text" className="" />
                            </div>
                            <div>

                                <label htmlFor="">Operator ID</label>
                                <input type="text" className="" />
                            </div>
                            <div>

                                <label htmlFor="">Operator UID</label>
                                <input type="text" className="" />
                            </div>
                            <div>

                                <label htmlFor="">
                                    Logitude
                                </label>
                                <input type="text" className="" />
                            </div>
                            <div>

                                <label htmlFor="">Whitelisted for BE

                                    <span>*</span>
                                </label>
                                <select >
                                    <option value="">true</option>
                                    <option value="false">false</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default SynchronizeOperatorDetails