import { useState } from 'react';

import { useAlert } from 'react-alert';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { Button } from '../../components/form/button';
import { Code } from '../../components/form/code';
import { Email } from '../../components/form/email';
import { Hr } from '../../components/hr';
import { Col } from '../../components/layout/col';
import { Page } from '../../components/layout/pages';
import { Row } from '../../components/layout/row';
import { getUsername } from '../../requests/authV1';
import { getLoginBgImage } from '../../requests/static';

export function NamePage () {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const alert = useAlert()

  const nameEvent = () => {
    getUsername({ code: code, email: email }, window).then(res => {
      if (res.status == 400) {
        res.json().then(e => {
          alert.error(e.content)
        })
      } else {
        res.json().then(e => {
          alert.success(e.content);
          navigate("/auth/login");
        })
      }
    })
  }

  return (
    <Page>
      <Row>
        <Col flexCss="justify-between bg-main-gray px-8 w-full md:w-80">
          <Col flexCss="justify-start mt-8">
            <Row flexCss="h-auto justify-center items-center mb-8">
              <span className='w-16 font-mains text-start font-thin text-lg text-main-gold mr-4'>找回名称</span>
              <Hr />
            </Row>
            <Email label="邮箱*" helperText="notNull" value={email} onChange={(e) => setEmail(e.target.value)}></Email>
            <Code label="验证码*" helperText="notNull" value={code} onChange={e => setCode(e.target.value)}></Code>
            <Button onClick={() => nameEvent()}>找回</Button>
          </Col>
          <div className='mb-4'>
            <Link to="/auth/login">已找回用户名？返回登陆</Link>
            <br />
          </div>
        </Col>
        <img className='basis-0 w-0 h-full md:flex-auto' src={getLoginBgImage()}></img>

      </Row>
    </Page>
  )
}