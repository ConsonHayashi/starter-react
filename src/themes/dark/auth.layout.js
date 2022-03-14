import { Page } from '../../components/contriant/pages';
import { Row } from '../../components/contriant/row';
import {
  getLoginBgImage,
  Image,
} from '../../requests/static';

export function AuthLayout (props) {
  return (
    <Page>
      <Row>
        <Col flexCss="justify-between bg-main-gray px-8 w-full md:w-80">
          <Col flexCss="justify-start mt-8">
            <Row flexCss="h-auto justify-center items-center mb-8">
              <span className='w-16 font-mains text-start font-thin text-lg text-main-gold mr-4'>{props.children.title}</span>
              <Hr />
            </Row>
            {props.children.form}
          </Col>
          <div className='mb-4'>
            {props.children.link}
          </div>
        </Col>
        <img className='basis-0 w-0 h-full md:flex-auto' src={getLoginBgImage(Image.AUTH_BG_DARL)}
          alt="background"
        ></img>
      </Row>
    </Page>
  )
}