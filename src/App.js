import './bootstrap.css';
import Header from './Header'
import Footer from './Footer';
import Body from './Body';
import AddList from './AddList';
import { useState } from 'react';
function App() {
  const [Lists ,SetList]=useState(JSON.parse(localStorage.getItem('listss')));

   const handleCheck =(id)=>{
       const list=Lists.map((list)=>list.id === id ? {...list,
        checked: !list.checked} :list)
        SetList(list);
        localStorage.setItem('listss',JSON.stringify(list));
                 }  

        const addnew=(newlist)=>{
          const id=Lists.length ? Lists[Lists.length -1].id + 1 : 1;
          const mynewlist={id,checked:false ,newList};
          const ListItem=[...Lists,mynewlist];
          SetList(ListItem);
          localStorage.setItem('listss',JSON.stringify(ListItem));
        }

   const [newList,setNewList]=useState('');

   const handleSubmit=(e)=>{
  
    if(!newList) return;
     addnew(newList);
     setNewList('');
       
   }

   const handleDelete =(id)=>{
    const ListItems=Lists.filter((list)=> list.id !== id);
    SetList(ListItems);
    localStorage.setItem('listss',JSON.stringify(ListItems));
   }

  return (
    <div className="App">
       <Header />
       <AddList
          handleSubmit={handleSubmit}
          setNewList={setNewList}
        />
       <Body 
         Lists={Lists}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
       />
       <Footer />
    </div>
  );
}

export default App;
