import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Item = [
{
id: 1,  
img:'https://developverse.netlify.app/img/img1.jpg',
title: 'details'
},

{
  id: 2,
  img: 'https://developverse.netlify.app/img/img1.2.jpg',
  title: 'details'
},

{
  id: 3,
  img: 'https://developverse.netlify.app/img/img4.jpg',
  title: 'details'

}
];


function ItemList()
{
 return <section>
      {Item.map((prop) => {
      const { id, img, title } = prop
          return <Project item={prop} ></Project>  /*all those "item"   ?*/
          }
      )    
      }     
 </section>; 
}


const Project = (props) =>
{
const {id, img, title} = props.item;  
return <article>

       {/* <Item/> */} {/*Not working. Cant return object==> Try object destructuring*/}

         <img className="projectImg" src={img} alt=''/>
         <h1>{title}</h1>  
  
       </article>
}


ReactDOM.render( 
<ItemList />, 
document.getElementById('root')
);


