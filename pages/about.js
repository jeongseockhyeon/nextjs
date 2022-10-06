import Head from 'next/head'

const AboutPage = () => {
  const name = '정석현'
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <hi>about page</hi>
      <p>안녕하세요, {name} 님!</p>
    </div>
  )
}

export default AboutPage
