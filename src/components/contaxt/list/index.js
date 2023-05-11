import React from 'react'


const List = ({ items }) => {

  return (
    <div>
      Kullanıcı Adına ve Numaraya göre Arama Yapınız
      <br />

<input
    placeholder="Arama Yapınız" required />
<br /><br />
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.Name} {item.phone_number}</li>
        
      ))}
   </ul>
    
    </div>
  );
};

export default List
