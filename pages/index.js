import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

export default function Index() {
  return (
    <Layout home>
      <title>
        {siteTitle}
      </title>
      <section className={utilStyles.headingMd}>
        <p>
          任意の文字列・単語の語尾によしなに「りあ！」とつけてくれる子です。
          Hogeりあ！
        </p>
        <CustomInput>
        </CustomInput>
        <CustomButton>
        </CustomButton>
      </section>
    </Layout>
  )
}