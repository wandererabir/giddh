import React,{useState,useEffect} from "react";

const ContactForm = () => {
const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: ''
}

var[values,setValues] = useState(initialFieldValues)

const handleInputChange = e => {
    var {name, value} = e.target
    setValues({
        ...values,
        [name]: value
    })
}


    return ( 
        <form autoComplete="off">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName"
                    value ={values.fullName}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-mobile-alt"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Mobile" name="mobile"
                    value ={values.mobile}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="email"
                    value ={values.email}
                    onChange={handleInputChange}
                />

                <div className="form-group">
                    <textarea className="form-control" placeholder="Added by" name="addedBy"
                        value ={values.addedBy}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">
                    <input type="submit" value="Save" className="btn btn-primary btn-block"/>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;