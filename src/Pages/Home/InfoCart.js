import React from 'react';

const InfoCart = ({ img }) => {
    return (
        <div class="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCart;