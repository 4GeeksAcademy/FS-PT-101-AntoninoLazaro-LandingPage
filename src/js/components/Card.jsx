import React from "react";


const style = () => {
    return { width: '18rem' };
}

export const Card = () => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-12 py-4 px-2 d-flex justify-content-center">
            <div className="card" style={style()}>
                <img src="https://picsum.photos/400/325" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};