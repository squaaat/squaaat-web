import Layout from '../components/Layout'
import 'styles/base.scss';

const IndexPage = () => (
  <Layout title="!SQUAAAT">
    <h1 style={{fontSize: '64pt', textAlign:'center', letterSpacing: '4px'}}>!SQUAAAT</h1>
    <p style={{textAlign:'center'}}>{process.env.STAGE}</p>
  </Layout>
)

export default IndexPage
