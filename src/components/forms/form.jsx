import React from 'react';

function Form({
    values,
    errors,
    changeHandaler,
    resetHandaler,
    submitHandaler,
    focusHandaler,
    blurHandaler
}) {
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
                        className={errors.name ? 'form-control is-invalid' : 'form-control'}
                        name="name"
                        value={values.name}
                        onChange={changeHandaler}
                        onFocus={focusHandaler}
                        onBlur={blurHandaler}
                    />

                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        id="email"
                        className={errors.email ? 'form-control is-invalid' : 'form-control'}
                        name="email"
                        value={values.email}
                        onChange={changeHandaler}
                        onFocus={focusHandaler}
                        onBlur={blurHandaler}
                    />

                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>

                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input
                        type="text"
                        placeholder="Enter Password"
                        id="pass"
                        className={errors.pass ? 'form-control is-invalid' : 'form-control'}
                        name="pass"
                        value={values.pass}
                        onChange={changeHandaler}
                        onFocus={focusHandaler}
                        onBlur={blurHandaler}
                    />

                    {errors.pass && (<div className="invalid-feedback">{errors.pass}</div>)}
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>

        </>
    );
}

export default Form;