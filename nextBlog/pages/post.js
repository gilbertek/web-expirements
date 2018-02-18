import Header from '../components/header'
import withMui from '../shared/MUI/withMUI'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Link from 'material-ui/link'
import RaisedButton from 'material-ui/RaisedButton'
import 'isomorphic-fetch'

const Post = ({ title, content }) =>
  <div>
    <Header />
    <Card>
      <CardHeader title={title} />
      <CardText>
        <div dangerouslySetInnerHTML={{__html: content}} />
        <RaisedButton fullWidth={true}>
          <Link href='/' as={'/blog'}>
            <a>
              Go back to blog
            </a>
          </Link>
        </RaisedButton>
    </Card>
  </div>

Post.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(`${process.env.BLOGGER_URL}/${id}?key=${process.env.API_KEY}`)
  const data = await response.json()
  const title = data.title;
  const content = data.content;

  return { title, content }
}

export default withMui(Post)
