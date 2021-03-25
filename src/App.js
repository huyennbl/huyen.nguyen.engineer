import { Tabs } from 'antd';
import Intro from './pages/intro'
const { TabPane } = Tabs;
import './App.scss'
function App() {
  return (
    <div className='container'>
      <div className='content'>
        <main className='main-view'>
          <Tabs className="tabs" defaultActiveKey="1" onc >
            <TabPane className="tab-title" tab="Self-introduction" key="1">
              <Intro />
            </TabPane>
            <TabPane className="tab-title" tab="Host your page" key="2">
              <Intro />
            </TabPane>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

export default App
