import Head from 'next/head'
export default class extends React.Component {
  render() {
    return [
      <Head key={1}>
        <link rel="stylesheet" type="text/css" href="/static/style.css"/>
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet"/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <title>我的个人博客</title>
      </Head>,
      <header className="header" key={2}>
        <h1 className="site-title">
          <a href="/">主页</a>
          <small className="site-title__tag">我的个人博客</small>
        </h1>
      </header>
    ]
  }
}