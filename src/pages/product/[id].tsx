import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {

  const { query } = useRouter()

  console.log(query)


  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>345</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eum ipsam eius itaque doloribus, numquam impedit et cum reprehenderit officia quaerat temporibus dolor quod aperiam rem autem saepe earum totam?</p>

        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}