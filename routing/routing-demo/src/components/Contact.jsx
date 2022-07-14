import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = props => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

    const sendSurvey = (e) => {
        e.preventDefault();
        console.log(name, comment);
        navigate("/about");
    }

    return (
        <form className="w-50 m-auto" onSubmit={sendSurvey}>
            <div className="form-group">
                <label className="form-label">Your Name:</label>
                <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="form-group">
                <label className="form-label">Your Comment:</label>
                <textarea className="form-control" onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
            </div>
            {/* Just to show validations */}
            <div className="form-group">
                <label htmlFor="password" className="form-label">Password:</label>
                <input className="form-control" type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="form-group">
                <label htmlFor="confirm" className="form-label">Confirm Password:</label>
                <input className="form-control" type="text" onChange={(e) => setConfirm(e.target.value)} value={confirm} />
            </div>
            { password === confirm ? "" : <p className="text-danger">Passwords must match!</p>}
            <div className="form-group mt-2">
                <input className="btn btn-warning" type="submit" value="Submit Comment" />
            </div>
        </form>
    );
}

export default Contact;