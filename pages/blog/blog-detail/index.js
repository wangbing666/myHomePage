import axios from 'axios'
import _ from 'lodash'
import Header from '../../../components/partials/header'
import Footer from '../../../components/partials/footer'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    return await axios.get(`http://localhost:7001/api/v2/blog`, { params: { id: query.id } })
      .then((response) => {
        const data = response.data
        if (data && data.code == 200) {
          return data
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <div dangerouslySetInnerHTML={{__html: this.props.data.content}}>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
