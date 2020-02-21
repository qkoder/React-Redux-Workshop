import React from 'react';

function Form({ values = {}, changeHandaler,resetHandaler, submitHandaler }) {
    return (
        <>

            <form onSubmit={submitHandaler} onReset={resetHandaler}>
                <h3>Please fill the form</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        id="name"
                        className="form-control"
                        name="name"
                        value={values.name}
                        onChange={changeHandaler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        id="email"
                        className="form-control"
                        name="email"
                        value={values.email}
                        onChange={changeHandaler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input
                        type="text"
                        placeholder="Enter Password"
                        id="pass"
                        className="form-control"
                        name="pass"
                        value={values.pass}
                        onChange={changeHandaler}
                    />
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>

        </>
    );
}

export default Form;