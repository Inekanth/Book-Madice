import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { doctors } from '../assets/assets'

const Appointment = () => {

  const {docId} = useParams()
  const { doctor } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)


  const fetchDocInfo = async () => {
    const docInfo = doctor.find(doc => doc._id === docId)
    
    setDocInfo(docInfo)
    console.log(docInfo)
  }


  useEffect(() => {
    fetchDocInfo()
  },[doctor, docId])


  return (
    <div>
        
    </div>
  )
}

export default Appointment