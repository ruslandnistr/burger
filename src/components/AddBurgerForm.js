import React from 'react';
class AddBurgerForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  
  

createBurger = event => {
    event.preventDefault();
    const burger = {
        name: this.nameRef.current.value,
        price: parseFloat(this.priceRef.current.value || 0),
        status: this.statusRef.current.value,
        desc: this.descRef.current.value,
        image: this.imageRef.current.value,
}
   this.props.addBurger(burger);
   event.currentTarget.reset();
}

    render() {
        return(
            <form className='burger-edit' onSubmit={this.createBurger} >
               <input ref={this.nameRef} name='name' type='text' placeholder='Name' autoComplete='of'/>
               <input ref={this.priceRef} name='price' type='text' placeholder='Price' autoComplete='of'/>
                    <select ref={this.statusRef} name='status' className='satus'>
                        <option value='available'>Доступно</option> 
                        <option value='unavailable'>Забрати з Меню</option>   
                    </select>
               <textarea ref={this.descRef} name='desc' placeholder='Desc'/>
               <input ref={this.imageRef} name='image' type='text' placeholder='Image' autoComplete='of'/>
                <button type='submit'> + Добавити в Меню</button>
            </form>
        );
    }
}

export default AddBurgerForm;