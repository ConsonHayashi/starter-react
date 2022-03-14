import { Center } from '../../components/contriant/center';
import { Col } from '../../components/contriant/col';
import { Page } from '../../components/contriant/pages';
import { Row } from '../../components/contriant/row';
import { ZSet } from '../../components/contriant/zset.js';
import { Hr } from '../../themes/dark/hr';

export function MainPage () {
  return (
    <Page>
      <ZSet>
        <Center flexCss="bg-main-gray w-screen min-h-screen"></Center>
        <Col flexCss="pt-36 w-screen min-h-screen justify-between ">
          <Col flexCss="md:px-8 ">
            <Row flexCss="h-20 justify-between items-center">
              <span className="text-2xl">Page Title</span>
              <span className="text-lg">main {'>'} home</span>
            </Row>
            <div className="min-w-fullbg-white">home</div>
          </Col>
          <Col>
            <Hr />
            <Row flexCss="h-20 bg-main-gray">footer 1</Row>
          </Col>
        </Col>
        <Col flexCss="">
          <Row flexCss="h-20 w-screen bg-main-black">header 1</Row>
          <Hr />
          <Row flexCss="h-16 w-screen bg-white">header2</Row>
        </Col>
      </ZSet>
    </Page>
  )
}
