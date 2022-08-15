import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Article(props){
    return(
    <div className="container text-center d-flex align-items-center justify-content-center my-5 mx-auto">
        <div className="card mb-4 rounded-3 shadow-sm" style={{width: "30rem"}}>
        <img src={props.imgdir} className="card-img-top" alt={props.imgname}></img>
        <div className="card-body mx-5">
                    <h5 className="card-title">{props.title}</h5>
            <p className="card-text" >{props.descrip}</p>
                    <button type="button" className="w-70 btn btn-lg btn-warning" onClick={props.btnAccion}>{props.btnTitle}</button>
        </div>
        </div>
    </div>
    );
}

export {Article};