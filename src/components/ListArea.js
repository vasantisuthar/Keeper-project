import { useState } from "react";
const ListArea = () => {

    const[inputText, setInputText] = useState("");
    const[addItems, setItems] = useState([]);
    
    function handleChange(e){
        e.preventDefault();
        const newValue = e.target.value;
        setInputText(newValue);
    }
    
    function addListItem(e){
        e.preventDefault();
        if(e.keyCode===13){
            setItems(prevValue => {
                return [...prevValue,inputText]
            })
            console.log("clicked");
        }
        
    }
    
    return ( 
        <div>
        <form className="create-note">
        <input
          required
          name="content"
          onChange={handleChange}
          onKeyUp = {addListItem}
          placeholder="List item"
        /> 
        </form>
            <div>
                <p>{addItems}</p>
            </div>
        </div>
     );
}
 
export default ListArea;