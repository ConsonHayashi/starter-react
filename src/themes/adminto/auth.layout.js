import { Center } from '../../components/contriant/center';
import { Col } from '../../components/contriant/col';
import { Page } from '../../components/contriant/pages';
import { Row } from '../../components/contriant/row';
import { ZSet } from '../../components/contriant/zset';
import {
  getImage,
  Image,
} from '../../requests/static';
import { Hr } from '../dark/hr';

// <AuthLayout>
// {{
//   title: "",
//   form: <></>,
//   link: <></>
//   }}
// </AuthLayout> 
export function AuthLayout (props) {
  return (
    <Page>
      <ZSet>
        <img
          className="w-screen h-screen object-cover"
          src={getImage(Image.AUTH_BG_LIGHT)}
          alt="background"
        ></img>
        <Center flexCss="w-screen h-screen justify-center items-center">
          <Col flexCss="justify-between bg-transparent px-8 bg-white">
            <Col flexCss="justify-start mt-8">
              <Row flexCss="h-auto justify-center items-center mb-8">
                <span className='w-16 font-mains text-start font-thin text-lg text-main-gold mr-4'>{props.children.title}</span>
                <Hr />
              </Row>
              {props.children.form}
            </Col>
            <div className='mb-4 w-96'>
              {props.children.link}
            </div>
          </Col>
        </Center>
      </ZSet>
    </Page>
  )
}

