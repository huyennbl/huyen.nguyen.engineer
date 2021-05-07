import Modal from 'antd/es/modal'
import 'antd/es/modal/style/css'
const React = window.React

const ulProps = {
  transform: 'translateX(5%)',
  paddingRight: '7%',
  textAlign: 'justify'
}

const TooltipModal = ({ visible, handleCloseModal }) => {
  return (
    <Modal
      centered
      onCancel={handleCloseModal}
      visible={visible}
      footer={false}
      bodyStyle={{ padding: '3rem' }}
    >
      <h2>
        Notes for launching a page:
      </h2>
      <ul style={ulProps}>
        <li>
          You must have an&nbsp;
          <div style={{
            fontSize: '1.5rem',
            display: 'inline',
            color: 'var(--color-primary)',
            fontWeight: 600
          }}
          >
            index.html
          </div>&nbsp;file to make your site work.
        </li>
        <li>
          If this is the first time you create your site, please wait up to 30 minutes to have your site ready.
        </li>
        <li>
          If you update existing site, your site will get updated almost instantly.
        </li>
      </ul>
      <div style={{ borderBottom: 'var(--line)', margin: '1rem 0rem' }} />
      <h2>
        Plans
      </h2>
      <h3>
        Free hosting:
      </h3>
      <ul style={ulProps}>
        <li>
          Total size limit per upload: 30KB.
        </li>
        <li>
          No folder upload (all your files will stay in same directory)
        </li>
        <li>
          Anybody can modify your site by re-uploading files to the same domain.
        </li>
      </ul>
      <h3>
        Pro hosting: (will be released in the future)
      </h3>
      <ul style={ulProps}>
        <li>
          Total size limit: 10MB.
        </li>
        <li>
          Folder upload
        </li>
        <li>
          You will get an authentication code. Files in the domain can only be updated with this code.
        </li>
      </ul>
    </Modal>
  )
}

export default TooltipModal
