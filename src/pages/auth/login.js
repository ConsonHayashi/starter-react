import { useState } from 'react';

import { useAlert } from 'react-alert';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { Button } from '../../components/form/button';
import { Input } from '../../components/form/input';
import { Password } from '../../components/form/pass';
import { Hr } from '../../components/hr';
import { Col } from '../../components/layout/col';
import { Page } from '../../components/layout/pages';
import { Row } from '../../components/layout/row';
import { login } from '../../requests/authV1';
import { getLoginBgImage } from '../../requests/static';

export function LoginPage () {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const alert = useAlert()

  const loginEvent = () => {
    login({ username: name, password: pass }, window).then(res => {
      if (res.status == 400) {
        res.json().then(e => {
          alert.error(e.content)
        })
      } else {
        res.json().then(e => {
          alert.success(e.content);
          navigate("/home");
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
              <span className='w-16 font-mains text-start font-thin text-lg text-main-gold mr-4'>登陆</span>
              <Hr />
            </Row>
            <Input label="用户名称*" helperText="notNull" value={name} onChange={(e) => setName(e.target.value)}></Input>
            <Password label="用户密码*" helperText="notNull" value={pass} onChange={(e) => setPass(e.target.value)}></Password>
            <Button onClick={() => loginEvent()}>登陆</Button>
          </Col>
          <div className='mb-4'>
            <Link to="/auth/logup">没有用户名？注册新用户</Link>
            <br />
            <Link to="/auth/password">忘记用户密码？找回密码</Link>
            <br />
            <Link to="/auth/name">忘记用户名？找回用户名</Link>
          </div>
        </Col>
        <img className='basis-0 w-0 h-full md:flex-auto' src={getLoginBgImage()}></img>

      </Row>
    </Page>
  )
}