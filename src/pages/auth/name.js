import { useState } from 'react';

import { useAlert } from 'react-alert';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { Button } from '../../components/form/button';
import { Code } from '../../components/form/code';
import { Email } from '../../components/form/email';
import { getUsername } from '../../requests/authV1';
import { AuthLayout } from '../../themes/adminto/auth.layout';

export function NamePage () {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const navigate = useNavigate()
  const alert = useAlert()

  const nameEvent = () => {
    getUsername({ code: code, email: email }).then((res) => {
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
        title: "找回名称",
        form: <>
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
          <Button onClick={() => nameEvent()}>找回</Button>
        </>,
        link: <>
          <br />
          <Link to="/auth/login">已找回用户名？返回登陆</Link>
          <br />
          <Link to="/home/version">🍉 Flina version 1.0.0</Link>
          <br />
        </>
      }}
    </AuthLayout>

  )
}
