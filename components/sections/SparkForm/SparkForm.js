import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
library.add(faFileUpload)
import styles from '../../../styles/Form.module.scss'
import { useState } from 'react'

const UploadControl = ({ children, value, disabled, accept }) => {
  const [fileName, setFileName] = useState()
  const onChange = (e) => {
    // setFileName(e.target.value)
    // console.log(e.target.value)
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
      />
      <div className={styles.content}>{fileName ? fileName : children}</div>
    </label>
  )
}
export default function SparkForm() {
  return (
    <form className={styles.form} method="post" action="#">
      <h1>Spark TShirt Form</h1>
      <div className={styles.formFields}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="scholarId">ScholarID (If from NITS)</label>
        <input type="text" name="scholarId" id="scholarId" />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input type="text" name="mobileNumber" id="mobileNumber" required />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="isNITS">Are you from NITS?</label>
        <select name="isNITS" id="isNITS">
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
            Payment Proof
          </UploadControl>
        </div>
      </div>

      <div className={styles.formFields}>
        <label htmlFor="tshirtSize">Are you from NITS?</label>
        <select name="tshirtSize" id="tshirtSize">
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className={styles.formFields}>
        <label htmlFor="transactionId">Transaction ID</label>
        <input type="text" name="transactionId" id="transactionId" required />
      </div>

      <button className={styles.btn} type="submit">
        Submit
      </button>
    </form>
  )
}
