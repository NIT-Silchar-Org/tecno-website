import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
library.add(faFileUpload)
import styles from '../../../styles/Form.module.scss'
import { useEffect, useRef, useState } from 'react'

const UploadControl = ({ children, value, disabled, accept }) => {
  const [fileName, setFileName] = useState()
  const onChange = (e) => {
    setFileName(e.target.value)
  }
  return (
    <label htmlFor="contained-button-file" className="m-0 w-100">
      <input
        value={value}
        accept={accept}
        disabled={disabled}
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={disabled ? () => {} : onChange}
        name="paymentReceiptImg"
        required
      />
      {fileName ? <div className={styles.content}>{fileName}</div> : children}
    </label>
  )
}
export default function SparkForm() {
  const ref = useRef()
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behaviour: 'smooth' })
    }, 2000)
  }, [])
  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setErr(false)
    const formData = new FormData(e.target)

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/spark/tshirt`,
        formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        },
      )
      .then((res) => {
        if (res.data.status < 300) {
          setLoading(false)
        } else {
          setErr(true)
        }
      })
      .catch(() => setErr(true))
      .finally(() => setLoading(false))
  }
  return (
    <form
      onSubmit={onSubmit}
      ref={ref}
      className={styles.form}
      method="post"
      action="#"
    >
      <h1>Spark TShirt Form</h1>
      <div className={styles.formFields}>
        <label htmlFor="name">Name *</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="email">Email *</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="scholarId">ScholarID (If from NITS)</label>
        <input type="text" name="scholarId" id="scholarId" />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="mobileNumber">Mobile Number *</label>
        <input type="text" name="mobileNumber" id="mobileNumber" required />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="isNITS">Are you from NITS? *</label>
        <select name="isNITS" id="isNITS" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className={styles.formFields}>
        <label htmlFor="hostelName">Hostel Name (If from NITS)</label>
        <input type="text" name="hostelName" id="hostelName" />
      </div>

      <div className={styles.formFields}>
        <label htmlFor="address">Address (If outside NITS)</label>
        <input type="text" name="address" id="address" />
      </div>
      <div className={styles.formFields}>
        {/* <input type="file" name="paymentProof" id="paymentProof" required /> */}
        <div className={styles.btn}>
          <UploadControl accept="image/*">
            <FontAwesomeIcon icon={['fa', 'file-upload']} />
            Payment Proof*
          </UploadControl>
        </div>
      </div>

      <div className={styles.formFields}>
        <label htmlFor="tshirtSize">TShirt Size*</label>
        <select name="tshirtSize" id="tshirtSize" required>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className={styles.formFields}>
        <label htmlFor="transactionId">Transaction ID *</label>
        <input type="text" name="transactionId" id="transactionId" required />
      </div>

      <button className={styles.btn} type="submit">
        {loading ? 'Loading...' : err ? 'Error Occured - Retry' : 'Submit'}
      </button>
    </form>
  )
}