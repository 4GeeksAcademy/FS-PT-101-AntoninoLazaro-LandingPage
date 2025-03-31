import React from "react";

export const Hero = () => {
    return (
        <div className="p-5 text-center bg-image rounded-bottom heroClas">
            <div className="mask p-3 bg-dark bg-opacity-25">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Heading</h1>
                        <h4 className="mb-3">Subheading</h4>
                        <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
                    </div>
                </div>
            </div>
        </div>
    );
}