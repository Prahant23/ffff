import React, { useState } from 'react';

const Product = ({ id, name, price, addToCart }) => {

    useEffect(() => {        

        let finalSizeArray = props.product.variants[0].options.map(option => {
            let sizeInfo = {}

            sizeInfo.key = option.name
            sizeInfo.text = option.name
            sizeInfo.value = option.id

            return sizeInfo
        })

        setSizes(finalSizeArray)
    }, [])

    const [variantInfo, setVariantInfo] = useState()

    const handleSize = (e, {value}) => {
      setVariantInfo({[props.product.variants[0].id]: value})
}



const ShoppingCart = ({ cart }) => {
  return (
    <Card>
    <Image src={props.product.media.source} />
    <Card.Content>
        <Card.Header>{props.product.name}</Card.Header>
        <Card.Meta>{props.product.price.formatted_with_symbol}</Card.Meta>
        <Card.Description>{props.product.description.replace(/(<([^>]+)>)/ig,"")}</Card.Description>
        <Dropdown
            className="sizes-drop"
            onChange={handleSize}
            value={sizes.text}
            fluid
            placeholder='Select Size'
            selection
            options={sizes}
        />
    </Card.Content>
</Card>
  )

  };
};

export default product;
