import React from 'react';
import Card from './card';

const SectionCardList = props =>{

    return( 
        <div className="container" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1505312926838-645f295a20e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80)', padding: '4rem 1rem'}}>
            <h2 className="ui huge header" style={{fontSize: '3rem', margin: '2rem', color: 'yellow'}} > {props.sectName} </h2>
            <div style={{display: 'flex', flexWrap:'wrap',alignItems:'center' ,justifyContent: 'space-around'}}>
            {props.inputData.map(obj => (
            <Card key={obj.id} obj={obj}/>
            ))}
            </div>
        </div>
    );
};

export default SectionCardList;