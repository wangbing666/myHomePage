import axios from 'axios'
import Link from 'next/link'
import _ from 'lodash'
import Footer from '../../components/partials/footer'
import Header from '../../components/partials/header'
import helpers from '../../helpers'
// import config from '../config'
import { Card } from 'antd'

import '../../less/blog.less';

const { Meta } = Card

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return await axios.get(`http://www.wangbing.ren:7001/api/v2/blog/show`)
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
          {
            this.props.data &&
            this.props.data.map((item, index) => {
              return (
                <Link href={`/blog/blog-detail/${item.id}`} key={index} prefetch>
                  <Card
                    className="blog-card"
                    hoverable
                    cover={<img alt="example" className="blog-img" src={item.image_url} />}>
                    <Meta
                      title={item.title}
                      description={item.date}
                    />
                  </Card>
                </Link>
              )
            })
          }
        </main>
        <Footer />
      </div>
    )
  }
}
