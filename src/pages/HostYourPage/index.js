import Button from 'antd/es/button'
import 'antd/es/button/style/css'
import Upload from 'antd/es/upload'
import 'antd/es/upload/style/css'
import Select from 'antd/es/select'
import 'antd/es/select/style/css'
import Input from 'antd/es/input'
import 'antd/es/input/style/css'
import message from 'antd/es/message'
import 'antd/es/message/style/css'
import {
  UploadOutlined,
  QuestionCircleFilled
} from '@ant-design/icons'

import TooltipModal from './TooltipModal'
const React = window.React
const { reqwest } = window

const { Option } = Select
const defaultDomain = 'nguyen.engineer'

class HostYourPage extends React.Component {
  state = {
    fileList: [],
    uploading: false,
    subdomain: '',
    domain: defaultDomain,
    showTooltip: false
  }

  selectAfter = (
    <Select
      defaultValue={defaultDomain}
      onChange={(val) => {
        this.setState({ domain: val })
      }}
    >
      <Option value='nguyen.engineer'>nguyen.engineer</Option>
      <Option value='dang.engineer'>dang.engineer</Option>
      <Option value='hoang.engineer'>hoang.engineer</Option>
      <Option value='huynh.engineer'>huynh.engineer</Option>
      <Option value='pham.engineer'>pham.engineer</Option>
      <Option value='tran.engineer'>tran.engineer</Option>
    </Select>
  )

  handleUpload = () => {
    const { fileList } = this.state
    const formData = new FormData()
    formData.append('domain', this.state.domain)
    formData.append('subdomain', this.state.subdomain)
    fileList.forEach((file) => {
      formData.append('files', file)
    })

    this.setState({
      uploading: true
    })

    // You can use any AJAX library you like
    reqwest({
      url: 'https://zolb5dcare.execute-api.ap-southeast-1.amazonaws.com/prod/files',
      method: 'post',
      processData: false,
      data: formData,
      success: (body) => {
        this.setState({
          fileList: [],
          uploading: false
        })
        message.success(`${this.state.subdomain}.${this.state.domain} - ${body.message}`)
      },
      error: (err) => {
        const body = JSON.parse(err.response)
        this.setState({
          uploading: false
        })
        message.error(`Upload failed - ${body.message}`)
      }
    })
  }

  render () {
    const { uploading, fileList } = this.state
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file)
          const newFileList = state.fileList.slice()
          newFileList.splice(index, 1)
          return {
            fileList: newFileList
          }
        })
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file]
        }))
        return false
      },
      fileList,
      multiple: true
    }

    return (
      <div className='hyp'>
        <div>
          <div className='hyp__title'>
            Host your own page
            <TooltipModal
              handleCloseModal={() => {
                this.setState({
                  showTooltip: false
                })
              }}
              visible={this.state.showTooltip}
            />
            <QuestionCircleFilled onClick={() => this.setState({ showTooltip: true })} className='hyp__title-tooltip' />
          </div>
          <div className='hyp__main'>
            <Input
              className='hyp__subdomain'
              addonAfter={this.selectAfter}
              value={this.state.subdomain}
              placeholder='Alphanumeric (a to z, 0 to 9)'
              onChange={(e) => {
                const text = e.target.value
                const subdomain = text.match(/[a-zA-Z0-9]/g)?.join('') || ''
                this.setState({
                  subdomain
                })
              }}
            />
            <div className='hyp__btn-submit'>
              <Button
                type='primary'
                onClick={this.handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
              >
                {uploading ? 'Uploading' : 'Start Upload'}
              </Button>
            </div>
          </div>
          <div className='hyp__preview'>
            Your domain: {!this.state.subdomain
            ? <></>
            : <b>{`http://${this.state.subdomain}.${this.state.domain}`}</b>}
          </div>
          <div className='hyp__uploader-wrapper'>
            <Upload {...props} className='hyp__uploader'>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </div>
        </div>
      </div>
    )
  }
}

export default HostYourPage
