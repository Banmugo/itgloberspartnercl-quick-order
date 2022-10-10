import React, { useState, useEffect } from "react"
import { useLazyQuery, useMutation } from "react-apollo";
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css'

const QuickOrder = ({ blockCLass }: { blockCLass: string }) => {

  const container= generateBlockClass(styles.container, blockCLass),
        title = generateBlockClass(styles.title, blockCLass),
        form = generateBlockClass(styles.form, blockCLass),
        labelName = generateBlockClass(styles.labelName, blockCLass),
        btnPay = generateBlockClass(styles.btnPay, blockCLass)



  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("")

  const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT) 
  const [addToCart] = useMutation(UPDATE_CART)

  const handleChange = (e: any) => {
    setInputText(e.target.value)
    console.log("input", inputText)
  }

  useEffect(() => {
    console.log("el resultado de mi producto es:", product, search)
    if (product) {
      let skuId = parseInt(inputText)
      addToCart({
        variables: {
          salesChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
        .then(() => {
          window.location.href = "/checkout"
        })
    }
  }, [product, search])

  const addProductToCart = () => {
    getProductData({
      variables: {
        sku: inputText
      }
    })
  }

  const searchProduct = (e: any) => {
    e.preventDefault();
    if (!inputText) {
      alert("Por favor ingrese un ID valido.")
    } else {
      console.log("estamos buscando algo", inputText);
      setSearch(inputText)
      addProductToCart()
    }
  }
  return <div className={container}>
    <h2 className={title}>Compra rápida en Dafiti</h2>
    <form onSubmit={searchProduct} className={form}>
      <div>
        <label htmlFor="sku" className={labelName}>Ingrese el número de SKU</label>
        <input id="sku" type="text" onChange={handleChange} placeholder="ej: 2" />
      </div>
      <input type="submit" value="Ir a pagar" className={btnPay}/>
    </form>
  </div>
}

export default QuickOrder