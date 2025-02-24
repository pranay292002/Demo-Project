
import { useParams } from 'react-router'
import React, { useEffect , useState} from 'react'
import Productcard from '../components/ProductCard'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data)
        console.log(data)
    }
    useEffect(() => {  
        fetchProduct()

    }  , [id])
  return (<>
    <h1 className='text-lg font-bold m-5'>ProductDetails</h1>

<div onClick={handleOpen}>

<Productcard img={product.image} title={product.title} price={product.price} id={id} />
</div>
  

   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style} className='bg-zinc-800 p-10  text-zinc-200'>
          <h2 id="modal-modal-title" className='font-bold text-center m-2'>
           {product.title}
          </h2>
          <p id="modal-modal-description " className='text-' >
             {product.description}

             <p className='font-bold text-center m-5'> Price: {product.price}$ </p> 
          </p>
        </div>
      </Modal>
  </>
  
  )
}

export default ProductDetails