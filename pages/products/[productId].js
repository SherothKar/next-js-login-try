import { useRouter } from 'next/router'
import React from 'react'

function productId() {
    const get_id=useRouter();
    const products = get_id.query.productId;
  return (
    <div>
        {products}
      hi im productId
    </div>
  )
}

export default productId
