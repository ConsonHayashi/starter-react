import { useState } from 'react';

import { useAlert } from 'react-alert';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { Button } from '../../components/form/button';
import { Code } from '../../components/form/code';
import { Email } from '../../components/form/email';
import { Input } from '../../components/form/input';
import { Password } from '../../components/form/pass';
import { logup } from '../../requests/authV1';
import { AuthLayout } from '../../themes/adminto/auth.layout';

export function LogupPage () {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const navigate = useNavigate()
  const alert = useAlert()

  const logupEvent = () => {
    logup(
      { username: name, password: pass, code: code, email: email },
      window
    ).then((res) => {
      if (res.status === 400) {
        res.json().then((e) => {
          alert.error(e.content)
        })
      } else {
        res.json().then((e) => {
          alert.success(e.content)
          navigate('/auth/login')
        })
      }
    })
  }

  return (
    <AuthLayout>
      {{
        title: "注册",
        form: <>
          <Input
            label="用户名称*"
            helperText="notNull"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Password
            label="用户密码*"
            helperText="notNull"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          ></Password>
          <Email
            label="邮箱*"
            helperText="notNull"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Email>
          <Code
            label="验证码*"
            helperText="notNull"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></Code>
          <Button onClick={() => logupEvent()}>注册</Button>
        </>,
        link: <>
          <br />
          <Link to="/auth/login">已有用户名？返回登陆</Link>
          <br />
          <Link to="/home/version">🍉 Flina version 1.0.0</Link>
          <br />
        </>
      }}
    </AuthLayout>

  )
}
