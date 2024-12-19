import React from 'react'
import { useParams } from 'react-router-dom'
import {user} from '../data'

function Userinfo() {
    const {id} = useParams()

    const finduser = user.find((x) => x.id == id)
  return (
    <div>
      user Info {id}
    </div>
  )
}

export default Userinfo
