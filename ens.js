import React, { useState } from 'react'
import ENSAddress from '@ensdomains/react-ens-address'

function AddressInput() {
  const [resolved, setResolved] = useState({})

  const [type, setType] = useState(undefined)

  return (
    <>
      <ENSAddress
        provider={window.web3 || window.ethereum}
        onResolve={({ name, address, type }) => {
          if (type) {
            setResolved({
              value: address,
              type
            })
          }
        }}
      />
      {resolvedInput.type === 'address' &&
        `We found your reverse record ${resolved.value}`}
      {resolvedInput.type === 'name' &&
        `We found your address record ${resolved.value}`}
    </>
  )
}
