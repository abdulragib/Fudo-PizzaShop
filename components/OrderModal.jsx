import {Modal,useMantineTheme} from '@mantine/core'
import React,{useState} from 'react';
import css from '../styles/orderModal.module.css'
import { createOrder } from '../lib/orderHandler';

export default function OrderModal ({opened,setOpened,PaymentMethod}) {
    const theme=useMantineTheme();
    const [FormData,setFormData]=useState({});
    console.log(FormData)

    const handleInput = (e) =>{
        setFormData({...FormData, [e.target.name]: e.target.value})
    }

    const total=typeof window !== 'undefined' && localStorage.getItem('total')

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const id = await createOrder({...FormData,total,PaymentMethod})
        console.log("Order placed",id);
    }
  return(
    <Modal overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9]: theme.colors.gray[2]}
     overlayOpacity={0.55}
     overlayBlur={3}
     opened={opened}
     onClose={()=>setOpened(null)} 
    >
      {/* Modal Content */}
      <form onSubmit={handleSubmit} className={css.formContainer}>
          <input onChange={handleInput} type='text' name="name" required placeholder='Name'/>
          <input onChange={handleInput} type='text' name="phone" required placeholder='Phone Number'/>
          <textarea onChange={handleInput} type='text' name="address" rows={3} required placeholder='Address'></textarea>
          <span>
                You will pay <span>$ {total}</span> on delivery
          </span>

          <button type="submit" className='btn'>Place Order</button>
      </form>
    </Modal>
  )
}
