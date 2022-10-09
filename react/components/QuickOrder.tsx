import React, { useState, useEffect } from "react"
import { useLazyQuery, useMutation } from "react-apollo";
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'

const QuickOrder = () => {
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
          window.location.href = "checkout"
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
  return <div>
    <h2>Compra rápida en Clone Dafiti</h2>
    <form onSubmit={searchProduct}>
      <div>
        <label htmlFor="sku">Ingrese el número de SKU</label>
        <input id="sku" type="text" onChange={handleChange} />
      </div>
      <input type="submit" value="Añadir al carrito" />
    </form>
  </div>
}

export default QuickOrder