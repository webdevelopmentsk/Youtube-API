import React from 'react';

const HeaderHome = ({heading}) =>{
    
    return( 
        <div className="header">
            <div className ="background"
            style = {{backgroundImage: 'url(https://scontent.fams1-1.fna.fbcdn.net/v/t31.0-8/21457600_2021084477908047_6214273360370624118_o.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_ohc=keYe6Roel7IAX_qJNpN&_nc_ht=scontent.fams1-1.fna&oh=6395c66dae0c9bff6760c873537d6cf6&oe=5F6B0B11)'
            ,backgroundSize: 'cover', height: '20vh',display: 'flex',justifyContent:'center'}}>
                <h1 style={{alignSelf:'center',color: 'yellow', fontSize: '4rem'}}>{heading}</h1>
            </div>
        </div>
    );
};

export default HeaderHome;